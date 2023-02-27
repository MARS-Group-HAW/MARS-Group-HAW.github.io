---
sidebar_position: 20
sidebar_label: Outputs
---

# Outputs

After you run the model, by hitting the Build-Taks in JetBrains Raider (small green triangle in the upper left of the IDE), the simulation will run, and produce outputs.

The results will be below the newly created folder `bin/Debug/net6.0/`.

```bash {4} title="Folder strcuture of a MARS model"
.
├── <model>
│   ├── <model>.csproj
│   ├── bin/Debug/net6.0/  # Outputs will be here!
│   ├── Model           
│   ├── Program.cs      
│   ├── Resources
│   └── config.json     
├── <model>.sln
└── README.md
```

In this case for each agent type, mainly the `SimpleAgent` and the `ComplexAgent` a CSV has been created. The naming follows `<agent name>.csv`.

```csv title="SimpleAgent.csv"
Tick,Step,DateTime,MeetingCounter,StartX,StartY,X,Y,ID
0,0,2022-03-01T05:00:00.0000000,0,4,4,4,4,ba9e80e1-751e-41a8-b5f8-d83bf8ebe608
1,1,2022-03-01T05:00:01.0000000,0,4,4,5,3,ba9e80e1-751e-41a8-b5f8-d83bf8ebe608
2,2,2022-03-01T05:00:02.0000000,0,4,4,5,3,ba9e80e1-751e-41a8-b5f8-d83bf8ebe608
3,3,2022-03-01T05:00:03.0000000,0,4,4,4,4,ba9e80e1-751e-41a8-b5f8-d83bf8ebe608
4,4,2022-03-01T05:00:04.0000000,0,4,4,4,5,ba9e80e1-751e-41a8-b5f8-d83bf8ebe608
```

The columns in the CSV-file show some basic information about the agent for each tick. You can recognize the `StartX` and `StartY` columns which stay the same and are form the initialization CSV file we saw previously. Since the agent implement the MARS interface `IPositionable` it as an position that gets logged each tick in the `X` and `Y` fields. You can see how the agent moved around from its start $(4, 4) \rightarrow (5, 3) \rightarrow (4, 4) \rightarrow (4, 5)$. The position $(5, 3)$ is present for two successive ticks (1, 2) since the agent tried to move on a wall in this tick, and so didn't move.

For this grid based simulation it's also possible to use our [Live Simulation](./../analysis/live_visualization.md). It will show you the movement of the agents on the grid, as the simulation progresses. 