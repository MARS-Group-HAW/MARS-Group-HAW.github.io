---
sidebar_position: 1
---

# SpatialHashEnvironment (Grid Environment)

A grid is an environment in which the world is divided into cells of equal size, like on a chessboard. An object (an agent or an entity) on the grid can be moved along the horizontal, vertical, and diagonal axes. A simple example showing a few functionalities can be found [here](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/Grid_Test%20CS).

## Creating an environment

In MARS, a grid environment is represented as a `SpatialHashEnvironment` with two dimensions, corresponding to the x-axis and y-axis of a Cartesian coordinate system. To initialize a grid environment, the size of each dimension needs to be specified.

```csharp
IEnvironment<Sheep> Environment = new SpatialHashEnvironment<Sheep>(10, 10);
```

In this example, the initialized `Environment` consists of 10 x 10 individual cells. The grid is defined by a so-called bounding box with lower-left bound (0,0) and upper-right bound (9,9). The `Sheep` agents live on the `Environment` can be defined to move on it as described below.

Optionally, a `cellSize` can be specified to change the size of an individual grid cell (default is 1).

## Interaction with/within the Grid Environment

### Add an agent to the environment

To add an object (for example, an agent or entity) to the grid, the `Insert()` method of the `environment` is used.

```csharp
Position = RandomPosition();
Environment.Insert(this);
```

This example takes place in the initialization method of an agent `Sheep`. The agent has a property `Position`. This property is initialized with a random position that consists of a tuple (x,y). Once the agent has a defined position, it can be placed on the `Environment` by calling the environment's `Insert(<object reference>)` method and passing a reference to the agent.

### Remove an existing object

Removing an agent follows the same principle as adding it. The `Remove(<object to remove>)` method is executed via the `Environment` and the entity to be removed is specified.
```csharp
Environment.Remove(<object to remove>);
```

### Move an agent to another location

The `SpatialHashEnvironment` (i.e., the grid environment) enables agents to move on it. There are three movement methods, which are illustrated in the following examples.

The first movement method is `MoveTo()`, which is called as shown below.

```csharp
Environment.MoveTo(this, <position tuple (x, y)>);
```

Upon execution of the above code, the `Environment` determines the shortest path between the agent's current position and the goal position specified in the method's second parameter.

**Note:** There are different options for the second parameter of `MoveTo()`. Alternatively to the tuple shown above, the method can take two individual double values &ndash; representing the x- and y-coordinate of the desired position, respectively &ndash; as the second and third parameter. Or an array of double values can be passed to represent a path which the agent should travel along.

The second movement method is `MoveTowards()`. This method can be called either with a `DirectionType` enum or with a bearing double.

```csharp
Environment.MoveTowards(this, <DirectionType>);
```

```csharp
Environment.MoveTowards(this, <bearing>);
```

