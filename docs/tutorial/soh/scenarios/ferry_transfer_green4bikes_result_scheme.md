# Result Schema

## ```DockWorker```

Results of the simulations are stored as a spatio-temporal snapshot where versions of each ``DockWorker`` are generated for each simulation step. 

For the output the following reduced schema is produced.

|Attribute |Data type |Description|
|-------------|----------|------------|
|ID |guid-string |The ID of the model object.      |
|Tick |integer |The system step for this snapshot.      |
|DateTime |datetime |The valid real-time for the snapshot.      |
|Step |integer |The logical simulation step for the snapshot (is equal to the tick if real time).     |
|X |real |The current X (longitude) coordinate with ``srid:EPSG:4326`` projection.      |
|Y |real |The current Y (latitude) coordinate with ``srid:EPSG:4326`` projection.      | 
|DistanceStartGoal|real |The distance to the target in meters (m).      |
|Gender |string |The gender of the worker.      |
|GoalX |real |The X (longitude) target coordinate of the worker.  |
|GoalY |real |The Y (latitude) target coordinate of the worker.  |
|PreferredSpeed |real |Provides the preferred speed of a walking entity.      |
|ResultTrajectoryEnabled|bool |A flag to enable and disable motion detection.      |
|RouteLength |real |The total length of the determined multi-modal route in meters (m).     |
|StableId |integer |A stable identifier from outside.      |
|StartX |real |The X (longitude) start coordinate with ``srid:EPSG:4326`` projection of the worker.  |
|StartY |real |The Y (latitude) start coordinate with ``srid:EPSG:4326`` projection of the worker.  |

## ``Ferry``

The output scheme for the ``Ferry`` entity type looks like this:

|Attributes |Data type |Description|
|-------------|----------|------------|
|ID |guid-string |The ID of the model object.      |
|Tick |integer |The system step for this snapshot.      |
|DateTime |datetime |The valid real-time for the snapshot.      |
|Step |integer |The logical simulation step for the snapshot (is equal to the tick if real time).     |
|X |real |The current X (longitude) coordinate with srid:EPSG:4326 projection.      |
|Y |real |The current Y (latitude) coordinate with srid:EPSG:4326 projection.      | 
|IsCollidingEntity |bool |Specifies whether this agent is obstructed by others.      |
|IsWrongWayDriving |bool |Specifies whether this agent moves on an opposite edge.      |
|LaneOnCurrentEdge |integer |Gives the current lane on the edge on which this agent is moving |
|ModalityType |string |Gives the modality type of these agents.  |
|PositionOnCurrentEdge |real |Gives the position in meters (m) on a road segment.      |
|RemainingDistanceOnEdge|real |Gives the remaining distance on the current edge to pass.      |


When the advanced output ``fullWithIgnored`` is activated the following the additional attributes are stored:

|Attributes |Data type |Description|
|-------------|----------|------------|
|Acceleration |real |The current acceleration of the entity. |
|ExploreDistanceFactor |integer |The viewing distance of the entity to react to others.      |
|Height |real |The height in meters.      |
|IntersectionSpeed |real |The preferred speed for crossing intersections (only relevant for roadworthy vehicles) .     |
|Length |real |Gives the length in meters (m) of this entity.      |
|Mass |real |Gives the mass in kilograms (kg).      | 
|MaxAcceleration |bool |The maximum possible acceleration of this entity with which the speed increases.      |
|MaxDeceleration |bool |The maximum braking force (negative acceleration) of this entity to reduce the speed.      |
|MaxSpeed |integer |The maximum possible speed that this entity can take. |
|PassengerCapacity |integer| Specifies the number of possible passengers that can be transported.      |
|RemainingDistanceOnEdge|real |The remaining distance on the current edge to pass.      |

## ``CycleTraveler``




## ``BicycleRentalStation``

Since MARS can persists complete vector and raster layer we include the changes at each rental stations can be observed. The following schema is used to the ``BicycleRentalLayer``:




## ``RentalBicycle``

The output scheme for the `RentalBicycle`s looks like this:

|Attributes |Data type |Description|
|-------------|----------|------------|
|ID |guid-string |The ID of the model object.      |
|Tick |integer |The system step for this snapshot.      |
|DateTime |datetime |The valid real-time for the snapshot.      |
|Step |integer |The logical simulation step for the snapshot (is equal to the tick if real time).     |
|X |real |The current X (longitude) coordinate with ``srid:EPSG:4326`` projection.      |
|Y |real |The current Y (latitude) coordinate with ``srid:EPSG:4326`` projection.      |
|Bearing |real |The direction in degree of this entity.      |
|DriverMass |real |The current Y (latitude) coordinate with ``srid:EPSG:4326`` projection.      |
|Mass |real |The mass of this vehicle in (kg).      |
|IsCollidingEntity |bool |Specifies whether this agent is obstructed by others.      |
|IsWrongWayDriving |bool |Specifies whether this agent moves on an opposite edge.      |
|LaneOnCurrentEdge |integer |Gives the current lane on the edge on which this agent is moving |
|Mass |real |The mass used for speed changes of this entity in kilogram (kg).      |
|ModalityType |string |Gives the modality type of this entity. For ``bicycles`` this is always ``Cycling``.  |
|PositionOnCurrentEdge |real |Gives the position in meters (m) on a road segment.      |
|RemainingDistanceOnEdge|real |Gives the remaining distance on the current edge to pass.      |
|Type|string |Specifies the used cycle kind (`Racing`, `City`, `Trekking`, `Mountain`, `Cross`, `Fitness` `LoadWheel`) affecting the mass.      |
|Weight|real |Specifies the whole weight of this cycle in conjunction wit hte driver.  |
|WeightLoad|real |Specifies additional load for luggage.  |