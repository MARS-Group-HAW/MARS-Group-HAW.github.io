# Quick Start

This **getting started** describes the steps to download the model, which necessary dependencies have to be installed and how a concrete model is started.

## Contents

The repository contains projects and a number of libraries to simulate mobility behaviour in citie

**SOHModelStarter**: a model that is geared towards determining optimal routes using several modes of travel (modalities). Per default, the model is set in the district of Altona, Hamburg to run for 24 simulation hours with one agent (type `Citizen`) who is able to travel by walking on foot, riding a bicycle, and driving a car. The agent has a predefined daily routine which includes activities like work, errands, and others.

## Setup your Environment

First clone the repo from our internal [Git](https://git.haw-hamburg.de) with your credentials:

```bash
git clone https://git.haw-hamburg.de/mars/model-smart-open-hamburg-po.git
```

Download and install the SDK for NetCore 3.1 from the official [website](https://dotnet.microsoft.com/download/dotnet-core/3.1).


Navigate into the cloned directory and make sure that all required dependencies are installed automatically by building the model in the directory where the SOHModel.sln file is located:

```
dotnet build
```

We have prepared a scenario in the project SOHModelStarter for the entry with 10000 agents that you can start immediately. To be able to analyze results afterwards, we recommend the use of a relational database for queries via SQL. Other formats are also possible. We have set a local SQlite as default for you. For other output settings, please refer to the [Online Documentation].

Navigate to the folder and start the model:

```
cd SOHModelStarter
dotnet run
```

The results of the model are stored after each simulated second for each agent involved. A new SQLite database with the file name *+mars.sqlite** was created in the folder **bin/Debug/netcoreapp3.1** where all data is stored.

Use your preferred tool for query or visualization. We recommend the tool [Falcon SQL](https://github.com/plotly/falcon) with which you can analyze relational queries in different ways with diagrams.

## Development Environment

For own development open the ``SOHModel.sln`` file with [Visual Studio](https://visualstudio.microsoft.com/de/vs/), [Jetbrains Rider](https://www.jetbrains.com/de-de/rider/) or another IDE supporting C# development.