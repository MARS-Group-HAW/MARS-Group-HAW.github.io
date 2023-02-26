# Entities

SmartOpenHamburg distinguishes between [`agents`](agents.md) (acting individuals) and `entities` (usable objects) within the simulation. Both can be initialized using files (see [Agent Configuration](../configuration/agent_config.md)).
Entities are initialized by an `EntityManager` that has a data source (e.g. a csv-file like `car.csv`). While every agent is unique, there may be multiple entities with the same initialization. 

The following example displays a `car.csv`. It defines values for relevant attributes of the [`Car`](#car). Every instance of a car is initialized by referencing the *type* column. All cars of *type* `Golf` have for instance a `maxSpeed` of 13.89 m/s.

|type|maxAcceleration|maxDeceleration|maxSpeed|length|height|width|trafficCode|passengerCapacity|velocity|mass|
|----|---------------|---------------|--------|------|------|-----|-----------|-----------------|--------|----|
|Golf|0.73           |1.67           |13.89   |4.5   |2     |2    |german     |4                |0       |1500|

The properties are further described below:

|property                       |description                                                                    |
|-------------------------------|-------------------------------------------------------------------------------|
|type                           |Identification column                                                          |
|maxAcceleration                |Acceleration module parameter in meter/second²                                 |
|maxDeceleration                |Acceleration module parameter in meter/second²                                 |
|maxSpeed                       |Acceleration module parameter in meter/second                                  |
|length                         |Dimension parameter for occupancy on the road in meter                         |
|height                         |Dimension parameter for occupancy on the road in meter                         |
|width                          |Dimension parameter for occupancy on the road in meter                         |                                 
|trafficCode                    |Identifies the behavior on intersections without traffic lights                |
|passengerCapacity              |The amount of passenger that can be driven by the car beside the driver        |
|velocity                       |The starting velocity in meter/second                                          |
|mass                           |Might be used by the acceleration module but is not right now. Unit in kilogram|


As by now the model includes the following entity types:

## Car

The `Car` is a `Vehicle` that is used for the `Car` modal type.

Only a `ICarSteeringHandle` can use the car to move along the corresponding `CarGraph`. The steering (`CarSteeringHandle`) implements the [*Wiedemann Equation*](https://www.worldcat.org/title/simulation-des-straenverkehrsflusses/oclc/634105860?lang=de) and that is used to determine the acceleration ratio.

### Parking Space

Cars can be dropped off directly in the environment to represent available parking zones. In the model there is `ParkingSpaceLayer` available which manages `ParkSpace`. 

The `Car` can be used transport passengers and be used by `MultiCapableAgent` (for more look here [MultiCapableAgent](agents/multi_capable_agent.md)). 


## Bicycle

The `Bicycle` is a `Vehicle` that is used for the `Cycling` modal type.

Only a `IBicycleSteeringCapable` can use the bicycle for driving, because the steering interface (`BicycleSteeringHandle`) requires some properties for the underlying [*Wiedemann Equation*](https://www.worldcat.org/title/simulation-des-straenverkehrsflusses/oclc/634105860?lang=de) that is used to determine the acceleration ratio.

### Rental Bicycle

The `RentalBicycle` is a specific `Bicycle` that can be leased from rental stations (see [`BicycleRentalStation`](layers/modal_layer.md)). It has to be returned to a station in order to switch back to walking.
The type of a rental bicycle is `city` as it is defined in the `bicycle.csv`  

## Ferry

The `Ferry` is a `Vehicle` that is used by the `FerryDriver` to commute between `FerryStations` on predefined routes called `FerryLines`.

As right now, the ferry has only a capacity property for passengers (e.g. [MultiCapableAgent](agents/multi_capable_agent.md)).

Further information can be found in the [FerryTransfer](scenarios/ferry_transfer.md) scenario. 