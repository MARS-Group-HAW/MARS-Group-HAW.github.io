# Spawning and Removing Agents and Entities

To **create** instances of agent types and **registering** them at the runtime system to process the `Tick()`, two concepts are available:

## Creating and Registering single object using `RegisterAgent`

Individual instances can be instantiated directly using `new` constructor expression. The instance must be registered with the runtime system by calling the `RegisterAgent` handle given through the `InitLayer` method of the `ILayer` implementation.

```csharp
public bool InitLayer(TInitData layerInitData, 
    RegisterAgent registerAgentHandle, UnregisterAgent unregisterAgentHandle) 
{
	var layer = this;
	var agent = new MyAgentType();

	registerAgent(layer, agent);
	return true;
}
```

Optionally the ``RegisterAgent`` handle allows to set and override the execution frequency (for more see [here](../model-configuration/execution.md)) to specify **after how many ticks** the agent should be called again. Otherwise the registry uses the settings from the simulation configuration ``config.json``. 

If an output has been specified using ``output``, the object is managed accordingly in the output as well automatically.

## Mass Generation using `AgentManager`

The `AgentManager` is a service component that can be used to initialize agent quantities from the input.

The `AgentManager` is a static class that can be referenced directly and offers two methods:

* ``CreateAgents<Type>``: This method creates a set of agents of the specified type but does not register them, so that their ``Tick()`` methods are called and their versions are managed in the output.
* ``SpawnAgents<Type>``: This method creates **and** registers the set of agents of the specified type. 

Spawning of agents is usually done within the ``InitLayer`` method of an ``ILayer`` implementation.

```csharp
public bool InitLayer(
	TInitData layerInitData,
	RegisterAgent registerAgentHandle, 
	UnregisterAgent unregisterAgentHandle) 
{
	var layer = this;

	AgentManager.SpawnAgents<MyOtherAgent>(
		layerInitData.AgentInitConfigs.First(config => config.Name == "MyOtherAgent"), 
		registerAgentHandle, unregisterAgentHandle, 
		new List<ILayer> {layer});

	return true;
}
```

Since the agent interacts with the system via its layer, it is necessary that the ``AgentManager`` is given its own layer instance as **dependency**.

In the agent this dependent layer can be referenced as a property which is resolved by the system via ``PropertyInjection``, for example as follows:

```csharp
public class MyAgentType : AbstractAgent 
{
	[PropertyDescription]
	public MyLayerType Layer { get; set; }

	public void override Tick() {
		// access your layer here (e.g., Layer.Environment.Explore(...))
	}
}
```

Alternatively, dependent layer can be defined directly as **constructor parameter** as showed below: 

:::danger
Because of the **testing** of your own model, it is recommended to keep the required constructor parameters as low as possible.
:::


```csharp
public class MyAgentType : AbstractAgent 
{
	public MyLayerType Layer { get; set; }

	public MyAgentType(MyLayerType layer) 
	{
		Layer = layer;
	}

	public void override Tick() {
		// access your layer here (e.g., Layer.Environment.Explore(...))
	}
}
```

## Removing and unregister an object from simulation
