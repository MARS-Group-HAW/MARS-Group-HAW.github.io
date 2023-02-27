---
sidebar_position: 20
sidebar_label: Configuration
---

# Configuration

On this article we will show you some basic settings you can change to configure your model. For more comprehensive look into all option [look here](../configuration/sim_config_options.md).

Please have a look at the `config.json` file inside your model folder. It controls all features of the model.

## Global Options for the Model

Inside the `globals` key you have the possibillity to change the basic parameters of your simulation, like the duration.

```json
{
    "globals": {
        "startTime":  "2022-03-01T05:00",
        "endTime":    "2022-03-01T05:10",
        "deltaTUnit": "seconds",
        "deltaT": 1
    }
}
```

The combination of `startTime` and `endTime` will build the scope of the runtime of your model. Each tick will correspond to your chosen unit of time (`deltaTUnit` and `deltaT`). In the above example our simulation runs 10 minutes, with a resolution of `seconds`. So the simulation will have $10 \cdot 60 = 600$ ticks.

## Layer 

The layers form the area on that our agents move, in this case we need a playing field on that our agents can move. Below the `layers` key we can configure the layer of our simulation.

```json 
{
    "layers": [{
        "name": "GridLayer",
        "file": "Resources/grid_closed.csv"
    }]
}
```

Each layer needs a corresponding entry in this list. In this case wie assign the `GridLayer` class the input file `Resources/grid_closed.csv`.

```csv title="Resources/grid_closed.csv"
1;1;1;1;1;1;1;1;1;1
1;0;1;0;0;0;0;1;1;1
1;0;0;0;0;0;1;0;1;1
1;0;0;1;0;1;1;0;0;1
1;1;0;1;0;0;1;0;0;1
1;0;0;1;0;0;1;0;0;1
1;1;1;1;1;0;1;0;1;1
1;0;0;0;0;0;1;0;1;1
1;0;1;0;1;1;1;1;0;1
1;1;1;1;1;1;1;1;1;1
```

This _CSV file_ is actually just a two-dimensional grid, where in a `1` shows a wall and `0` is floor. Agents will only be able to move on floors cells, and can't walk over walls.

## Agent

The individual agent types of your model can be configured below the `agents` key. Each agent you want to use needs an entry in this list!

```json
{
    "agents": [{
      "name":  "SimpleAgent",
      "count": 2,
      "file":  "Resources/simple_agent.csv"
    }]
}
```

`name` creates a mapping between the actual C#-Class (`SimpleAgent`) that represents your agent's logic, and it's configuration in the `config.json` file. With `count` you can control, how many agents you want to have of this type. With `file` you can link an input CSV-file that has further attributes for the agent.

```csv title="Resources/simple_agent.csv"
StartX;StartY
4;4
1;1
```

In this case we give the two `SimpleAgent` some start positions on a grid cell. We initiate 2 agents, the first one will get the coordinates $(4, 4)$ and the second one will get $(1, 1)$.


<details>
<summary>Complete config.json used in this example</summary>

```json
{
  "globals": {
    "startTime": "2022-03-01T05:00",
    "endTime": "2022-03-01T05:10",
    "deltaTUnit": "seconds",
    "deltaT": 1,
    "output": "csv",
    "pythonVisualization": true
  },
  "layers": [
    {
      "name": "GridLayer",
      "file": "Resources/grid_closed.csv",
      "pythonVisualization": true
    }
  ],
  "agents": [
    {
      "name": "SimpleAgent",
      "count": 1,
      "file": "Resources/simple_agent.csv"
    },
    {
      "name": "ComplexAgent",
      "count": 1,
      "file": "Resources/complex_agent.csv"
    },
    {
      "name": "HelperAgent",
      "count": 1
    }
  ]
}
```

</details>