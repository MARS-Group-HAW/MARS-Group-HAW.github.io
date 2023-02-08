# Simulation Output | [FerryTransfer](ferry_transfer.md) | [Green4Bikes](green_4_bikes.md)

Results for ```FerryTransfer``` and ```Green4Bikes``` are generated in three ways:

* Trajectories can be switched on and off to observe and visualize the movements of workers and ferries.
* Simulation results can be generated for each individual agent to perform detailed analysis on movement and other available properties.
* Layer can be observed in order to investigate environmental changes.

The result schema for each type is described [here](ferry_transfer_green4bikes_result_scheme.md)

## Agent Output

Simulation results of agents include tick-by-tick versioning of individual agents (``DockWorker``, ``FerryDriver``, ``CycleTraveler``) and can be saved into different formats. According to your considered scenario, the output is configurable in order save specific model states.
Such states can be:
* _The selection of certain simulation steps._
* _The selection for certain model states._
* _Everything of an agent._
* _Only trajectories._


In the enclosed ``config.json`` an example configuration for the ``DockWorker`` is defined as follows:

```json
{
    "name": "DockWorker",
    "output": "sqlite",
    "outputFilter": [
      {
        "parameter": "StoreTickResult", "operator": "in", "values": [true]
      }
    ]
}
```

You can set the output per agent individually and configure its current state via an output filter. For more about output filters and how to apply, see [here](../../core/model-configuration/output_filter.md).

The output filter shown above, outputs all ``DockWorker``s via a local SQLite database, which are captured exactly when the ``StoreTickResult`` condition is met. 

The condition ``StoreTickResult`` is a default output filter, which is valid when a multi-modal route is processed.  

An alternative condition would be the output of results where only those ``DockWorker``s are stored who are currently on a ``Ferry``. For this purpose the output model offers an attribute ``ActiveCapability`` that always reflects the currently used modality in the simulation.

```json
{
    "name": "DockWorker",
    "output": "sqlite",
    "outputFilter": [
      {
        "parameter": "ActiveCapability", "operator": "in", "values": ["Ferry"]
      }
    ]
}
```

To get all results for each calculated simulation step, remove the ``outputFilter`` from the configuration and leave the output filter active.
 
> Please note that the simulation time will taking longer, when the output filter is omitted, wrongly configured or the output for all simulation results is active.
 
## Entity Output

To include single entities like the used ``ferry`` used here in the output, the output must also be set to the selected format in the configuration for the respective entity type:

```json
{
  "file": "resources/ferry.csv",
  "name": "Ferry",
  "output": "sqlite"
}
```

## Layer Output

In addition to agents and entity types, the boxes contain a number of [vector layers](../layers/vector_layer.md) for mapping spatial properties. These are modified at runtime and can be used like agents as simulation results.

For the ``Green4Bikes`` scenario. The model provides a ``BicycleRentalLayer``. Versioned snapshots can be saved for this layer to observe rental bike capacity changes. Therefore, the output have to be set for example to ``geojson``:

````json
{
  "name": "BicycleRentalLayer", 
  "output":"geojson", 
  "outputFrequency": 1000, 
  "file": "resources/harburg_rental_stations.geojson"
}
````

> &#10071;&#10071;&#10071; It is recommended to set the ``outputFrequency`` to avoid taking a snapshot for every single step.

More about the respective layer output kinds can be found [here](../../core/model-configuration/sim_output_formats.md).   

## Extended Output

In order to improve the execution performance only changing attributes are stored by default, where multiple attributes with constant value are ignored. To write out all attributes, the ``outputKind`` must be set to ``fullWithIgnored``.
To still write out all attributes, the option ``outputKind`` must be set to ``fullWithIgnored`` within the mapping
```json
{
  "file": "resources/ferry.csv",
  "name": "Ferry",
  "output": "sqlite",
  "outputKind": "fullWithIgnored"
}

```





 