# Environments

An environment is a spatial data structure. Its main purpose is to enable performant access to resources and networks for agents. To facilitate agent movement and interactions, an environment features a number of methods and functionalities that can be called by the agents that interacts with it. Multiple environments can be associated with each other, and one or more environment(s) are generally held by a layer.

There are different types of environments:
- [`SpatialHashEnvironment`](spatialhashenv.md)
- [`GeoHashEnvironment`](geohashenv.md)
- [`SpatialGraphEnvironment`](spatialgraphenv.md)
- [`CollisionEnvironment`](collisionenv.md)

Environment support the following methods:
- `Insert/Remove` to position/remove agents or entities in/from the environment
- `Move` to enable agents or entities to move within the environment 
- `Explore` to enable an agent to search for and query other agents, entities, and objects of interest within the environment.

The exact functionality of these methods is different for each environment type and is described in the corresponding sections (see below) and articles.

## SpatialHashEnvironment
A `SpatialHashEnvironment` is an environment in which the world is divided into cells of equal size, like on a chessboard. For more information, please click [here](spatialhashenv.md).

## GeoHashEnvironment
A `GeoHashEnvironment` is an environment that consists of geospatial point objects. A geospatial point objects is a georeferenced location that consists of a longitude and latitude, in this case based on the coordinate reference system WGS84 EPSG:4326 CRS. For more information, please click [here](geohashenv.md).

## SpatialGraphEnvironment
A `SpatialGraphEnvironment` is defined by nodes with spatial locations and edges that connect these nodes. Such an environment limits movement and exploration of its agents to the available nodes and edges. For more information, please click [here](spatialgraphenv.md).

## CollisionEnvironment
A `CollisionEnvironment` is a game environment that manages characters and obstacles. A character is an agent that participates in the game that is played in the environment. An obstacles is a physical object with a given geometric shape that is positioned in the environment. The environment can handle different collision types. For more information, please click [here](collisionenv.md).
