# Models: a general overview

In this article, general concepts such as model and multi-agent system are described. A general understanding of these concepts is essential to being able to design effective models and work with the [MARS systems](../getting-started/index.md).

___

## Model

A model is a simplified representation of some specific aspects of reality. The goal is creating a model is typically to define and understand a concrete information system that closely resembles its real-world counterpart. When working with and running a model (in case of MARS, in the form of simulations), the obtained output data can be used to inform decisions in the real world. 

___

## Tick-based simulation
Tick-based simulation are in contrast to continuous simulations divided into steps. These steps symbolize a time-driven progress. Every tick stands for an equally large time frame, which is called Δt. This time frame is fixed for the whole simulation, so that for example a simulation is progressing in steps of 1 minute. Every scenario runs for a defined amount of ticks. In every tick all tick-based elements (agents and active layers) have the possibility to act. Time-referenced scenarios have a start and an end time-point and a step length (Δt). The amount of ticks is then inferred.


___

## Multi-Agent Systems

Agent-based modelling derives from the field of artificial intelligence (AI). This simulation paradigm incorporates individuals, so-called agents, who interact with each other and their surroundings. The behavior is programmed on an individual level to follow a set of rules: The interactions between agents that occur as a result of individual behavior are studied to gain insights into collective behavior. Note that an agent is not restricted to be an individual but can also be a group, community, or other entity that acts and reacts to external conditions.

The way of creating results bottom-up from an individual's actions leading to complex effect makes multi-agent modelling especially well-suited for research in the social sciences.


