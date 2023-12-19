---
sidebar_position: 60
description: Describes the different formats in which simulation output data can be stored
---

# Simulation Output Formats

The output of the simulation can be set to which file format or database results should be saved. There are different output types which are useful for different analyses. 

Current supported output types are:

|Model type |Support|
|---------|-----------|
|agent |``csv``, ``mongodb``, ``postgres``, ``sqlite``, ``redis``, ``kafka`` |
|entity |``csv``, ``mongodb``, ``postgres``, ``sqlite``, ``redis``, ``kafka``|
|vector-layer |``csv``,``geojson``,``mongodb``,``postgres``,``sqlite``,``geojsonsocket``
|raster-layer |``csv``, ``asc`` |

:::note
The output of ASCII Grid ``asc`` for ``raster-layer`` and GeoJSON ``geojson`` for ``vector-layer`` each generate new files. It is therefore recommended not to enable full output.
:::

## CSV (Comma Separated File)

By default MARS supports the output in CSV and TSC format. For each type an individual ``csv`` file created and all snapshots are persisted. To use CSV as the target output, the ``csv`` needs to be specified in your simulation configuration.

```json
{
	"globals": {
		"output": "csv",
		"csvOptions": {
			"delimiter": "127.0.0.1",
			"port": 5432,  
			"user": "postgres",
			"password": "mypassword"
		}
	}
}
```

The CSV output can be configured with user-defined delimiter and output formats.


## Relational database

Simulation results can be stored in a relational database and queried via SQL. MARS creates and manages ad-hoc database schemas and adds new data to this schema. For analysis via SQL some examples are described [here](../analysis/visualizing_sim_results.md). 

Data is created according to the Table per Class Hierachy principle. Concrete types of which instances can be created have a representation as table and columns store the value properties. No ``1:n``, ``n:m`` relationships are managed.

MARS currently supports PostgreSQL and SQLite.

### PostgreSQL (PostGIS)

PostgreSQL is a free, object-relational database management system that is largely compliant with the SQL standard SQL:2011. 

The PostGIS is the extension for the management and processing of *geospatial* data of the form:

```sql
SELECT tick, id, ST_SetSRID(ST_MakePoint(x, y),4326) AS geometry 
FROM my_scenario.my_agent
```

