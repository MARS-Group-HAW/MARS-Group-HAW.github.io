# Modal Layer

The ``ModalLayer`` provides access to resources for the respective modal type.

The ``BicycleRentalLayer`` for instance can be used to find a near by `BicycleRentalStation` and the ``ICarLayer`` has a reference to the ``CarParkingLayer``, which provides access to free ``CarParkingSpaces``.

These ``ModalLayer`` allow the [``MultiCapableAgent``](../agents/multi_capable_agent.md) to enter or switch vehicles.