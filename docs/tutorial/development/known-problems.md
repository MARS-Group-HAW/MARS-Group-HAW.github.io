# Known Problems and Solutions 

This article includes a list of common problems that might occur when working with the MARS runtime system and offers some solutions to them.

___

### CSV

**Problem:** depending on operating system settings and application settings, the CSV separator might not be identified correctly by the MARS runtime system. As a result, columns might not get separated correctly, and the data in the file is not parsed correctly.

** Solution:** in your model's Program.cs file, define a culture setting that specifies how CSV files are read by the system when a simulation is run. If no culture or format setting is set, the default setting "en-EN" is used.

When working with an internal configuration file (directly in the Program.cs file), the culture setting can be specified in the `CsvOptions` object within the `Globals` object as follows:

```c#
Globals =
{
   // other global settings here
    OutputTarget = OutputTargetType.Csv,
    CsvOptions =
    {
        CultureInfo = CultureInfo.CurrentCulture,
        Delimiter = ",",
        IncludeHeader = true
    }
```

When working with an external configuration file (JSON), the culture setting can be specified in the `Options` object (which can be defined in the `Globals` object) as follows:

```json
{
    "globals": {
        // other global settings here
       "output": "csv",
       "options": {
          "delimiter": ",",
          "culture": "de-DE"
       }
    }
}
```

Alternatively, the following line of code can be written in the Program.cs file at the beginning of the `Main` method.

```c#
Thread.CurrentThread.CurrentCulture = new CultureInfo("EN-US");
```
---
### Excel formatting

**Problem:** when opening CSV files with Excel, the application adds its own formatting rules to specific cells depending on their contents. For example, longitudes and latitudes (which are typically long floating-point numbers) might be interpreted as whole numbers. If the CSV files are closed, the settings added by Excel are maintained, and the data are permanently altered. As a result, geoinformation that is loaded into a simulation is inaccurate, making it impossible to run the simulation.

** Solution:** if this issue occurs, the easiest Solution is to avoid handling CSV files with Excel (more straightforward text editors like Notepad++ or Sublime Text can be used instead).

___

### File paths defined in the model

**Problem:** you are unsure where to place input files or where output files of a simulation are put by the runtime system.

**Solution:** output files are stored in the root directory of the simulation: \<root-directory-of-your-model\>\bin\Debug\netcoreapp3.1. (Alternatively to "Debug", a "Release" directory might be created by the system).

**Note:** when working with a SmartOpenHamburg model, the following class can be used to examine and specify paths to certain directories that fulfil specific functions within the model.

```c#
namespace SOHResources {
   public static class ResourcesConstants {
        // ...
    }
}
```

___

### Source coordinate standard for GIS data

**Problem:** the source coordinate system of geoinformation that was obtained from an external source (for example, QGIS or OSM) is not configured correctly for the MARS runtime system.

** Solution:** the correct source coordinate system is Vorgabe-KBS: EPSG:4326 - WGS 84. In QGIS, right-click a layer and select Properties to open the Layer Properties window. In the left menu bar, select "Source" (German: "Quelle"). From the drop-down menu, select the correct source coordinate system.

___

### JetBrains Rider (NuGet package importer)

**Problem:** the `Mars.Life.Simulations` package is not being recognized by Rider (when typing `import Mars.` at the top of the file) even though the package was imported without errors by the NuGet package manager.

** Solution:** open a terminal in Rider and run the command `dotnet restore --force`. Once the order has executed, close and restart Rider and try to import the MARS package again. If this does not work, please check which version of Rider is installed on your system. Versions above 2019.3.4 are known to have this issue.

