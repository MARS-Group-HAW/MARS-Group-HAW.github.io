---
sidebar_position: 5
sidebar_label: Your first model
---

# Your first model

After reading about the concepts in the previous chapter you are now ready to build and set up a first model yourself!

You can either choose on of the blueprint start models, or go with the [Wolf-Sheep-Model](https://github.com/MARS-Group-HAW/model-wolf-sheep):

- For grid based models: https://github.com/MARS-Group-HAW/blueprint-grid
- For Geo-referenced, with free movement https://github.com/MARS-Group-HAW/blueprint-georaster
- For Geo-referenced, with a graph: https://github.com/MARS-Group-HAW/blueprint-geovector

In the following sections we will explain the basic interactions with the model based on the `blueprint-grid` model. Nevertheless, the ideas should be transferable to all suggested model. Also, we will explain the expected behaviors when running the model with the JetBrains Rider IDE.

<details>
<summary>Create a model from scratch</summary>
<div>

On How to cerate a new model from scratch, see [this article](./../development/createing-a-model.md).
</div>
</details>

## Setup 

Please clone your desired repository from GitHub:

```bash
git clone https://github.com/MARS-Group-HAW/blueprint-grid.git
```

After opening the folder of the model, you will see a folder structure similar to this:


```bash title="Folder strcuture of a MARS model"
.
├── <model>
│   ├── <model>.csproj
│   ├── Model           # C# files for Layers and Agents
│   ├── Program.cs      # Entry file for model execution, like main()
│   ├── Resources       # Assest like input CSVs or geo data
│   └── config.json     # Model configuration parameters
├── <model>.sln
└── README.md
```

## Running

Open the `.sln`-file with a double click into Rider. In the upper left you shoule see the Green-Play icon to build and run your model.

After running the model additional folders will be created: 

- `<model>bin/Debug/net6.0/`: contains compiled model, as well as **outputs like CSV**, etc.
