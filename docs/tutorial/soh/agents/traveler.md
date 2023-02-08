# Traveler

A traveler agent tries to move from start to goal. He/she may use different modalities for that purpose.
The agent removes himself/herself from the simulation after fulfilling this task. 


```plantUml
class Traveler {
    + Goal : Position <<get>>
    + Traveler(multimodalLayer:IMultimodalLayer, start:Position, goal:Position)
    + <<override>> Tick() : void
}
MultiCapableAgent <|-- Traveler
```

Concrete travelers are the ``DockWorker`` and `CycleTraveler`.