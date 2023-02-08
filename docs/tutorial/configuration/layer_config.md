# Layer Configuration

The configuration information of a MARS C# model defined the parameters and external data that are to be used during a simulation run. A model can be configured in two ways: either via an external JSON file or from within the program code.

___

## How to configure a layer type externally

If the model is configured using **an external JSON configuration file**, layers can be configured as shown in the following example:

```JSON
{
  "layers": [
    {
      "name": "LayerName",
      "file": "path/to/file",
      "mapping": [
        {
          "parameter": "ParameterName", "value": "ParameterValue"
        }
      ]
    }
  ]
}
...
// agent configuration here
```


The object `layers` contains a list of all the layers defined in the model. **Note:** all layers defined in the model must be referenced in the configuration by matching . The key `file` points to a file (for example, a .geojson or .graphml) that contains geospatial information that is to be used to instantiate the layer. The key `mapping` is optional and can hold a list of some or all of the layer's properties (as defined in the layer class) and their values.

To learn how to write an external configuration file (JSON), please check out Section 2b in this [tutorial](../tutorials/main_and_configs.md).

___

## How to configure a layer type internally

If the model is configured from within the `Program.cs` file, then layer configuration can be done as follows:

```c#
LayerMappings =
{
	new LayerMapping
	{
    	Name = nameof(LayerName),
		File = "path/to/the/layer",
		IndividualMapping =
        {
            new IndividualMapping {Name = "PropertyName", Value = 0.779}
       }
	}
}
```

A JSON object LayerMappings is used to populate the layers (that were previously defined in the ModelDescription) with external data (for example, geodata stored in a file). Within the LayerMappings object, each layer defined in the ModelDescription requires one LayerMapping object, consisting of Name (name of the layer in the simulation) and File (path to the file that is to be used to fill the layer). Optionally, an IndividualMapping key can be used to set property values for the layer.

To learn how to write an internal model configuration, please check out Section 2a in this [tutorial](../tutorials/main_and_configs.md).