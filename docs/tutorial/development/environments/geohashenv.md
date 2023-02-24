---
sidebar_position: 10
---

# GeoHashEnvironment (Geospatial Grid Environment)

A geospatial environment is an environment that consists of geospatial point objects. A geospatial point objects is a georeferenced location that consists of a longitude and latitude, in this case based on the coordinate reference system WGS84 EPSG:4326 CRS. A simple example showing a few functionalities can be found [here](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/Geo_Test%20CS).

**Note:** The `GeoHashEnvironment` uses the Geohash encoding to store point data. Objects are inserted into a tree and can be queried against a given spatial window query, such as k-NN or just a point query.

## Creating an environment

Creating a `GeoHashEnvironment` can be done by specifying the geographic region to cover. For example, create a `GeoHashEnvironment` for the city centre of Hamburg, using the `BuildByBBox()` method. This method requires a bounding box.

```csharp
var environment = GeoHashEnvironment<Citizen>.BuildByBBox(9.908253, 53.510570, 10.100194, 53.602103);
```

In this example, a bounding box with lower-left bound (lon:9.908253,lat:53.510570) and upper-right bound (lon:10.100194,lat:53.602103) is specified. The agent type `Citizen` lives on this layer, as specified in the initialization signature.

**Note:** Alternatively, a `GeoHashEnvironment` can be initialized using geospatial data that is loaded into the simulation at runtime. Doing so changes the initialization routine of the layer type, as shown [below](#importing-data-for-a-geohashenvironment).

**Note:** Optionally, the precision of the environment can be specified using the parameter `cellSizeInM`. The smaller the cell size, the more precise the coordinate computation, but the slower the simulation execution.

The choice of the cell size depends mainly on the size of a time step. For example, for a simulation with a temporal reference (i.e., the simulation's start time and end time are specified using real dates and/or times) with a time step equal to 1 second, a cell size of 1 meter (default when no argument was passed) is recommended. With an increased time step, e.g. 1 minute, the cell size should be proportionally larger to maintain the realism of individual movement of objects.

## Interaction with/within the Grid Environment

### Add an agents to the environment

To add an object (for example, an agent or entity) to a georeferenced environment, the `Insert` method of the `Environment` is used.

```csharp
Position = Position.CreateGeoPosition(<longitude>, <latitude>);
Environment.Insert(this);
```

This example takes place in the initialization method of an agent `Citizen`. The agent has a property `Position`. This property is initialized with a geoposition that consists of a tuple `(<longitude>,<latitude>)`. These values can be imported from an agent initialization file (typically a CSV file; see documentation on [Agents](../agent.md) for more details). Once the agent has a defined position, it can be placed on the `Environment` by calling the environment's `Insert(<object reference>)` method and passing a reference to the agent.

### Remove an existing object

Removing an agent follows the same principle as adding it. The `Remove(<object to remove>)` method is executed via the `Environment` and the entity to be removed is specified.

```csharp
Environment.Remove(this);
```

**Note:** Alternatively, an agent can be removed from the layer on which the agent lives by calling the `UnregisterAgent` method of the layer. This method, in turn, has a method `Invoke()`, which takes the layer from which the agent should be removed and a reference to the agent that should be removed.

```csharp
Environment.UnregisterAgent.Invoke(Environment, this);
```

### Move an agent to another location

The `GeoHashEnvironment` enables agents to move on it. There are four movement methods, which are illustrated in the following examples.

The first movement method is `MoveTo()`, which is called as shown below.

```csharp
Environment.MoveTo(this, <position tuple (longitude, latitude)>);
```

Upon execution of the above code, the `Environment` determines the shortest path between the agent's current position and the goal position specified in the method's second parameter.

**Note:** There are different options for the second parameter of `MoveTo()`. Alternatively to the tuple shown above, the method can take two individual double values &ndash; representing the longitude and latitude of the desired position, respectively &ndash; as the second and third parameter. Or an array of double values can be passed to represent a path which the agent should travel along.

The second movement method is `MoveTowards()`, which has two signatures. This method can be called either with a `DirectionType` enum or with a bearing double. For more information on how to calculate a bearing, please see [here](#how-to-calculate-a-bearing).

```csharp
Environment.MoveTowards(this, <DirectionType>);
```

```csharp
Environment.MoveTowards(this, <bearing>);
```

The `DirectionType` enum can be `Up`, `Down`, `UpRight`, `UpLeft`, etc. The bearing can be a double between 0.0 (equivalent to the direction type `Up`) and 360.0 and specifies the angle to which the agent should turn and move.

The last movement method is `MoveToPosition()`. This method takes a reference to the object (agent or entity) that should be re-positioned and a latitude and longitude. It returns a position object, allowing the agent to be positioned at the respective position by overwriting its `Position` property. **Note:** this function allows agents to be "teleported" to any given position on the environment.

```csharp
Environment.MoveToPosition(this, <latitude>, <longitude>);
```

## Explore other agents and resources

Agents can explore an environment to identify other agents and resources by calling the `Explore()` method on the environment. Below is an example.

```csharp
IEnumerable<Citizen> result = Environment.Explore();
```

This call explores the `Environment` for `Citizen` agents. Since no parameters are specified, the entire `Environment` is explored. **Note: in simulations with many agents, this can be computationally costly.**

Alternatively, the `Explore()` method can also be called with parameters. The signature is `Explore(<position>, <search_radius>, <number_of_objects>, <filter_predicate>)`:
- `position` is the geospatial position (consisting of an `longitude` and `latitude`) from which the exploration should begin (e.g., the caller's current position).
- `<search_radius>` is the extent of the exploration (e.g., an `Explore()` call with a search radius of `5` on a geohash environment explores the environment within five grid cells of the specified `<position>`).
- `<number_of_objects>` is the maximum number of objects (i.e., `Citizen` agents, in case of the current example) that should be returned as a result of the exploration.
- `<filter_predicate>` is an optional predicate (selection expression) that can be applied to the exploration goal (in this case `Citizen` agents) in case only those agents that satisfy a certain condition are required. Below is an example of a full `Explore()` call.

```csharp
IEnumerable<Citizen> result = Environment.Explore(Position, 20, -1, agentInEnvironment => agentInEnvironment.HasBike);
```

In this example, all `Citizen` agents within `20` steps that satisfy the `HasBike` condition are returned and stored in the `IEnumerable` collection. By specifying `-1` in the second parameter, the results are not limited by search radius.

Furthermore, if you want to query the entire spatial space, you specify `-1D` for the `<radius>`.

```csharp
IEnumerable<Citizen> result = Environment.Explore(Position, -1D, -1, agentInEnvironment => agentInEnvironment.HasBike);
```

In this case, all registered `Citizen` agents in the environment are queried for the condition `HasBike`. However, the filter specified in the fourth parameter is still applied to potentially filter the results based on whether the agents satisfy the condition `HasBike`.

**Note:** Alternatively, a `Select()` and other LINQ queries can be formulated on the `IEnumerable<Citizen> result`, which will be evaluated after the query is executed.

## Importing data for a GeoHashEnvironment

The bounding box of a `GeoHashEnvironment` is defined based on a set of data that define the geospatial extent of the simulation environment of interest. For example, this can be an ASC file that covers the Hamburg metropolitan area. This file can be loaded into the simulation via the model's configuration file *config.json*:

```json
Previous section...
"layers": [  
  {  
	"name":"MyGeoHashLayer",  
	"file": "Resources/hamburg.asc"
  }
]
Next section...
```

Since `MyGeoHashLayer` is loaded into the simulation from the configuration file, a property with the same name is required in the layer class. This requires an annotation `[PropertyDescription]` above the property name, indicating to the runtime system that external information is available to be written into the property at runtime. For more information on layer initialization and annotations, please click [here](https://mars.haw-hamburg.de/articles/core/basic-concepts/layers.html).

Then, an environment can be initialized as follows (typically in the initialization method of the layer):

```csharp
var extent = new Envelope(MyGeoHashLayer.Extent);
var environment = GeoHashEnvironment<Citizen>.BuildByBBox(new BoundingBox(extent), <cellSizeInM>);
```

By calling the property `Extent`, the geographic extent that is represented in the property `MyGeoHashLayer` is stored in a local variable `extent`. This information is then used to initialize a `GeoHashEnvironment` with a bounding box that is equivalent to the geographic extent stored in `extent`. Here, the parameter `cellSizeInM` is required and denotes the size of an individual cell of the `GeoHashEnvironment` in meters.

For more information and an example of how to generate an abstract environment with a spatial extent that is made up of multiple layers, please see [here](https://git.haw-hamburg.de/mars/model-deployments/-/blob/master/C%23%20Models/Geo_Test%20CS/Geo_Test%20CS/Model/LandscapeLayer.cs).

## Exporting data for a Geo Environment

The `GeoHashEnvironment` can be exported to a number of output formats. In the below example, CSV and JSON are illustrated.

```csharp
File.WriteAllText("geoEnvironment.csv", environment.ToCsv());
```

```csharp
File.WriteAllText("geoEnvironment.json", environment.ToJson());
```

## Special Cases

### How to Calculate a Bearing

The bearing (in degrees) between two geographic coordinates is the angle between them relative to the `UP` position. The `UP` position points north and its bearing is equal to 0.0. From there, the size the angle increases in the clockwise direction.

The following two methods can be used to calculate a bearing between two positions. The first method takes the two positions directly, whereas the second method takes the individual coordinates of each position (as doubles).

```csharp
var bearing = GetBearing(this Position pt1, in Position pt2)
```


```csharp
var bearing = GetBearing(double x1, double y1, double x2, double y2)
```
