---
sidebar_position: 20
---

# Entity

## Definition of Entities

In contrast to agents, entities are pure objects without a ``Tick()`` method. However, entities are also identified by a UUID (Guid) ``ID`` and can be included in the model to enter other data that is not directly part of the agent parameterization. Entity are versioned and snapshots are persisted just the same as with agents.

In your model code, add a ``using Mars.Interfaces.Agents`` to make the namespace directly available.

```csharp
using Mars.Interfaces.Agents
```

Create a class (called e.g., `MyEntityType`) and implement the `IEntity` interface

```csharp
public class MyEntityType : IEntity 
{
    public Guid ID { get; set; }
}
```

Alternatively you can infer directly from `AbstractEntity`, available in `Mars.Components.Agents`.

### Registering the type 

Entities must be made known in the model, so that they can be initialized by a given simulation configuration. In the entry point ``Main()``, the newly defined entity type must be registered within the ``ModelDescription``.

```csharp
// Define the description is not already happened
// var description = new ModelDescription();
description.AddEntity<MyEntityType>()
```

### Create instance from input

Entities can be loaded into the model by using the ``IEntityManager`` component to create instances by a given key attribute name and the corresponding value. 


> The ``IEntityManager`` component can be resolved using the global simulation container ``ISimulationContainer``. When the ``AbstractLayer`` implementation is used (as described in [layer definition](layers.md)) the ``IEntityManager`` is already accessible. Otherwise the components needs to be resolved as follows:

````csharp
var manager = container.Resolve<IEntityManager>();
````

An agent can create concrete entities directly and bind them to itself:

```csharp
var entity = manager.Create<MyAgentType>("keyField", "keyValue");
```

