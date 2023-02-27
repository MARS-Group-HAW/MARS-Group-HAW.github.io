---
sidebar_position: 70
description: Explains how to configure output filters to reduce output size.
---

# Output Filter

Since MARS supports model scenarios that can potentially generate huge amount of data, the logging of those extensive data can slow the performance of a model (e.g. SmartOpenHamburg models with a huge set of involved agents). The modeler can only be interested in a specific subset of agents or for specific agent-states, e.g., _is the agent in specfici state_ or _log data only for an agent of specific attribute_. 

MARS provides `outputFilter`s for agent to reduce the amount of logged data to those of interest. A dynamic predicate can be provided to filter those entities matching the condition. An agent or entity type can have an optional `outputFilter` which is able to accept a set of `AND` associated expressions in form of:

```json title="Agent configuration in the config.js"
{
    "name": "MyAgent",
    "count": 10000,
    "file": "output.csv",
    "outputFilter": [{
        "parameter": "Species",
        "operator": "in",
        "values": ["SpeciesA", "SpeciesC"]
    }]
}
```

For this example for an Agent class `MyAgent` the output rows per tick would only be created, if in the tick the agent's property `Species` has the value `SpeciesA` or `SpeciesC`. 

You can define multiple filter which will be chained. All individual filters must evaluate to `true` if the values of the tick should be logged.

If you don't have a specific property you want to watch for, it can be a good option to define a new property to enable/disable the logging of a tick result like this:

```csharp title="Agent property"
public bool StoreTickResult { get; set; } = false;
```

```json title="Agent configuration in config.js
{
    "name": "MyAgent",
    "output": "csv",
    "outputFilter":[{
        "parameter": "StoreTickResult",
        "operator": "in",
        "values": [true]
    }]
}
```

In side the `Tick()` method you can now do as follows. This will log all agent properties only when your expression `YourContraint` is `true`.

```csharp title="Tick() method with outputFilter"
public void Tick()
{
    // at beginning of each tick set 
    // to false to prevent logging
    StoreTickResult = false;

    // your logic...

    // your logic reached a state where you want 
    // to log all agent properties
    if (YourConstraint)
    {
        StoreTickResult = true;
    }
}
```