An overview of PostGIS spatial operations can be found [here](http://postgis.net/workshops/postgis-intro/indexing.html#spatially-indexed-functions).

To use the `postgres`, an active instance must be started and accessible. Download and install the [PostgreSQL](https://www.postgresql.org/download/) or start a container. 

We recommend to star a container, using Docker Container ([Docker Engine](https://docs.docker.com/desktop/) must be installed).

Create a directory that will be used as storage for the contents of the database:

```bash
mkdir ~/my_postgis_storage
```

Start the database instance with the following command:

:::note
Make sure you have start Docker engine and deamon first, before executing the command below
:::

```bash
docker run -d --rm --name mars-postgis -e POSTGRES_PASSWORD=mypassword -e PGDATA=/var/lib/postgresql/data/pgdata -v ~/my_postgis_storage:/var/lib/postgresql/data -p 5432:5432 postgis/postgis
```

This command starts a local PostgreSQL database with the default user `postgres` and password `mypassword` and binds the created `my_data` folder as storage to the instance, available by the default port `5432`.

The parameter `-d` specifies that it should return to the terminal immediately. The parameter `--rm` specifies that, if necessary, an already existing container named `mars-postgis` will be removed first. The parameter `-v` binds the directory to get a permanent persistence. When the container is restarted, previous data is preserved. 

In the simulation configuration, connection options for the PostgreSQL can be defined under `globals`. For the above example the following must be specified:

```json
{
	"globals": {
		
		"output": "postgres",
		"postgresOptions": {
		  	"host": "127.0.0.1",
			"port": 5432,  
			"user": "postgres",
			"password": "mypassword"
		}
	}
}
```

If your agents have no `outputs`-key defined, their data will be automatically logged to the database. In case you have set the `outputs`-key, add the following item (`{"kind": "postgres"}`) to the `outputs`-list to enable database logging for the agent type, like seen in the following example: 

```json
{
    "agents": [
        {
            "name": "Agent",
            "outputs": [
                {"kind":  "csv"},
                {"kind": "postgres"}
            ]
        }
    ]
}
    
```

By default MARS connects to `127.0.0.1` and port `5432` using the default user `postgres` without any password. It is therefore sufficient to specify only the `mypassword`.


### SQLite

SQLite is a free program library and contains a local relational database system. Results are written to a local ``mars.sqlite`` file and can be processed via SQL clients.

For output to SQLite the configuration must be set `sqlite`:

```json
{
	"globals": {
		"output": "sqlite"
	}
}
```

:::caution
If the model is extended with new properties and types, the old schema is overwritten in `sqlite` and previous simulation results are lost.
:::


To keep your simulation results. The `mars.sqlite` can be copied and saved or always be recreated with a unique name:

```json
{
    "globals": {
      "output": "sqlite",
      "sqliteOptions": {
          "databaseName": "your-uniqe-scenario-name"
      }
    }
}
```

This saves all results into the into `your-uniqe-scenario-name.sqlite`.


## Real-time WebSocket

The WebSocket protocol is a TCP-based network protocol designed to establish a bi-directional connection between a web application and a WebSocket server or a web server that also supports WebSockets.



When the agent or layer mapping have set the flag `pythonVisualization` to `true`, then the system opens up a real-time WebSocket server on `ws://127.0.0.1:4567`. The socket can be reached via `ws://127.0.0.1:4567`, and provides data  at the `vis` and `progrss` paths, allowing to consume and analyze the results via a stream processing system (windowing analysis). You can use any WebSocket client that meets the standard [RFC 6455](https://tools.ietf.org/html/rfc6455): 

| Model Type      | Support                       |
|-----------------|-------------------------------|
| `agent` 	  | `ws://127.0.0.1:4567/vis`     |
| `vector-layer`  | `ws://127.0.0.1:4567/vis`     |
| `raster-layer`  | `ws://127.0.0.1:4567/vis`     |

The `agent` output on the `vis` path looks like this (without `pythonVisualizationWithProperties`, defined in the agent mapping):

```json
{
	"t": 1, // uniqe key generated by the system.
	"typeName": "InfiniteDriver",
	"currentTick": 2,
	"entities": [
		{
			"key": 123 // unique key generated by the system.
			"x": 10.007940221939588,	// x-coordinate/~longitude
			"y": 53.56656824833853, 	// y-coordinate/~latitude
			"b": 45.00	// bearing
		}
	]
}
```
Depending on the the activate flag `pythonVisualizationWithProperties`, set to `true` in the `agents` mappings, the stream additionally sends the actual values of the agents properties for each tick, resulting into:

```json
{
	"t": 1, // generated key
	"typeName": "InfiniteDriver",
	"currentTick": 2,
	"entities": [
		{
			"key": 123 // unique key generated by the system.
			"x": 10.007940221939588,	// x-coordinate/~longitude
			"y": 53.56656824833853, 	// y-coordinate/~latitude
			"b": 45.00	// bearing
			"p": {	// all properties as a dictionary
				"Bearing": 124.22771241337983,
				"DistanceAhead": 74.0001924367821,
				"IsCollidingEntity": false,
				"IsWrongWayDriving": false,
				"LaneOnCurrentEdge": 0,
				"Length": 0.0,
				"MaxSpeed": 56.0,
				"ModalityType": "CarDriving",
				"PositionOnCurrentEdge": 46.29075061888411,
				"Speed": 1.4569999999999999,
				"SpeedChange": 0.728
			}
		}
	]
}
```

Beside the `agent` output you can also write out the `vector-layer` and `raster-layer` via a stream. When specifying the output on a data layer, the JSON output looks like the following:

>> Be carefull when streaming layer date *for each tick*, especially when writing out huge raster layer, the can decrease the performance massively.

```json
{
	"currentTick": 2,
	"maxTicks": 10000,
	"worldSize": {"minX": 8.4213643278, "minY": 53.3949251389, "maxX": 10.3242585128, "maxY": 53.9644376366 },
	"vectors": [
		{
			"t": 1, // generated key
			"typeName": "POILayer",
			"f": [
				// geojson object of each feature
			]
		}
	]
	"rasters": [
		{
			"t": 2, // generated key
			"typeName": "PrecipitationLayer"
			"cellWidth": 150,	// amount of cells x-dimension
			"cellHeight": 100,	// amount of cells y-dimension
			"cells": [
				// An iterator as the form [x_grid_coordinate,y_grid_coordinate,cell_value_double]
			]
		}
	]
}
```
