# Traveler

A traveler agent tries to move from start to goal. He/she may use different modalities for that purpose.
The agent removes himself/herself from the simulation after fulfilling this task. 


```mermaid
classDiagram

    MultiCapableAgent <|-- Traveler

    %% UML syntax might define that ^ denotes a overriden method
    class Traveler {
        + Goal : Position
        + Traveler(multimodalLayer:IMultimodalLayer, start:Position, goal:Position)
        + ^Tick() void
    }
```




Concrete travelers are the ``DockWorker`` and `CycleTraveler`.