---
sidebar_position: 60
description: Describes the different formats in which simulation output data can be stored
---

# Simulation Output Formats

The output of the simulation can be set to which file format or database results should be saved. There are different output types which are useful for different analyses. 

Current supported output types are:

|Model type |Support|
|---------|-----------|
|agent |``csv``, ``mongodb``, ``postgres``, ``sqlite``, ``redis``, ``kafka``, ``geojsonsocket``, ``framesocket`` |
|entity |``csv``, ``mongodb``, ``postgres``, ``sqlite``, ``redis``, ``kafka``, ``geojsonsocket``, ``framesocket`` |
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

Data is provided at `geojsonsocket` and `framesocket` via a WebSocket and can be consumed and analyzed via a stream processing system (windowing analysis). You can use any WebSocket client that meets the standard [RFC 6455](https://tools.ietf.org/html/rfc6455).

If configured, the socket can be reached via `ws://127.0.0.1:4567`. Depending on the socket type the socket service needs to be accessed via a `/` service: 

| Model Type      | Support                       |
|-----------------|-------------------------------|
| `framesocket`   | `ws://127.0.0.1:4567/frames`  |
| `geojsonsocket` | `ws://127.0.0.1:4567/geojson` |

The `framesocket` output for an agent looks like this:

```json
{
	"agentId": "890a44c5-d62b-4c28-9a0c-c8f796",
	"agentType": "InfiniteDriver",
	"tick": 2,
	"step": 2,
	"dateTime": "2020-10-16T00:00:02+02:00",
	"position": [10.007940221939588, 53.56656824833853],
	"properties": {
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
```
