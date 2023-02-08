# Steering concept

To use a transportation capability (modal type) an agent requires to implement the ``ISteeringCapable`` interface (e.g. ``ICarSteeringCapable``, see figure below), which defines methods and properties that this agent must offer to be able to steer that ``Vehicle``.
Besides steering the vehicle the agent may also use some vehicles as a passenger (e.g. using the [``Ferry``](entities/ferry.md)). The ``IPassengerCapable`` is implemented by the [``MultimodalAgent``](agents/multi_modal_agent.md) and informs the agent with a ``PassengerMessage`` about the current status of the drive. It may for instance notify the agent at every stop (e.g. ``FerryStation``) so that the agent may decide to leave or stay on the ferry.

The ``ISteeringHandle`` is the interface for an agent to drive the vehicle. Every ``Vehicle`` has a specific steering handle and provides that to the agent on successful enter.

![uml_car_steering](uml_car_steering.png)


Adding new transportation modalities is supported by the ``MultimodalAgent`` if it complies with the *steering concept* (see below).

![uml_multimodal_agent](uml_multimodal_agent.png)

```plantUml

interface IPassengerCapable {
    Notify(passengerMessage:PassengerMessage) : void
}
IPositionable <|-- IPassengerCapable

enum PassengerMessage {
    GoalReached,
    NoDriver,
    TerminalStation,
}

interface ISteeringCapable {
}
IPassengerCapable <|-- ISteeringCapable


interface IWalkingCapable {
    PreferredSpeed : double <<get>>
}
ISteeringCapable <|-- IWalkingCapable

class WalkingSteeringHandle {
    + WalkingSteeringHandle(multimodalAgent:MultimodalAgent, accelerator:WalkingAccelerator, environment:ISpatialGraphEnvironment, position:Position)
    + Environment : ISpatialGraphEnvironment <<get>>
    + Route : Route <<get>> <<set>>
    + GoalReached : bool <<get>>
    + Velocity : double <<get>>
    + <<virtual>> Move() : void
    + Position : Position <<get>> <<set>>
    + LeaveVehicle(passengerCapable:IPassengerCapable) : bool
}
ISteeringHandle <|-- WalkingSteeringHandle

```