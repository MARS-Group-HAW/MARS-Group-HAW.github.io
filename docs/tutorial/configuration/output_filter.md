# Output Filter

Since MARS supports model scenario e.g. the TreeModel or SOH with a huge set of involved agents, the modeler can only be interested in a specific subset of them or for specific model-states, regarding the e.g., "is of specific tree kind or has juveniles, etc." Only those entities applying this predicate will be persisted.

A dynamic predicate can provided to filter those entities matching the condition. An agent or entity  type can have an optional ``outputFilter`` which is able to accept a set of `AND` associated expressions in form of:

```json
{
"name": "Tree",
"count": 5049322,
"file": "../../model_input/tree_bushbuckridge.csv",
"frequency": 1,
"outputFrequency": 365,
"outputFilter": [{
        "parameter": "species",
        "operator": "in",
        "values": ["tt", "ca"]
    },
    {
        "parameter": "treeAgeGroup",
        "operator": "notIn",
        "values": ["seed"]
    }
]
}
```

The `outputFilter` is collection of AND associated conditions specifying predicate on attribute-level as: 

```bash
   parameter "x" is "in" or "notIn" a given value (in the example above ["tt", "ca"])
```

Containment or non-containment is only checked via a semantic-equality operator.

> Skipping the checks do not cause any problems since it is only be used to reduce the amount of data written out and therefore improving the system performance.