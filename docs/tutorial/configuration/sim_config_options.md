---
sidebar_position: 1
description: Lists the simulation configuration options available for the config.
---

# Simulation Configuration

## Options for Simulation Configuration 

This is a list of all the attributes that can be defined in different sections of the simulation configuration.

### Execution

The simulation is executed in parallel if multiple processors are available. Sometimes it's handy to switch to a sequential execution to evade problems with locks or synchronization.

Therefore use in top level config option `execution` the `maxProcessCount` property and set it to `1`. 

````json
{
  "execution": {
    "maxProcessCount": 1
  },
  "globals": {
      // ...
  }
}
````

### Globals

The `globals` options define general settings for the simulation like everything around the _simulation time_.

| Property              | Type                                                   | Default                    | Required | Constraints                                                  | Excludes           |
| --------------------- | ------------------------------------------------------ | -------------------------- | -------- | ------------------------------------------------------------ | ------------------ |
| <ins>id</ins>         | `String`            | model_name + _ + timestamp | &#9745;  | No special characters                                        |                    |
| <ins>steps</ins>      | `Integer` | 1                          | &#9744;  | value &#8805; 0                                              | startTime; endTime |
| <ins>startTime</ins>  | `DateTime`            | now                        | &#9744;  | value > endTime                                              | steps              |
| <ins>endTime</ins>    | `DateTime`             | null                       | &#9744;  | value > startTime                                            | steps              |
| <ins>deltaT</ins>     | `Integer` | 1                          | &#9745;  | value > 0                                                    |                    |
| <ins>deltaTUnit</ins> | `TimeUnit`         | seconds                    | &#9744;  | one of: milliseconds, seconds, minutes, hours, days, months, years |                    |

Here is an example:

   ```json
   {
     "globals": {
       "startPoint": "2020-01-01T00:00:00",
       "endPoint": "2020-01-01T01:00:00",
       "deltaT": 1,
       "deltaTUnit": "seconds",
   	"console": true,
       "output": "csv",
       "options": {
         "delimiter": ";",
         "numberFormat": "F2"
       }
     }
  }
   ```
  `startPoint`: the start time of the simulation

   `endPoint`: the end time of the simulation

   `deltaT`: the length of a single time step

   `deltaTUnit`: the unit of a single time step

   `console`: if `true`, the simulation progress is displayed in the terminal

   `output`: the medium into which simulation output data is stored

   ​	**Note:** if `output` is set to `csv`, then the key `options` can be used to define further details such as the `delimiter` and the `numberFormat`.


___

### Output

| Property          | Type                                                   | Default | Required | Constraints                                           |
| ----------------- | ------------------------------------------------------ | ------- | -------- | ----------------------------------------------------- |
| <ins>output</ins> | `OutputOption` | none    | &#9744;  | one of: none, CSV, MongoDB, redis, postgresql, sqlite |

___

### Output (mongoOptions, npgSqlOptions, redisOptions)

| Property                     | Type                                                   | Default        | Required | Constraints |
| ---------------------------- | ------------------------------------------------------ | -------------- | -------- | ----------- |
| <ins>port</ins>              | `Integer` | db specific    | &#9744;  | value > 0   |
| <ins>host</ins>              | `String`           | localhost      | &#9745;  |             |
| <ins>user</ins>              | `String`           |                | &#9745;  |             |
| <ins>password</ins>          | `String`            |                | &#9745;  |             |
| <ins>connectionTimeout</ins> | `Integer` | 5              | &#9744;  | value > 0   |
| <ins>databaseName</ins>      | `String`           | $sim-config-id | &#9745;  |             |

___

### Output (sqLiteOptions)

| Property                | Type                                             | Default        | Required | Constraints |
| ----------------------- | ------------------------------------------------ | -------------- | -------- | ----------- |
| <ins>databaseName</ins> | `String`      | $sim-config-id | &#9745;  |             |
| <ins>isInMemory</ins>   | `Boolean` | false          | &#9744;  |             |

___

### Output (socketOptions) exclude?

| Property                   | Type                                                   | Default | Required | Constraints |
| -------------------------- | ------------------------------------------------------ | ------- | -------- | ----------- |
| <ins>socketPath</ins>      | `String`        |         | &#9745;  |             |
| <ins>sendingInterval</ins> | `Integer` | 0       | &#9744;  |             |

___

### Output (csvOptions)

| Property                    | Type                                                   | Default | Required | Constraints                  | **Notes** |
| --------------------------- | ------------------------------------------------------ | ------- | -------- | ---------------------------- | --------- |
| <ins>delimiter</ins>        | `Delimiter`    | ,       | &#9745;  | one of: `,`, `;`, `\t`, `\w` |           |
| <ins>includeHeader</ins>    | `Boolean`      | true    | &#9744;  |                              |           |
| <ins>encoding</ins>         | `String`            | UTF-8   | &#9744;  |                              |           |
| <ins>chunkSize</ins>        | `Integer` |         | &#9744;  |                              | exclude   |
| <ins>appendConfigName</ins> | `Boolean`      | true    | &#9744;  |                              |           |
| <ins>fileSuffix</ins>       | `String`          |         | &#9744;  | overwrites appendConfigName  |           |
| <ins>numberFormat</ins>     | `String`          | g       | &#9744;  |                              | exclude   |
| <ins>culture</ins>          | `String`            | en-EN   | &#9744;  |                              |           |

