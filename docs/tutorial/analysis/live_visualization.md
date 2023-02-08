# Simple Live Visualization

It is possible to visualise your own simulation. To get this visualisation it is necessary to make a few adjustments in the "config.json". The following describes how exactly the installation and execution works.

## Installation

The visualization tool can be found [here](https://git.haw-hamburg.de/mars/model-deployments/-/tree/master/Visualization). Please clone or download the folder.

Open your terminal and navigate into this directory. 

Install `python3.8` (getting from [Python](https://www.python.org/downloads/))



Execute the following command:

``````bash
pip3 install -r requirements.txt
``````



## Start the Visualization Frontend

Start the simple visualization by calling:

``````bash
python3 main.py
``````

Now your visualization is running and waiting in background for incoming simulation results &#10024;

## Start the Simulation with Visualization output

Start you desired simulation and activate the visualization output in your configuration by setting the field `pythonVisualization` to `true`

``````json
{

 "globals": {

  "deltaT": 1,
  "steps": 1000,
  "console": true,

   // Add the new field and activate the output
  "pythonVisualization" : true

 }

 // ... your agent, entities and layer mappings

}
``````



If the model is configured from within the `Program.cs` file, then setting the field `EnableSimpleVisualization` to `true` enables the visualization mode.

``````c#
Globals =

{

  DeltaTUnit = TimeSpanUnit.Seconds,
  Steps = 1000,
  ShowConsoleProgress = true,

  EnableSimpleVisualization = true

}

// ... your agent, entities and layer mappings
``````

