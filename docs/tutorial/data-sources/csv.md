---
sidebar_position: 1
---

# Comma-Separated Values (CSV)

CSV files are used in the system from multiple point of views. The system reads CSV files and infers on of the following separators: _comma_ `,`, _semicolon_ `;`, _space_ ` `, or _tabulator_ `\t`. 

The system creates CSV files for simulation. Below is a description for both use cases.

## How to assign agent attribute values with data from a CSV file?

In the simulation configuration file (see this [article](../configuration/agent_config.md) for more information), an agent initialization file can be specified for each agent type. The file needs to contain a header row with attribute names (**note:** these names must match the attribute names in the corresponding agent type class). Each subsequent row is used to assign values to one agent's attributes. If the CSV file contains fewer rows than the number of agents instantiated at the beginning of the simulation, then the initialization file will loop back to the first row until all agents' attributes have values.

Here is an example of an agent initialization file:

|gender|length|age|worker|partTimeWorker|averageSpeed|speed|position|height|width|mass|
|------|------|---|------|--------------|------------|-----|--------|------|-----|----|
|1|0.22|29|True|False|True|0||1.7|0.46|65|
|0|0.22|26|True|True|True|0||1.72|0.46|75.35|
|1|0.22|33|True|False|True|0||1.71|0.46|66.94|
|1|0.22|49|True|True|True|0||1.71|0.46|62.51|
|1|0.22|55|True|False|True|0||1.72|0.46|71.06|
|1|0.22|19|True|True|True|0||1.71|0.46|69.06|
|1|0.23|27|True|False|True|0||1.75|0.47|62.04|
|0|0.22|29|True|False|True|0||1.72|0.46|89|
|0|0.22|28|True|False|True|0||1.72|0.46|94.97|
|1|0.22|50|True|False|True|0||1.7|0.46|71.41|


Columns are mapped automatically to the input attributes of the agent when using the `AgentManager`. More about spawning can be found [here](../development/spawning.md).

## How to store simulation output data in a CSV file?

Simulation output data can be stored in a CSV file. For more information on this and on how to store data in a database, please click [here](../configuration/sim_output_formats.md).

Here is an example of a simulation output file:

|Tick|Step|DateTime|Acceleration|ActiveCapability|ActualTravelTime|Bearing|CurrentlyCarDriving|DistanceStartGoal|ExpectedTravelTime|Gender|GoalX|GoalY|
|----|----|--------|------------|----------------|----------------|-------|-------------------|-----------------|------------------|------|-----|-----|
|365|365|2020-01-01T00:06:05|0|Walking|363|69.97634115090324|False|539.1496372361638|362|Female|9.9507224|53.5449285|
|4856|4856|2020-01-01T01:20:56|0|Walking|417|0|False|447.5835438681768|418|Male|9.9503878|53.5444032|
|6359|6359|2020-01-01T01:45:59|0|Walking|539|246.87714679703578|False|796.4590189678215|482|Male|9.9443762|53.5506118|
|6798|6798|2020-01-01T01:53:18|0|Walking|298|0|False|715.490939532274|331|Female|9.9430225|53.5518429|
|7506|7506|2020-01-01T02:05:06|0|Walking|84|0|False|63.42180081824236|85|Male|9.9427109|53.5518512|
|7748|7748|2020-01-01T02:09:08|0|Walking|208|0|False|227.9140326289338|209|Female|9.9454153|53.5468596|
|7826|7826|2020-01-01T02:10:26|0|CarDriving|208|0|False|497.89803147717004|206|Male|9.9479601|53.5535065|
|11152|11152|2020-01-01T03:05:52|0|Walking|578|356.9962451289335|False|254.03827739817234|595|Male|9.9376733|53.5440066|
|11644|11644|2020-01-01T03:14:04|0|Walking|6|135.22416886964015|False|5.3213083928973735|7|Male|9.9517046|53.5605164|
|11743|11743|2020-01-01T03:15:43|0|Walking|12|0|False|15.266971536423336|13|Female|9.9438129|53.5508932|
|12216|12216|2020-01-01T03:23:36|0|Walking|785|263.5532996107888|False|564.1441930826505|792|Female|9.9347918|53.5475968|

## Issues with CSV related to system settings

Depending on operating system setting and application settings (e.g., Excel), the separator/delimiter in CSV files are not identified correctly. This might lead to incorrect column separations while reading the file at the beginning of a simulation (agent initialization) or writing data into the file at the end of the simulation (simulation output data). To learn how to avoid this issue, please check out the section "CSV" in this [tutorial](../development/known-problems.md#csv).