___

## Layer

| Property                   | Type                                                   | Default          | Required | Constraints     |
| -------------------------- | ------------------------------------------------------ | ---------------- | -------- | --------------- |
| <ins>name</ins>            | `String`            | classname in AST | &#9745;  |                 |
| <ins>file</ins>            | `Path`           |                  | &#9745;  | path exists     |
| <ins>output</ins>          | `OutputOption` | none             | &#9744;  |                 |
| <ins>outputFrequency</ins> | `Integer` | 1                | &#9744;  | value &#8805; 0 |

The layer section includes a list of configurations for each layer type defined in the model. Here is an example of the configuration for two layers:

```json
{
  "layers": [
    {
      "name": "TrafficLightLayer",
      "file": "res/traffic_lights/traffic_lights_harburg_zentrum.zip"
    },
    {
      "name": "CitizenLayer",
      "file": "res/networks/harburg_zentrum_walk_graph.geojson",
      "mapping": [
        {
          "parameter": "ParkingOccupancy",
          "value": 0.779
        }
      ]
    }
  ]
}
```

`name:` the name of the layer type. **Note:** this must match the layer type's name in the model.

`file:` the path to a file with geodata that is used to populate the layer.

`mapping:` a list of additional mappings for the layer.

### Raster Layer

| Property          | Type                                                     | Default | Required | Constraints                       |
| ----------------- | -------------------------------------------------------- | ------- | -------- | --------------------------------- |
| <ins>file</ins>   | `Path`             |         | &#9744;  | allowed file types: asc, csv, zip |
| <ins>output</ins> | `LayerOutputOption` | asc     | &#9744;  | options: asc, csv, none           |


:::info

**(Optional)**  
** Spatio-Temporal-Layer**

- Set von Dateien auswählen
- Ordnung der Dateien bestimmen
- Dateien mit Zeitangaben versehen

**Empty Layer**

- Bounding Box angeben (lower left, upper right)
- No Data Value mit bspw. -99

:::

### Vector Layer

| Property          | Type                   | Default | Required | Constraints                                 |
| ----------------- | ---------------------- | ------- | -------- | ------------------------------------------- |
| <ins>file</ins>   | `Path`                 |         | &#9744;  | allowed file types: geoJSON, ESRI Shapefile |
| <ins>output</ins> | `VectorLayerOutputOptions` | asc     | &#9744;  | options: asc, geoJSON, ESRI Shapefile, none |


## Agents

| Property                   | Type           | Default                   | Required | Constraints                       | Excludes |
| -------------------------- | -------------- | ------------------------- | -------- | --------------------------------- | -------- |
| <ins>name</ins>            | `String`       | classname provided by AST | &#9745;  | agent must exist in model         |          |
| <ins>frequency</ins>       | `Integer`      | 1                         | &#9744;  | value > 0                         |          |
| <ins>file</ins>            | `Path`         |                           | &#9744;  | path exists                       | count    |
| <ins>output</ins>          | `OutputOption` | Global Output Value       | &#9744;  |                                   |          |
| <ins>outputFrequency</ins> | `Integer`      | 1                         | &#9744;  | value &#8805; 0                   |          |
| <ins>outputFilter</ins>    | `FilterList`   |                           | &#9744;  |                                   |          |
| <ins>count</ins>           | `Integer`      | 0                         | &#9744;  | value &#8805; 0                   |          |
| <ins>mapping</ins>         | `Mapping`      |                           | &#9745;  | external variables must be mapped |          |

The ``Agents`` section includes a configuration (an `AgentMapping`) for each agent type defined in the model. Here is an example:

```json
{
  "agents": [
    {
      "name": "Citizen",
      "count": 10,
      "file": "res/agent_inits/CitizenInit10k.csv",
      "options": {
        "delimiter": ";"
      },
      "mapping": [
        {
          "parameter" : "CanCycle",
          "value" : true
        },
        {
          "parameter": "resultTrajectory",
          "value": true
        }
      ]
    }
  ]
}
```

`name:` the name of the agent type. **Note:** this must match the agent type's name in the model.

`count:` the number of agents of this agent type that should be spawned at the beginning of the simulation

`file:` the path to a csv file that contains a set of attributes and attribute values to parametrize the agents

​	**Note:** if a `file` is specified, the key `options` can be used to define further details such as the `delimiter`.

`mapping:` a list of additional mappings for the agents.


### Mapping

| Property             | Type                                               | Default       | Required | Constraints                                              | Excludes |
| -------------------- | -------------------------------------------------- | ------------- | -------- | -------------------------------------------------------- | -------- |
| <ins>parameter</ins> | `String`        |               | &#9745;  | must exist in agent definition and be marked as external |          |
| <ins>value</ins>     | `Any`           |               | &#9744;  | must be type of external parameter                       | field    |
| <ins>field</ins>     | `String`        |               | &#9744;  | allowed if input file is specified; must exist in .csv   | value    |
| <ins>type</ins>      | `PrimitiveTypes` | read from AST | &#9745;  |                                                          |          |

```json
{
  "mapping": [
    {
      "parameter": "Energy",
      "value": 100,
      "field": "field.name"
    }
  ]
}
```
