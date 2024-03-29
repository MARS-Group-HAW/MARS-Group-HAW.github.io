# Citizen

The ``Citizen`` agent is a [``MultiCapableAgent``](multi_capable_agent.md) that has a dayplan of activities over the day at different locations.
The dayplan is generated by statistical distribution (see figure below) depending on the properties ``Worker`` and ``PartTimeWorker``.

![uml_domain_model](wegzweck_nach_uhrzeit.png)

*Source: [Mobilität in Deutschland](https://mobilitaet-in-tabellen.dlr.de/mit/)*

On the start point in time of a new action the ``Citizen`` moves to the wanted location. The agent may use different transportation devices depending on its capabilities (see [``MultiCapableAgent``](multi_capable_agent.md)) and the availability of vehicles in the current surrounding (see  [``MultimodalLayer``](../layers/multi_modal_layer.md)).


```mermaid
classDiagram
    class Citizen {
        + Citizen(citizenLayer:CitizenLayer, position:Position, worker:bool, partTimeWorker:bool)
        + Worker : bool
        + PartTimeWorker : bool
        + CapabilityDrivingWithProbability : double
        + DayPlan : DayPlan
        + Home : PointOfInterest
        + Work : PointOfInterest
        + ActionLookupRadiusInMeter : double
        + ^Tick() void
        + ChangeWork(position:Position) void
        + ChangeHome(position:Position) void
    }

    MultiCapableAgent <|-- Citizen

    class MultiCapableAgent {
         <<abstract>>
        + MultiCapableAgent(multimodalLayer:IMultimodalLayer, position:Position)
        + Capabilities : IEnumerable<ModalType> 
        + AgentCapabilities : string 
        + CapabilityDriving : bool  
        + CapabilityCycling : bool  
        + ExpectedTravelTime : int
        + StoreTickResult : bool  
        + ActualTravelTime : int 
        + RouteMainModalActualTravelTime : int
        + RouteMainModality : string 
        + RouteModalities : string 
        + RouteModalityCount : int 
        + RouteMainModalRouteLength : int 
        + ^Move() : void
        + ^Notify(passengerMessage:PassengerMessage) : void
        + ActiveCapability : ModalType 
        + OvertakingActivated : bool 
        + CurrentlyCarDriving : bool 
        + DriverRandom : double 
        + DriverType : DriverType 
        + CyclingPower : double 
        + Gradient : double  = 0
    }
    Pedestrian <|-- MultiCapableAgent
    ICarSteeringCapable <|-- MultiCapableAgent
    IBicycleSteeringAndRentalCapable <|-- MultiCapableAgent

    class Pedestrian {
        + Pedestrian(multimodalLayer:IMultimodalLayer, position:Position)
        + PerceptionInMeter double = 1.0
        + Gender GenderType
        + SetWalking() void
        + SetRunning() void
        + ^Tick() void
        + ^Notify(passengerMessage:PassengerMessage) void
        + PreferredSpeed : double
    }

    MultimodalAgent <|-- Pedestrian
    IWalkingCapable <|-- Pedestrian

    class GenderType {
        <<enumeration>>
        Male
        Female
    }
```