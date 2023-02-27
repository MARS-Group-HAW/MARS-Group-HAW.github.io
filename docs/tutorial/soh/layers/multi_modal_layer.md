# Multimodal Layer

Every [``MultimodalAgent``](../agents/multi_modal_agent.md) requires a ``MultimodalLayer`` that provides access to relevant resources within a multimodal context.

The ``Context`` holds the simulation specific time and progress context.


The ``RouteFinder`` provides the possibility to search multimodal routes (``MultimodalRoute``).


The ``GatewayLayer`` provides the possibility to enter or leave the graph via gateway points.


The ``Environment`` (currently: ``SidewalkEnvironment`` for pedestrians and ``StreetEnvironment`` for ``Vehicles``) holds a graph (an ``ISpatialGraphEnvironment``) that can be used to move.

The [``ModalLayer``](modal_layer.md) provides access to modal layers (e.g. ``IBicycleRentalLayer``) by their corresponding modal type.

