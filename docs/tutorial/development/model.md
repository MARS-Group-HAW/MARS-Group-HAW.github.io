---
sidebar_position: 5
---

# `ModelDescription`

## Model Definition

In order to use a model, entities, agents and layer types must be made known to the system.

A so-called `ModelDescription` is defined in the project (for example in the entry point `Main()`) and all relevant types are registered.

### Registration

First, the ``using`` import of the namespace must be added:

```c#
using Mars.Core.Model.Entities;
```

In the program code (for example the entry point ``Main()`` of the .NetCore application) a `ModelDescription` object must be defined. This object contains all types that occur in the model and that can be parameterized externally by a `SimulationConfig`. 

```c#

public static void Main() 
{
    var description = new ModelDescription();
    
    description.AddLayer<MyLayer>();
    description.AddAgent<MyAgent,MyLayer>();
 
}
```

The types registered above include the self-defined agent type ``MyAgent`` and the corresponding agent layer ``MyLayer``. If you want to use additional data in the model, you have to register the respective data layers additionally:

```c#
description.AddLayer<MyVectorLayer>();
description.AddLayer<MyRasterLayer>();
```

> &#57615; ``MyLayer`` can also be used as a data layer like ``MyVectorLayer`` or ``MyRasterLayer``. The layer implements the required contract (see [here] (layers.md)).

## Registration with Names

By default, the defined class name (e.g. `MyAgent`) is used as the name within the model. Alternative names can be given during registration:

```c#
description.AddAgent<MyAgent,MyLayer>("myAlternativeAgentName");
```  

This allows the types to be mapped using a different name within the configuration:

```json
{
  "agents": [
    {"name": "myAlternativeAgentName", "file": "anyInput.csv"}
  ]
}
```