# Referencing

SmartOpenHamburg distinguishes between [``agents``](agents.md) (acting individuals) and ``entities`` (usable objects) within the simulation. Both can be initialized using files (see [``Agent Configuration``](../core/model-configuration/agent_config.md)).
Entities are initialized by an ``EntityManager``that has a data source (e.g. a csv-file like *car.csv*). While every agent is unique, there may be multiple entities with the same initialization. 


The following example displays a *car.csv*. It defines values for relevant attributes of the [``Car``](entities/car.md). Every instance of a car is initialized by referencing the *type* column. All cars of *type* ``Golf`` have for instance a ``maxSpeed`` of 13.89 m/s.


|type|maxAcceleration|maxDeceleration|maxSpeed|length|height|width|trafficCode|passengerCapacity|velocity|mass|
|----|---------------|---------------|--------|------|------|-----|-----------|-----------------|--------|----|
|Golf|0.73           |1.67           |13.89   |4.5   |2     |2    |german     |4                |0       |1500|

The properties are further described below.

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
* Car
* Bicycle
* Ferry