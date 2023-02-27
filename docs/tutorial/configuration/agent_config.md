---
sidebar_position: 10
description: Explains how to configure agent types.
---

# Agent Configuration

The configuration information of a MARS C# model defined the parameters and external data that are to be used during a simulation run. A model can be configured in two ways: either via an external JSON file or from within the program code.


## How to configure an agent type externally

Suppose the model is configured using **an external JSON configuration file**. In that case, layers can be configured, as shown in the following example:

```json
{
  "agents": [
    {
        "name": "AgentName",
        "count": 10,
        "file": "path/to/agent/init/file.csv",
        "mapping": [
          { "parameter": "ParameterName", "value": true }
        ]
      }
    ]
}
```

The object `agents` contains a list of all the agent types defined in the model. **Note:** all agent types defined in the model must be referenced in the configuration. The key `file`  points to a CSV file that can be used to set property values at the start of the simulation. This method can set each instantiated agent's property values individually. `options` contains specifications on how the CSV file is meant to be read and parsed. The key `mapping` is also optional and offers a second way to set property values at the start of the simulation. This method of assessing property values affects all instantiated agents of the agent type.

:::note 
If a value for the same property exists in both the agent initialization file *and* in a mapping of the simulation configuration, the amount of the configuration is preferred.
:::

To learn how to create an agent initialization file, please check out the section "How to assign agent attribute values with data from a CSV file" in this [article](../data-sources/csv.md).

## How to configure an agent type internally

If the model is configured from within the `Program.cs` File, then agent configuration can be done as follows:

```csharp
AgentMappings =
{
   new AgentMapping
    {
       Name = nameof(AgentName),
        InstanceCount = 10,
        File = "path/to/the/agent/init/file.csv",
        Options = {{"csvSeparator", ';'}},
        OutputFilter =
        {
           // see below for an example
        }
        IndividualMapping =
        {
           // see below for an example
        }
    } 
}
```

The object AgentMappings is used to configure all agent type (that were previously defined in the `ModelDescription`). Within the `AgentMappings` object, each agent type defined in the requires one AgentMapping object, consisting of a name (name of the agent in the simulation), InstanceCount (number of agents of this agent type), File (initialization data to be used for this agent type), and options (CSV options). Other optional keys include OutputFilter and IndividualMapping. For more information on simulation configuration options, please check out this [article](./sim_config_options.md).


## How to set an IndividualMapping

An individual parameter mapping can be provided to assigned or set the relationships of input parameters in the model to concrete values or referencing a field of your input file.
The individual mapping is specified for each type individually and associated the model properties with their `parameterName` to an input `value` or referencing field `field` which is part of your file input.

In the configuration this looks like the following:

````json
{
  "name": "Sheep",
  "output": "none",
  "individual": [
    {"parameter": "Health", "value": 80},
    {"parameter": "Respiration", "value": 0.002},
    {"parameter": "EnergeyWin", "field": "respirationField"}
  ]
}
````
With the third mapping, the MARS runtime system knows to retrieve the value from the input `sheeps.csv` file.

IndividualMapping within an agent can be used to set attribute values for the agent type.

```json
{
  "individual": [
    {"parameter": "Health", "value": 80},
    {"parameter": "Respiration", "value": 0.002}
  ]
}
```