The `DirectionType` enum can be `Up`, `Down`, `UpRight`, `UpLeft`, etc. The bearing can be a double between 0.0 (equivalent to the direction type `Up`) and 360.0 and specifies the angle to which the agent should turn and move. For more information on how to calculate a bearing, please see [here](#how-to-calculate-a-bearing).

**Note:** The `SpatialHashEnvironment` provides the following properties:
- `CheckBoundaries`: Checking for specified boundaries and reposition entities that move out the dimensions.
- `DistanceFunction`: The distance function used for `Explore` and `Move` actions, interpreting the passed exploration radius or moving distance (default is [Chebyshev](https://en.wikipedia.org/wiki/Chebyshev_distance))

## Explore other agents and resources

Agents can explore an environment to identify other agents and resources by calling the `Explore()` method on the environment. Below is an example.

```csharp
IEnumerable<Sheep> result = Environment.Explore();
```

This call explores the `Environment` for `Sheep` agents. Since no parameters are specified, the entire `Environment` is explored. **Note: in simulations with many agents, this can be computationally costly.**

Alternatively, the `Explore()` method can also be called with parameters. The signature is `Explore(<position>, <search_radius>, <number_of_objects>, <filter_predicate>)`:
- `position` is the position (consisting of an `x` and `y` coordinate) from which the exploration should begin (e.g., the caller's current position).
- `<search_radius>` is the extent of the exploration (e.g., an `Explore()` call with a search radius of `5` on a grid environment explores the environment within five grid cells of the specified `<position>`).
- `<number_of_objects>` is the maximum number of objects (i.e., `Sheep` agents, in case of the current example) that should be returned as a result of the exploration.
- `<filter_predicate>` is an optional predicate (selection expression) that can be applied to the exploration goal (in this case `Sheep` agents) in case only those agents that satisfy a certain condition are required. Below is an example of a full `Explore()` call.

```csharp
IEnumerable<Sheep> result = Environment.Explore(Position, 20, -1, agentInEnvironment => agentInEnvironment.Energy > 50);
```

In this example, all `Sheep` agents within `20` steps that satisfy the `Energy > 50` condition are returned and stored in the `IEnumerable` collection. By specifying `-1` in the second parameter, the results are not limited by search radius.

Furthermore, if you want to query the entire spatial space, you specify `-1D` for the `<radius>`.

```csharp
IEnumerable<Sheep> result = Environment.Explore(Position, -1D, -1, agentInEnvironment => agentInEnvironment.Energy > 50);
```

In this case, all registered `Sheep` agents in the environment are queried for the condition `Energy > 50`. However, the filter specified in the fourth parameter is still applied to potentially filter the results based on whether the agents satisfy the condition `Energy > 50`.

**Note:** Alternatively, a `Select()` and other LINQ queries can be formulated on the `IEnumerable<Sheep> result`, which will be evaluated after the query is executed.

## Importing data for a Grid Environment

Initial data for a `SpatialHashEnvironment` can be imported by specifying a file in the model's configuration file *config.json*:

```json
Previous section...
"layers": [  
  {  
	"name":"MyGridLayer",  
	"file": "Resources/grid.csv"
  }
]
Next section...
```

In `layers`, the grid environment `MyGridLayer` receives initial information to be inserted into its grid cells via with initialization file `grid.csv`. For example, in the wolf-sheep-grass model, this information can represent the initial amount of grass per grid cell (e.g., as an integer or double). For an example of an initialization file for a grid environment, please click [here](https://git.haw-hamburg.de/mars/model-deployments/-/blob/master/C%23%20Models/Grid_Test%20CS/Grid_Test%20CS/Resources/grid.csv).

Within the `InitLayer(...)` method of the `MyGridLayer` class, the data can be loaded as follows:

```csharp
GridEnvironment = new SpatialHashEnvironment<Sheep>(Height, Width);
```

If the class name matches the name of the layer in config.json (i.e., `MyGridLayer` in the above example), then the MARS runtime system obtains values for properties such as `Height` and `Width` from the referenced CSV file and integrate the data from the file into the environment.

The above code snippet can be used to integrate input data from a file (e.g., a CSV file) into the environment. For more information and an example, please see [here](https://git.haw-hamburg.de/mars/model-deployments/-/blob/master/C%23%20Models/Grid_Test%20CS/Grid_Test%20CS/Model/MyGridLayer.cs).

## Exporting data for a Grid Environment

The `SpatialHashEnvironment` can be exported to a number of output formats. In the below example, CSV and JSON are illustrated.

```csharp
File.WriteAllText("gridEnvironment.csv", environment.ToCsv());
```

```csharp
File.WriteAllText("gridEnvironment.json", environment.ToJson());
```

## Special Cases

### How to Calculate a Bearing

The Cartesian bearing (in degrees) between two Cartesian coordinates is the angle between them relative to the `UP` position. The `UP` position points north and its bearing is equal to 0.0. From there, the size the angle increases in the clockwise direction.

The following two methods can be used to calculate a bearing between two positions. The first method takes the two positions directly, whereas the second method takes the individual coordinates of each position (as doubles).

```csharp
var bearing = GetBearingCartesian(<start_position>, <goal_position>)
```

```csharp
var bearing = CalculateBearingCartesian(<start_x>, <start_y>, <goal_x>, <goal_y>)
```
