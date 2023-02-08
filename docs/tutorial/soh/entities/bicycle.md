# Bicycle

The ``Bicycle`` is a ``Vehicle`` that is used for the  ``Cycling`` modal type.

Only a ``IBicycleSteeringCapable`` can use the bicycle for driving, because the steering interface (``BicycleSteeringHandle``) requires some properties for the underlying [*Wiedemann Equation*](https://www.worldcat.org/title/simulation-des-straenverkehrsflusses/oclc/634105860?lang=de) that is used to determine the acceleration ratio.

### Rental Bicycle

The ``RentalBicycle`` is a specific ``Bicycle`` that can be leased from rental stations (see [``BicycleRentalStation``](../layers/modal_layer.md)). It has to be returned to a station in order to switch back to walking.
The type of a rental bicycle is ``city`` as it is defined in the ``bicycle.csv``  