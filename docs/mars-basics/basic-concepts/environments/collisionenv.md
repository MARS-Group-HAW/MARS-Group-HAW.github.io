# Collision Environment

A `CollisionEnvironment` is a game environment that manages characters and obstacles. A character is an agent that participates in the game that is played in the environment (for more information on `Character`, click [here](#character)). An obstacle is a physical object with a given geometric shape that is positioned in the environment (for more information on `Obstacle`, click [here](#obstacle)). The environment can handle different collision types, each described by a `CollisionKind` (for more information on `CollisionKind`, click [here](#character)). A simple example showing a few functionalities can be found [here](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/Collision_Test%20CS).

**Note:** While a `CollisionEnvironment` does not feature agents and entities, it has characters and obstacles. A character corresponds to an agent, and an obstacle corresponds to an entity. Characters can interact with obstacles, similar to how agents can interact with entities.

## Creating an environment

A `CollisionEnvironment` does not have a layer in the usual sense. The spatial extent of a `CollisionEnvironment` can be specified explicitly via a bounding box. If no bounding box is defined, the spatial extent is defined dynamically based on the positions of the obstacles.

Initialization occurs as shown in the following code snippet.

```csharp
var environment = new CollisionEnvironment<Player, Obstacle>();
```

If an explicit spatial extent is desired, it can be specified via a bounding box as follows:

```csharp
environment.BoundingBox = new BoundingBox(new Position(0, 0), new Position(9, 9));
```

Here, the character type `Player` implements `IPlayer` and the obstacle type `Obstacle` implements `IObstacle`.

It is possible to load geometries to create a desired playground within `environment`. The following two code snippets provide examples for generating geometries: a line string and a polygon.

```csharp
var lineString = new LineString(new[] {
  new Coordinate(5,5), 
  new Coordinate(8,8) 
});
```
```csharp
var polygon = new Polygon(new LinearRing(new[]  
{  
  new Coordinate(1,1),  
  new Coordinate(2,3),  
  new Coordinate(3,3),  
  new Coordinate(1,1)  
}));
```

<center>
  <figure>
    <img src="../../../../images/docu/environment_with_two_obstacles.png" alt="environment_with_two_obstacles" width="40%"/>
    <figcaption>Fig.1: Illustration of a possible <tt>CollisionEnvironment</tt> with a bounding box spanning the coordinates between <tt>(0,0)</tt> and <tt>(9,9)</tt>. The environment holds the obstacles generated in the two above code snippets. The red line represents <tt>lineString</tt> and the blue triangle represents <tt>polygon</tt>.</figcaption>
  </figure>
</center>

The two generated geometries can be inserted into the environment as follows.

```csharp
environment.Insert(new Obstacle(), polygon);  
environment.Insert(new Obstacle(), lineString);
```

The `environment` consists of a graph (made up of nodes and edges) that holds inserted obstacles at their specified positions. A node is a `RoutingPoint` and an edge is a `Route`. A set of routing points can be arranged evenly (as shown in Fig.1) with a slight offset (as shown in Fig.2) in a grid structure.

TODO: Einstellungsparameter für Environment-Initialisierung finden und hier dokumentieren.

<center>
  <figure>
    <img src="../../../../images/docu/environment_full.png" alt="environment_full" width="65%"/>
    <figcaption>Fig.2: Illustration of a possible <tt>CollisionEnvironment</tt> with a spatial extent that was generated dynamically based on the positioning of the obstacles. The routing points that have a slight offset. The edges represent possible paths through the environment. The purple boxes represent obstacles.</figcaption>
  </figure>
</center>

The offset can be introduced as follows. Here, a total of `225` routing points are distributed homogeneously across the `environment` with an offset per routing point of `0.05`. The resulting distribution of routing points can look like the set of routing points shown in Fig.2.

```csharp
environment.RoutingPointsGenerator =
    new HomogenousRoutingPointsGenerator(225, 0.05);
```

Alternatively to the homogeneous distributions shown in Fig.1 and Fig.2, a set of routing points that are distributed heterogeneously in space can be defined as follows. Here, a previously defined bounding box is divided into `20` sections and `5` routing points per section.

```csharp
environment.RoutingPointsGenerator =
    new SectionalRandomRoutingPointsGenerator(20, 5);
```

**Note:** In all cases, the modeller is responsible for the correct positioning of characters within the `environment`. Therefore, it is advisable to position obstacles first (thereby generating the spatial extent of the environment) and then positioning characters such that they are situated within that spatial extent.

## Interaction with/within the `CollisionEnvironment`

### Add a character to the environment

To add a `Player` to the `environment`, the `Insert()` method of the `Environment` is used.

```csharp
Position = RandomPosition();
Environment.Insert(this);
```

This example takes place in the initialization method of an character `Player`. The character has a property `Position`. This property is initialized with a random position that consists of a tuple (x,y). Once the character has a defined position, it can be placed on the `Environment` by calling the environment's `Insert(<object reference>)` method and passing a reference to the character.

### Remove an existing object

Removing a character follows the same principle as adding it. The `Remove(<object to remove>)` method is executed via the `Environment` and the entity to be removed is specified.

```csharp
Environment.Remove(<object to remove>);
```

### Move an agent to another location

A `Player` can call the `Move(...)` method of a `CollisionEnvironment` to move through the environment, as shown in the following code snippet.

```csharp
Environment.Move(this, <bearing>, <distance>)
```

- `<bearing>` is a double between 0.0 and 360.0 that specifies the direction in which the `Player` wants to move. Here, 0.0 means a direction that points north. The direction of a value that is larger than 0.0 is determined by turning in a clock-wise direction from the north-facing direction.
- `<distance>` is a double that defines the number of units that the `Player` wants to move in the direction specified by `<bearing>`.

**Note:** The actual movement trajectory of a `Player` depends on the properties of the `Obstacle` objects (e.g., `CollisionKind`) that the `Player` might encounter on the desired path trajectory specified by `<bearing>` and `<distance>`. For more information on obstacles, please see (for more information on `CollisionKind`, click [here](#character)).

In addition to movement via the `Move(...)` method, a route between two `RoutingPoints` can be specified via the `FindRoute(...)` method as follows. 

```csharp
var route = environment.FindRoute(character, goal).ToList();
```

This call returns a route, which is a list of `Position` objects. The route specifies a path through the environment from the current position of `character` to `goal`.

## Explore other characters and obstacles

A `Player` can explore other characters and obstacles in the environment as shown in the following two code snippets.

```csharp
var exploredCharacters = environment.ExploreCharacters(<source>, <geometry>, <predicate>)
```

```csharp
var exploredObstacles = environment.ExploreObstacles(<geometry>, <predicate>)
```

- `ExploreCharacters(...)` returns a list of characters, where `<source>` is the requesting character, `<geometry>` is the spatial area of exploration, and `<predicate>` is an optional filter criterion that can be set to filter the returned collection. 
- `ExploreCharacters(...)` returns a list of obstacles, where `<geometry>` is the spatial area of exploration and `<predicate>` is an optional filter criterion that can be set to filter the returned collection. 

## Exporting data for a Grid Environment

TODO

## Character

A `Character` is an active participant of the game that is played in a `CollisionEnvironment`. It is described by the following properties:

- `ID`: A `Guid` that uniquely identifies a `Character`
- `Position`: The current position, described by a tuple (x,y), of a `Character`
- `Extent`: The spatial extent of a `Character`

Furthermore, the following method is inherent to every `Character`:
- `HandleCollision(ICharacter other)`: This method is called by a `Character` upon collision with `ICharacter` (a collision between two characters). It returns a `CollisionKind` that represents the action that the `Character` should take as a result of the collision.

A `CollisionKind` can be one of three actions:
- `Block`: A `Character` blocks `other`, i.e., acts like a obstacle for that `Character`
- `Pass`: A `Character` moves through `other`, i.e., continues along its original movement trajectory
- `Remove`: A `Character` is removed from the environment due to the collision

## Obstacle

- `IsRoutable(ICharacter)`: returns a boolean that states whether `ICharacter` is a blocking object or can be passed
- `HandleCollision(ICharacter)`: This method is called by an `Obstacle` when `ICharacter` collides with it. It returns a `CollisionKind` that represents the role that the `Obstacle` should play in the context of the movement behavior of `ICharacter`.
- `HandleExploration(ICharacter)`: This method handles the visibility check for the `Obstacle` by returning the `VisibilityKind` of the `Obstacle`

A `VisibilityKind` describes whether an `Obstacle` is `Transparent` or `Opaque` with respect to the vision of a `Character`:
- `Transparent`: A `Character` can see through the `Obstacle`
- `Opaque`: A `Character` cannot see through the `Obstacle`

## Special Cases

TODO
