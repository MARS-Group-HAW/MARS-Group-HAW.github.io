# Car

The ``Car`` is a ``Vehicle`` that is used for the  ``Car`` modal type.

Only a ``ICarSteeringHandle`` can use the car to move along the corresponding `CarGraph`. The steering (``CarSteeringHandle``) implements the [*Wiedemann Equation*](https://www.worldcat.org/title/simulation-des-straenverkehrsflusses/oclc/634105860?lang=de) and that is used to determine the acceleration ratio.

## Parking Space

Cars can be dropped off directly in the environment to represent available parking zones. In the model there is ``ParkingSpaceLayer`` available which manages `ParkSpace`. 

The ``Car`` can be used transport passengers and be used by `MultiCapableAgent` (for more look here  [MultiCapableAgent](../agents/multi_capable_agent.md)). 