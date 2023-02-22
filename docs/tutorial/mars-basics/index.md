---
sidebar_position: 0
sidebar_label: Concepts
---


# Concepts

A **simulation** is the execution of a *model* (representation of a system) in a predefined *scenario*. 

The **scenario** consists of configurations of certain aspects like:

- the simulation time frame (start and endpoint) 
- the tick size (in our tick-based-system every tick represents a time frame; the simulation is executed tick by tick)
- the number of involved agents
- input data that is used in the model to initialize or update agents, entities and layers

Every scenario, therefore, consists of a **model description** that defines which parts of the model are part of the scenario (e.g. which layers and agents are involved) and the mentioned simulation config.

The model is described by the concept of agents, entities and layers.

## Agents

[Agents](../development/agent.md) are independent and active components that can sense surroundings and act upon these findings and their internal state (memory, goals, desires, …).


## Entities

[Entities](../development/entity.md) are like agents components with a life-cycle (they are created initially, initialized with data and eventually removed from the simulation later). Unlike agents, they cannot act. They, therefore, represent model objects that exist in the model and can be used by the agent. 

## Layers

[Layers](../development/layers.md) could be described as playgrounds of the simulation if you would describe agents as players. They provide information for certain aspects of the model and can be used by agents to acquire tempo-spatial data or provide an interface for exploring entities or other agents. There is a specific bond between agents and their main layer, initially provided to the agent on initialization. This layer may be responsible for creating the agent with an `AgentManager`.

## Tick

Single time step of a simulation of a MARS model.


## Model types

- differenzierung grid, geo



## Sample Model: Wolf-Sheep-Predation

Check out the [Wolf-Sheep-Model](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/C%23%20Models/model-wolf-sheep) to make yourself familiar with the [basic concepts](../development/model.md), like [layers](../development/layers.md) and [agents](../development/agent.md).

The folder ``WolfSheepPredation`` contains a simple predation model in which sheep and wolves move on a grid. ``Sheep`` eat grass and periodically increased by a ``GrassGrowthAgent``). ``Wolf`` hunt sheep and eat them if close enough. Both animals reproduce eventually by losing half their energy. Energy is also consumed in every tick and can be replenished by eating food. If the energy is zero, the animal dies.

The following tutorial video explains the relevant aspects of that model in more detail:
> [!Video https://www.youtube.com/embed/QmOmuCkAXUg]

> [!Video https://www.youtube.com/embed/GEUd4b2-Eq4]

The repository also contains a second folder ``WolfSheepGrassPredation`` that promotes ``Grass`` to an own agent type that can vary in growth. Further concepts are introduced and are explained in a second tutorial video. 

``These are for adept users and can be skipped for beginners.``


> [!Video https://www.youtube.com/embed/videoseries?list=PLWC-U16t1JAgiuAHNumPjHPvLr4fNLdRM]


The design concepts can be found in the ``Design``-folder.

