---
sidebar_label: Kubernetes
sidebar_position: 100
---

# Simulations in a Kubernetes cluster

Simulations can be run both locally and distributed within a Kubernetes cluster (K8s). Kubernetes orchestrates applications across a set of heterogeneous computing machines.

## Prerequisite.

* [Docker](https://www.docker.com/products/docker-desktop)
* [kubectl](https://kubernetes.io/de/docs/tasks/tools/install-kubectl/) (Can be activated in Docker Desktop)
* [eduVPN](https://www.haw-hamburg.de/vpn/) (for access to ICC)
* You are in the model-soh directory in the terminal

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

## Preparing a container
All the following files are created in your own SOHBox folder **but** the commands are executed from root (in soh it is model-soh folder). 

The easiest way to create a container is as a Docker container. To do this, an empty file called `Dockerfile` must be created, from which the **Docker image** will be created


Open the `Dockerfile` and insert the following lines:

:::info

Replace YourBox with your actual box name. Also, a file called start.sh is needed in your box — an example follows below.

:::

````dockerfile title="Dockerfile"
# ----------------------------
# 1. Build Stage
# ----------------------------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
# Copy everything into the container
COPY . .
# Restore and publish the project
RUN dotnet restore SOH.sln
RUN dotnet publish YourBox/YourBox.csproj -c Release -o /app
# ----------------------------
# 2. Runtime Stage
# ----------------------------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY YourBox/start.sh .
RUN chmod +x /app/start.sh
# Copy published DLLs
COPY --from=build /app .
# Copy resources needed at runtime
COPY --from=build /src/YourBox/resources ./resources
COPY --from=build /src/YourBox/config.json /config/config.json
# Set config path
ENV MARS_CONFIG_PATH=/config/config.json
# Run the application
#ENTRYPOINT ["dotnet", "YourBox.dll"]
ENTRYPOINT ["./start.sh"]
````

Create a file called `start.sh` in the same directory as the `Dockerfile` and add the following lines:
:::info
This script ensures the simulation saves the output GeoJSON file before terminating, as MARS does not do this by default.
Rename Outputname to your actual output and YourBox to your box.
:::
```bash
#!/bin/bash
dotnet YourBox.dll
cp Outputname_trips.geojson output/
```

Create personal access token:
- Go to https://git.haw-hamburg.de/-/user_settings/personal_access_tokens, add new token
- Save the token locally
- Log in to Docker using the inf username and the token:
```bash
docker login git.haw-hamburg.de:5000
```

On https://git.haw-hamburg.de/ create a new repository

Build your Docker image:
```bash
docker build -f YourBox/Dockerfile -t git.haw-hamburg.de:5000/<inf-username>/<repository>/<your-image-name:latest> .
```

```bash
docker push git.haw-hamburg.de:5000/<inf-username>/<repository>/<your-image-name:latest>
```

## Preparing a deployment
- Go to https://icc-login.informatik.haw-hamburg.de/
- Create a icc-config.yaml file
- Add the downloaded configuration to icc-config.yaml
- Note: This file is valid for 7 days only. Renew it regularly.

Create a Kubernetes Secret:
```bash
kubectl -n <namepspace> create secret docker-registry gitlab-registry-secret \
  --docker-server=git.haw-hamburg.de:5000 \
  --docker-username=infwUsername \
  --docker-password=YOUR_TOKEN \
  --kubeconfig=YourBox/icc-config.yaml
```

Create configmap.yaml:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: soh-config
  namespace: <namespace>
data:
  config.json: |
    {
      "simulation": {
        "iterations": 43200,
        "randomSeed": 42
      },
      "outputs": [
        {
          "kind": "trips",
          "outputConfiguration": {
            "tripsFields": [
              "StableId",
              "StartPosition",
              "EndPosition",
              "DistanceTraveled",
              "Duration"
            ]
          }
        }
      ]
    }

```
:::info
The reason why parts of the config.json are specified is so that the Docker container does 
not need to be rebuilt when changes are made to the configuration.
:::

Then create it with:
```bash
kubectl create configmap soh-config --from-file=config.json=YourBox/config.json --kubeconfig=YourBox/icc-config.yaml -n <namespace>
```
:::info
You can choose the name of the configmap yourself. The namespace is the name of your user space, found in the kubectl config file.
:::

Create deployment.yaml:
```bash
apiVersion: batch/v1
kind: Job
metadata:
  name: <yourname>-job
  namespace: <namespace>
spec:
  template:
    metadata:
      labels:
        job-name: <soh-job>
    spec:
      containers:
        - name: soh-logistics
          image: git.haw-hamburg.de:5000/<infwUsername>/<repo>/<name:tag>
          imagePullPolicy: Always
          env:
            - name: MARS_CONFIG_PATH
              value: /config/config.json
          volumeMounts:
            - name: config-volume
              mountPath: /config
            - name: output-volume
              mountPath: /app/output
          resources:
            requests:
              memory: "3Gi"
              cpu: "2"
            limits:
              memory: "4Gi"
              cpu: "2"
      restartPolicy: Never
      volumes:
        - name: config-volume
          configMap:
            name: <soh-logistics-config>
        - name: output-volume
          persistentVolumeClaim:
            claimName: <output-pvc-name>
      imagePullSecrets:
        - name: gitlab-registry-secret
```
:::info
Further information about the available resources can be found [here](https://rzinf.pages.inf.haw-hamburg.de/doku/icc/resourcequotas/).
:::

Create output-pvc.yaml:
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: soh-output-pvc
  namespace: namespace
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: <needed storage e.g., 4Gi>
  storageClassName: rook-ceph-block
```
:::info
This is the ICC storage.
:::

Create pvc-access-pod.yaml:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pvc-access-pod
  namespace: <userspace>
spec:
  containers:
    - name: pvc-access-container
      image: ubuntu:latest
      command: ["/bin/bash", "-c", "sleep 3600"]
      volumeMounts:
        - name: output-volume
          mountPath: /data
  volumes:
    - name: output-volume
      persistentVolumeClaim:
        claimName: soh-output-pvc
```
:::info
This is the pod that will be used to access the output files.
:::

Deploy the Persistent Volume Claim:
```bash
kubectl apply -f YourBox/output-pvc.yaml --kubeconfig=YourBox/icc-config.yaml
```

Check PVC Status:
```bash
kubectl get pvc -n <namespace> --kubeconfig=YourBox/icc-config.yaml
```
Expected Status is Bound

Deploy to ICC:
```bash
kubectl apply -f YourBox/deployment.yaml --kubeconfig=YourBox/icc-config.yaml
```

Check Pod Status:
```bash
kubectl get pods -n <namespace> --kubeconfig=YourBox/icc-config.yaml
```

Check runtime status:
```bash
kubectl describe pod <pod-name> -n <namespace> --kubeconfig=YourBox/icc-config.yaml
```
:::info
Example output:

ContainerCreating = Starting

Error = Error

Running = Running

Completed = Finished
:::

Check logs:
```bash
kubectl logs <pod-name> -n <namespace> --kubeconfig=YourBox/icc-config.yaml
```

Start pvc-access-pod (after job completes):
```bash
kubectl apply -f YourBox/pvc-access-pod.yaml -n <namespace> --kubeconfig=YourBox/icc-config.yaml
```



Access Output from Pod:
```bash
kubectl exec -it pvc-access-pod -n <namespace> --kubeconfig=YourBox/icc-config.yaml -- /bin/bash
cd data
```
Then copy the file locally:
```bash
kubectl cp <userspace>/pvc-access-pod:/data/Output_trips.geojson <OUTPUTPATH>/Output_trips.geojson --kubeconfig=YourBox/icc-config.yaml
```
:::info
Replace Output_trips.geojson with the actual output file name and OUTPUTPATH with the desired local path.
:::

Making Changes to Files or Code:

For code or Dockerfile changes, rebuild the Docker image.

For changes to deployment.yaml, configmap.yaml, pvc-access-pod.yaml, or output-pvc.yaml, delete and re-apply the respective 
Kubernetes objects
```bash
kubectl delete pods --all -n <userspace> --kubeconfig=YourBox/icc-config.yaml
kubectl delete pod <pod-name> -n <userspace> --kubeconfig=YourBox/icc-config.yaml
kubectl delete configmap soh-logistics-config -n <userspace> --kubeconfig=YourBox/icc-config.yaml
kubectl delete secret gitlab-registry-secret -n <userspace> --kubeconfig=YourBox/icc-config.yaml
kubectl delete job soh-logistics-job -n <userspace> --kubeconfig=YourBox/icc-config.yaml
kubectl delete deployment soh-logistics -n <userspace> --kubeconfig=YourBox/icc-config.yaml
kubectl delete pvc soh-output-pvc -n <userspace> --kubeconfig=YourBox/icc-config.yaml
```