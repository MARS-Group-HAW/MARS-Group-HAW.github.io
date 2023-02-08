# Time-series data
Time-series data consist of datasets with temporal validity. Over the simulation time, only these data sets are provided by the layer that are valid for the current time step. 

## Time-series capabilities
If you wan't to use time-series data in your model you will be using a ``RasterLayer`` to represent that information. For every simulation step, the layer will return the current value for that point in time.

The ``VectorLayer`` also allows temporal changes in its data, for instance by sensor integration. More information is describes [here](../basic-concepts/layers.md#vector-layer).


## Time-series data
Time-series data is represented through a combination of files.
The file format for the actual time-series data is `ASC`.
This has been chosen to allow not only for time reference, but for spatial reference as well.
Hence the ``RasterLayer`` as container, providing the time-series functionality.
The second, an even more important file, is the so called ``metadata.csv``.
This CSV file gives the time-reference to the time-series data as it tells the simulation when to use which file.

An easy example would be *temperature data* for our simulated area.
Each hour the temperature values would change.
Additionally these values aren't the same for the whole simulation.
So for each hour there would be one ASC file which is basically a grid.
In each of these grid cells the temperature value would be contained.
The ``metadata.csv`` consists of two columns: the first one represents the time, the second the file to use.
So in the first column we would put 1pm &#8594; use file1, 2pm &#8594; use file2, 3pm &#8594; use file3 etc.

```css
ncols 4  
nrows 8  
xllcorner 30.5  
yllcorner -26  
cellsize 0.5  
nodata_value -9999  
17.7011199951172 20.0589538574219 23.7217041015626 25.5244537353515
16.9351440429688 21.6022125244141 24.1799407958985 25.5961242675782
16.2822509765625 22.2223449707032 24.4391418457031 25.422006225586
21.8218780517578 23.4564910888672 24.8983398437501 24.9876953125001
```
*Example time-series data: file_1.asc*

The example data above shows one of these files (``file_1.asc``) which contains information about the eight contained grid cells (temperature in degree celsius).
The ``metadata.csv`` is shown below.
The time format should either match the one listed beneath exactly, or be a at least a regular time format (ISO standard).
You'll know that there was something wrong with you time format once the simulation crashes.
It is very important that the file contains the shown first line with ``Date`` and ``File``, otherwise it won't work.

```csv
Date;File
2019-1-1T13:05:00;file_1.asc
2019-1-1T14:00:00;file_2.asc
2019-1-1T15:00:00;file_3.asc
2019-1-1T16:00:00;file_4.asc
``` 
*Metadata CSV file for time-series data*

Once you have created your files (``metadata.csv`` + ``time-series`` files) you have to put them in same folder, no subfolders allowed.
Zip them afterwards so there is only this zip-archive left.
This zip archive can then be used in the simulation config file to initialize the time-series layer.