---
sidebar_position: 5
---

# Execution Configuration

The execution of the simulation can be defined **globally** or **individually per agent type or instance**. It specifies exactly how often an agent or the model should be executed.

## Global Execution Time

The global settings affect the simulation time and include the definition of the simulation period and the step length (``deltaT``).

MARS distinct two different time models:

### Step Based Execution

The step-based version is the simplest kind of execution. By setting the ``steps``, the concrete amount of steps to be actually executed is determined. 

> This temporal execution is suitable for models that do not consider any kind of temporal relationships in their concept model.

In the simulation configuration the following must be specified under the global settings ``globals``:

```json
{
	"globals": {
		"deltaT" : 1,
		"steps" : 1000
	}
}
```

In the configuration above we have defined the simulation runs exactly ``1000`` steps.

> &#10071;&#10071;&#10071; One simulation tick ``tick`` is interpreted as ``1`` step.

### Real-time based execution

The real-time based execution uses a concretely defined start and 
End time in which this simulation is executed. 

> This temporal execution is suitable for most models that want to react to calendar events within the model logic (e.g. in October it gets cooler ...).**

In the simulation configuration the following must be specified under the global settings ``globals'':

```json
{
	"globals": {
		"deltaT" : 1,
		"deltaTUnit": "minutes",
		"startTime" : "10-10-1993T10:34:01",
		"endTime" : "10-10-2003T12:00:00"
	}
}
```

The real time is set as the validity period. By specifying the step length ``deltaT`` and a concrete time unit ``minutes`` real-time step is specified.

> &#10071;&#10071;&#10071; One simulation tick ``tick`` is interpreted as ``1 minute``.


The following time units are available:

|``deltaTUnit``|
|---------|
|``microseconds`` |
|``milliseconds``|
|``seconds``|
|``minutes``|
|``days``|
|``weeks``|
|``months``|
|``years``|


Due to the existing real time, a further attribute `DateTime` is created in the output of the results, which assigns the corresponding validity time to the version of an object.


## Individual Execution Time

The frequency of execution of concrete agent and **active** layer instances can be set. 

The setting always refers to the simulation tick that maps to the logical simulation step or the real-time step (see above). 

In the simulation configuration, the so-called `executionFrequency` can be specified under the type mapping (`agents` or `layers`). This specifies an integer value, which tells after how many ticks, instances of these types should be executed.

```json
{
	"globals": {
		"deltaT": 1,
		"deltaTUnit": "minutes",
		"startTime": "10-10-1993T10:34:01",
		"endTime": "10-10-2003T12:00:00"
	},
	"agents": [{
			"name": "Marula",
			"count": 1180,
			"executionFrequency": 10
		},
		{
			"name": "Citizen",
			"count": 105610
		}
	]
}
```

In conjunction with the global real-time based execution every minute, this setting means: Every `Marula` is executed after each passed 10 minutes and every citizen is executed after every minute.

The `executionFrequency` applies to **all** instances of the type `Marula` and can be individually assigned to an output group for selected instances when registering to the runtime system (more about spawning and registering [here](../development/spawning.md).

