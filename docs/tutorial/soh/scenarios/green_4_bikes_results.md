
Results are generated in two variants:

* Trajectories for moving object can be switched on and off to observe and visualize the movements.
* Simulation results can be generated for each individual traveler to perform detailed analysis.

Simulation results include tick-by-tick versioning of individual agents and can be fine-grained. Results can be output according to specific states within the model. A detailed description of configure the simulation output can be find [here](../../core/model-configuration/sim_output_formats.md).

These states correspond:

* The selection of certain simulation steps.
* The selection for certain model states.
* Everything of an agent.
* Only trajectories.


In the enclosed ``config.json`` an example configuration for the ``CycleTraveler`` is defined:

```json
{
    "name": "CycleTraveler",
    "output": "sqlite",
    "individual": [
      {"value": true, "parameter": "ResultTrajectoryEnabled"},
      {"value": true, "parameter": "CapabilityCycling"}
    ]
  }
```

You can set the output per agent individually and configure its current state via an output filter. For more about output filters and how to apply, see [here](../../core/model-configuration/output_filter.md).

To get all results for each calculated simulation step, remove the ``outputFilter`` from the configuration and leave the output filter active.
 
> Please note that the simulation time will taking longer, when the output filter is omitted, wrongly configured or the output for all simulation results is active.

## Result Scheme

Results of the simulations are stored as a spatio-temporal snapshot where versions of each entity are saved for each simulation step. For the output the following reduced schema is produced.

|Attribute |Data type |Description|
|-------------|----------|------------|
|ID |guid-string |The ID of the model object.      |
|Tick |integer |The system step for this snapshot.      |
|DateTime |datetime |The valid real-time for the snapshot.      |
|Step |integer |The logical simulation step for the snapshot (is equal to the tick if real time).     |
|X |real |The current X (longitude) coordinate with ``srid:EPSG:4326`` projection.      |
|Y |real |The current Y (latitude) coordinate with ``srid:EPSG:4326`` projection.      |
|CapabilityCycling |bool |The flag indicating whether this entity can use bicycles.      |
|CapabilityDriving |bool |The flag indicating whether this entity can use a car.      |
|DistanceStartGoal|real |The distance to the target in meters (m).      |
|Gender |string |The gender of the worker.      |
|GoalX |real |The X (longitude) target coordinate with ``srid:EPSG:4326`` projection of the travelling entity.  |
|GoalY |real |The Y (latitude) target coordinate with ``srid:EPSG:4326`` projection of the travelling entity.  |
|PerceptionInMeter |real |The perception range to look to other entities.      |
|PreferredSpeed |real |Provides the preferred speed of a walking entity.      |
|ResultTrajectoryEnabled|bool |A flag to enable and disable motion detection.      |
|RouteLength |real |The total length of the determined multi-modal route in meters (m).     |
|StableId |integer |A stable identifier from outside.      |
|StartX |real |The X (longitude) start coordinate of the entity.  |
|StartY |real |The Y (latitude) start coordinate of the entity.  |

 
## Entity Output

To include single entities like the used ``ferry`` or ``bicycle``, the output must also be set to the selected format in the configuration:

```json
{
  "file": "resources/bicycle.csv",
  "name": "Bicycle",
  "output": "sqlite"
}
```

More output kinds are available, described [here](../../core/model-configuration/sim_config_options.md).

The output scheme for the ```rentalBicycle```s looks like this:

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
|ModalityType |string |Gives the modality type of this entity. For ``bicycles`` this is always ``Cycling``.  |
|PositionOnCurrentEdge |real |Gives the position in meters (m) on a road segment.      |
|RemainingDistanceOnEdge|real |Gives the remaining distance on the current edge to pass.      |

By default MARS writes out all attributes of an entity that are marked as ``ignore = false`` in the model. To write out all attributes, the ``outputKind`` must be set to ``fullWithIgnored``.

```json
{
  "file": "resources/ferry.csv",
  "name": "Ferry",
  "output": "sqlite",
  "outputKind": "fullWithIgnored"
}

```

If the upper setting is activated, the table described above is extended by the following scheme.

|Attributes |Data type |Description|
|-------------|----------|------------|
|Acceleration |real |The current acceleration of the entity. |
|Velocity |real |The current speed of this object.      |
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
|UTurnSpeed |real |The speed used, when performing a UTurn at an intersection.      |
