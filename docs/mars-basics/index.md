---
sidebar_position: 1
sidebar_label: Getting started
---


# Getting started with MARS

The **MARS runtime system** provides agent-based simulation and geographical query processing methods with a set of standard mathematical functions and data structures for [.NET Core](https://dotnet.microsoft.com/download/dotnet-core/3.1).

The framework provides simulation core to execute the simulation with variable step-size. It is compatible with multiple platforms including **Microsoft Windows**, **MacOS**, **Xamarin**, **Unity3D**, **Windows Store applications**, **Linux** or **mobile**.

> The framework offers a unified API to develop and execute individual-based models and scenarios. 


## Concepts

A simulation is the execution of a model (representation of a system) in a predefined scenario. The scenario consists of configurations of certain aspects like the simulation time frame (start and endpoint) or the tick size (in our tick-based-system every tick represents a time frame; the simulation is executed tick by tick) or the number of involved agents, and input data that is used in the model to initialize or update agents, entities and layers.
Every scenario, therefore, consists of a model description that defines which parts of the model are part of the scenario (e.g. which layers and agents are involved) and the mentioned simulation config.
The model is described by the concept of agents, entities and layers.

[Agents](../basic-concepts/agent.md) are independent and active components that can sense surroundings and act upon these findings and their internal state (memory, goals, desires, ..).

[Entities](../basic-concepts/entity.md) are like agents components with a life-cycle (they are created initially, initialized with data and eventually removed from the simulation later). Unlike agents, they cannot act. They, therefore, represent model objects that exist in the model and can be used by the agent. 
  
[Layers](../basic-concepts/layers.md) could be described as playgrounds of the simulation if you would describe agents as players. They provide information for certain aspects of the model and can be used by agents to acquire tempo-spatial data or provide an interface for exploring entities or other agents. There is a specific bond between agents and their main layer, initially provided to the agent on initialization. This layer may be responsible for creating the agent with an ``AgentManager``.
## Sample Model: Wolf-Sheep-Predation

Check out the [Wolf-Sheep-Model](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/model-wolf-sheep) to make yourself familiar with the [basic concepts](../basic-concepts/model.md), like [layers](../basic-concepts/layers.md) and [agents](../basic-concepts/agent.md).

The folder ``WolfSheepPredation`` contains a simple predation model in which sheep and wolves move on a grid. ``Sheep`` eat grass and periodically increased by a ``GrassGrowthAgent``). ``Wolf`` hunt sheep and eat them if close enough. Both animals reproduce eventually by losing half their energy. Energy is also consumed in every tick and can be replenished by eating food. If the energy is zero, the animal dies.

The following tutorial video explains the relevant aspects of that model in more detail:
> [!Video https://www.youtube.com/embed/QmOmuCkAXUg]

> [!Video https://www.youtube.com/embed/GEUd4b2-Eq4]

The repository also contains a second folder ``WolfSheepGrassPredation`` that promotes ``Grass`` to an own agent type that can vary in growth. Further concepts are introduced and are explained in a second tutorial video. 

``These are for adept users and can be skipped for beginners.``


> [!Video https://www.youtube.com/embed/videoseries?list=PLWC-U16t1JAgiuAHNumPjHPvLr4fNLdRM]


The design concepts can be found in the ``Design``-folder.

## Getting started with your own model

To install the framework in your application, please use the public ``nuget`` feed from Microsoft and is compatible with ``netstandard2.0``. It is designed to use with ``netcore``.
The runtime system is available as a public NuGet package and simply be added to your project using the ``dotnet`` CLI or your preferred IDE:

```bash
dotnet add package Mars.Life.Simulations
```

> Optional when you are using the IDE:
>* If you are using Visual Studio, right-click on the **References** item in your solution folder, and select **Manage NuGet Packages**.
> * If you are using Jetbrains Rider, click on NuGet package management below.
>
>Search for ``Mars.Life.Simulations`` ([or equivalently Mars](https://www.nuget.org/packages/Mars.Life.Simulations/)) and select "Install."

You can also [checkout this simple model stub](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/getting_started) that provides the required model structure and MARS dependencies.

Further examples are provided for a simple [Grid-model](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/Grid_Test%20CS) and a simple [Geo-model](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/Geo_Test%20CS).