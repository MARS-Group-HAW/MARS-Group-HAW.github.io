---
sidebar_label: Kubernetes
sidebar_position: 100
---

# Simulations in a Kubernetes cluster

Simulations can be run both locally and distributed within a Kubernetes cluster (K8s). Kubernetes orchestrates applications across a set of heterogeneous computing machines.

## Prerequisite.

* [Docker](https://www.docker.com/products/docker-desktop)
* [kubectl](https://kubernetes.io/de/docs/tasks/tools/install-kubectl/)
* [kubelogin](https://userdoc.informatik.haw-hamburg.de/doku.php?id=docu:informatikcomputecloud#login/) (If simulation is to be started in MARS ICC-K8s).

## Customize the simulation start

To start a simulation in the K8s computing cluster the model must be built. Navigate to the directory where the `csproj` file and your entry point `Main()` is located (More about defining the entry point can be found [here](model.md)).

Open the file and create a `ModelDescription` like [here](../development/model.md).

```csharp
using Mars.Interfaces;
using Mars.Interfaces.Model;
using Mars.Components.Starter;

public static class Program 
{
    public static void Main() 
    {
        var description = new ModelDescription();
        
        // Add here your layers
        description.AddLayer<YourLayerType>();
        // maybe more raster and vector layer
        // description.AddLayer<YourVectorLayer>();
        // description.AddLayer<YourRasterLayer>();
        
        // Add your agent types 
        description.AddAgent<YourAgentType, YourLayerType>();
        
        // Optionally add entity types
        // description.AddEntity<YourEntity>();
        
        
        var configFromOutside = Environment.GetEnvironmentVariable("CONFIG");
        var simulationConfig = SimulationConfig.Deserialize(configFromOutside);
        
        // Create the simulation application and resolve the simulation entry point
        var application = SimulationStarter.BuildApplication(description, args);
        var simulation = application.Resolve<ISimulation>();
        
        // Start your simulation and print some measurements
        var state = simulation.StartSimulation();
        Console.WriteLine($"Input/Initialization phase lasted:   {state.InputWatch.ElapsedMilliseconds}");
        Console.WriteLine($"Computing phase lasted:              {state.TickWatch.ElapsedMilliseconds}");
        Console.WriteLine($"Output/Write phase lasted:           {state.OutputWatch.ElapsedMilliseconds}");
    }
}
```

The `Main()` method has been changed to get the `SimulationConfig` via a `CONFIG` environment variable instead of reading it via `--sm config.json` or directly from a file.

## Create a simulation application

An existing model must be packaged into a container to run in a K8s cluster. The following command creates the simulation and saves the program (box) in the folder `my_simulation_app`:

```bash
dotnet publish -c Release -o my_simulation_app
```

Make sure that all relevant input files (e.g.: `geojson` or `asc` files) are present in the folder `my_simulatio_app`.


## Preparing a container

The easiest way to create a container is as a Docker container. To do this, an empty file called `Dockerfile` must be created, from which the **Docker image** will be created:

```bash
touch Dockerfile
```

Open the `Dockerfile` and insert the following lines:

````dockerfile title="Dockerfile"
FROM mcr.microsoft.com/dotnet/runtime:6.0

COPY ./ ./
WORKDIR ./

ENTRYPOINT dotnet <YourModelName>.dll 
````


:::info

Adjust the variable `YourModelName` for your model. This is the name of the `csproj` file where you run these commands.

:::

Build the Docker image and tag it with a fully-qualified name of your container repo. The container repo is where the image is then stored and can be loaded and run by K8s:

For the MARS ICC, the following applies:
```bash
docker build --platform linux/amd64 -t git.haw-hamburg.de:5005/<user>/<repo>/my_simulation:latest .
```

The image has been built and must be uploaded at the container registration. Please log in to the container registration first.
For the MARS ICC applies:

```bash
docker login git.haw-hamburg.de:5005 
```

Upload the image:
```bash
docker push git.haw-hamburg.de:5005/<user>/<repo>/my_simulation:latest 
```

## Preparing a deployment

For launching in K8s, a specification is required in addition to the container to launch an application (simulation). 

First make sure you have a [deploy-token configured](https://icc.informatik.haw-hamburg.de/docs/haw-tutorial/#deployment-auslieferung-der-applikation-in-die-icc). This is need, so K8s can pull the previously created Docker image from the HAW GitLab registry.

Then create a `my_simulation_job.yml` file and add the following content:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: my_simulation
spec:
  template:
    spec:
      imagePullSecrets:
        - name: application-deploy-token
      containers:
      - name: my_simulation
        image: git.haw-hamburg.de:5005/mars/life/my_simulation:latest
        env:
          - name: CONFIG
            value: '
            {
              "globals": {
               "deltaT": 1,
               "startPoint": "2020-01-01T00:00:00",
               "endPoint": "2020-01-31T00:00:00",
               "deltaTUnit": "seconds"
             },
              "agents": [
                { "name": "YourAgentType", "count": 10 }
              ],
              "layers": [
                { "name": "YourVectorLayer", "file": "res/your_vector_layer_input.geojson" },
                { "name": "YourRasterLayer", "file": "res/your_raster_input.asc" },
            }
            '
```

Note that the [here](../configuration/sim_config_options.md) simulation configuration is noted in JSON and available as a string via the environment variable `CONFIG` in the application. Thus the scenario can be adapted directly via this specification. Furthermore, all input files (e.g. `geojson` or `asc` files) must be included in the image.

## Starting the simulation in the cluster

For the MARS ICC it is necessary to log in to the cluster beforehand using the tools `kubelogin`:

```bash
kubelogin --username <HAWIdentifer such as abc123> --password <YourPassword>
```

The `kubectl` tool can be used to apply the specification to the set cluster:


```bash
kubectl apply -f my_simulation_job.yml
```

K8s then tries to load the created and uploaded Docker image and start the container. At startup, the simulation application loads the simulation configuration from the environment variable `CONFIG`. 

Via the command `$ kubectl get pod` currently running applications are listed. An entry of the form `my_simulation-cbf7c989d-fnpzv` should appear and have the status `Running` or `Creating`.

If the container has the status `Succeeded`, the simulation application has finished successfully.
If the container has the status `Failed`, the cause is usually a configuration- or model error and the reason must be determined using simulation logs or the K8s logs:

Showing the internal logs and console output when something crashed within the simulation:

```bash
kubectl logs pod/my_simulation-cbf7c989d-fnpzv
```

Showing the K8s configuration and applied specification of `my_simulation_job.yml`:

```bash
kubectl describe pod my_simulation-cbf7c989d-fnpzv
```