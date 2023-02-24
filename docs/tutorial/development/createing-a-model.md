---
sidebar_position: 1
---

# Creating a model

:::info
This explains how the `Program.cs` works and how to setup a model from scratch.

:::

## Setup C# project


1. Download and install Microsoft [.NET Core](https://dotnet.microsoft.com/download).
2. Download and install _latest_ JetBrains [Rider IDE](https://www.jetbrains.com/de-de/rider/download/other.html)
3. Open Rider and click New Solution → Console Application (.NET Core)
4. Give your model a name, specify the directory, and click Create.

   Your initial model should look like this:

```csharp
using System;
namespace firstMars
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

5. In the Project Structure window (left), right-click Dependencies → Manage NuGet Packages. Alternatively, you can click NuGet at the bottom left of the screen.

6. Search for Mars.Life.Simulations

7. Install the package for your project

8. Open Program.cs and type `using Mars.` at the top of the file to see if it leads to an error (this happens in some cases and is due to a bug in Rider.).

   1. If there is no error, you are done.
   2. If there is an error, open the Terminal in Rider and execute `dotnet restore --force`. Then, restart Rider and retry the import.



## Setting up an Entry Point

Starting a simulation required an entry point of execution. In default cases of programming this is the so called `Main` (in Java `main`; in Python `__main__`). This method have to be provided by the model itself. 

Create a file called `Program.cs`. Define a class called `Program` containing **static** method `Main(string[] arguments)`. 

> This is the default for each .Net program you write, nothing special for MARS

```csharp
public class Program {

}
```

Thats it, now you can start your .NET program. ✨ 

## Describe your model

At the beginning of the `Main`, a ModelDescription (let's call it `description`) is defined. It contains all layer types and agent types that are part of the model.

```csharp
public static void Main(string[] args)
{
	var description = new ModelDescription();

    description.AddLayer<Layer1>();
    description.AddLayer<Layer2>();
    description.AddAgent<Agent1, Layer1>();
```

## Create the simulation configuration in code

In order to define a simulation configuration that exists within the `Main`, a SimulationConfig (let's call it `config`) object can be created. The code that defines the configuration can be written in a method outside of the `Main`, as seen in the following example:

```csharp
var config = CreateDefaultConfig();
```

```csharp
private static SimulationConfig CreateDefaultConfig()
{
    var startPoint = DateTime.Parse("2020-01-01T00:00:00");
    var config = new SimulationConfig
    {
        SimulationIdentifier = "green4bikes",
        Globals =
        {
            StartPoint = startPoint,
            EndPoint = startPoint + TimeSpan.FromHours(24),
            DeltaTUnit = TimeSpanUnit.Seconds,
            ShowConsoleProgress = true,
            OutputTarget = OutputTargetType.Csv,
            // simulation output formats
        },
        // layer configuration
        // agent configuration
    };
    return config;
}
```

|Parameter|Description|Example|
|------|------|---|
|`StartPoint`|the start time of the simulation|01.01.2020|
|`EndPoint`|the end time of the simulation|31.01.2020|
|`DeltaTUnit`|the unit of a single time step|`TimeSpanUnit.Seconds`|
|`ShowConsoleProgress`|if `true`, the simulation progress is displayed in the terminal|`true` or `false`|
|`OutputTarget`|the medium into which simulation output data is stored (set to csv in the above example)|`csv`|

For more information on simulation output formats, please click [here](../model-configuration/sim_output_formats.md).

For more information on layer configuration, please click [here](../model-configuration/layer_config.md).

For more information on agent configuration, please click [here](../model-configuration/agent_config.md).


## Use external simulation configurations (JSON)

In order to define a simulation configuration that exist outside of the model, a JSON file can be created as seen in the following example:

1. `Globals`: in this section, the simulation's global parameters are set. Here is an example:

   ```
   {
     "globals": {
       "startPoint": "2020-01-01T00:00:00",
       "endPoint": "2020-01-01T01:00:00",
       "deltaT": 1,
       "deltaTUnit": "seconds",
   	"console": true,
       "output": "csv",
       // simulation output formats
     },
   ```

* `startPoint`: the start time of the simulation
* `endPoint`: the end time of the simulation
* `deltaT`: the length of a single time step
* `deltaTUnit`: the unit of a single time step
* `console`: if `true`, the simulation progress is displayed in the terminal
* `output`: the medium into which simulation output data is stored

For more information on simulation output formats, please click [here](../model-configuration/sim_output_formats.md).

For more information on layer configuration, please click [here](../model-configuration/layer_config.md).

For more information on agent configuration, please click [here](../model-configuration/agent_config.md).

___

## Build the application and run the simulation

Now that a ModelDescription and a configuration (a SimulationConfig (Part2a) or an external JSON file (Part2b)) of the model exists, an `ISimulationContainer` object (let's call it `application`) can be created. `application` receives `description` and the simulation configuration of your choice in order to execute the simulation.

In the following example, the simulation configuration is chosen during an if-else-statement. The `Main` checks if an argument (a path to an external simulation configuration) was passed at the time of execution. If yes, then the program attempts to use the external information to configure the model (see if-branch). If no, then the internal model configuration (Part 2a) is used (see else-branch).

The simulation is started by resolving the application and calling `StartSimulation()`.

```csharp
    ISimulationContainer application;

    if (args != null && args.Any())
    {
        var file = File.ReadAllText(Path.Combine(ResourcesConstants.SimConfigFolder, args[0]));
        var simConfig = SimulationConfig.Deserialize(file);
        Console.WriteLine($"Use simulation config: {args[0]}");
        Console.WriteLine(simConfig.Serialize());
        application = SimulationStarter.BuildApplication(description, simConfig);
    }
    else
    {
        Console.WriteLine("Use default simulation config:");
        Console.WriteLine(config.Serialize());
        application = SimulationStarter.BuildApplication(description, config);
    }

    var simulation = application.Resolve<ISimulation>();

    var watch = Stopwatch.StartNew();
    var state = simulation.StartSimulation();

	// optional: store agent trips in external GEOJSON file (see Part 4 below)

	watch.Stop();            
	Console.WriteLine($"Executed iterations {state.Iterations} lasted {watch.Elapsed}");
	application.Dispose();
}
```

___

## Store agent trips in GEOJSON file

In order to store agent trips (for later analysis and visualization), the following code can be added to the example in Part 3.

```csharp
var layers = state.Model.AllActiveLayers;
foreach (var layer in layers)
{
    if (layer is CitizenLayer citizenLayer)
    {
    var citizens = citizenLayer.PedestrianMap.Values;
    TripsOutputAdapter.PrintTripResult(citizens);
    }
}
```

For more information on agent trips and visualization of agent movement, please click [here](../analysis-and-visualization/visualizing_agent_trips_kepler.md).