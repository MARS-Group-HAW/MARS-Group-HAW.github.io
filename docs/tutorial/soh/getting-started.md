---
sidebar_position: 1
---

# Quick Start

This **getting started** describes the steps to download the model, which necessary dependencies have to be installed and how a concrete model is started.

## Installation

The SmartOpenHamburg (SOH) model and its scenarios are maintained as source code in the public GitHub repository [model-soh](https://github.com/MARS-Group-HAW/model-soh). The model is built on the [`Mars.Life.Simulations`](https://www.nuget.org/packages/Mars.Life.Simulations/) package, which is restored automatically when the solution is built.

:::note
The separate NuGet package `Mars.Life.SOH` has not been updated since 2023. For current work, use the source code from the repository.
:::

## Contents

The repository contains the `SOHModel` library with the mobility functionality (agents, modalities, layers) and a number of scenario projects ("boxes") that use it, for example `SOHTravellingBox`, `SOHCitizenDailyPlanBox`, `SOHFerryTransferBox` or `SOHGreen4BikesBox`. See [Ready to use scenarios](./scenarios/) for an overview.

## Setup your Environment

Clone the repository:

```bash
git clone https://github.com/MARS-Group-HAW/model-soh.git
```

Download and install the [.NET SDK](https://dotnet.microsoft.com/download). The projects currently target .NET 10.

Navigate into the cloned directory and build the solution in the directory where the `SOH.sln` file is located. All required dependencies are restored automatically:

```bash
dotnet build
```

The scenario `SOHTravellingBox` lets agents travel within the area of Hamburg Dammtor and can be started immediately:

```bash
cd SOHTravellingBox
dotnet run
```

The simulation writes the agents' trips to the file `HumanTraveler_trips.geojson`. Open [kepler.gl](https://kepler.gl/demo) and import the file via drag & drop to explore the computed trajectories (see also [Visualizing agent trips with kepler.gl](../analysis/visualizing_agent_trips_kepler.md)).

## Development Environment

For own development open the ``SOH.sln`` file with [Visual Studio](https://visualstudio.microsoft.com/de/vs/), [Jetbrains Rider](https://www.jetbrains.com/de-de/rider/) or another IDE supporting C# development.