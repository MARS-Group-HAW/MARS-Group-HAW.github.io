---
sidebar_position: 10
---

# ASC files

ASC files can be used to store cell-based information that can be loaded into a raster layer of a MARS model. For example, a temperature layer can be created using information from an .asc file to define different temperatures across the simulation environment.

Here is an example of a .asc file with a four-by-four grid (`ncols` x `nrows`). `xllcorner` and `yllcorner` define the x- and y-coordinate of the lower-left corner of the grid-cell array that is to stretch across the layer. `cell size` defines the incremental size of a single cell. At the bottom of the file, the values of each cell are explicitly defined and separated by spaces.

```
ncols 4
nrows 4
xllcorner 30.5
yllcorner -26
cellsize 0.5
nodata_value -9999
17 20 23 25
16 21 24 25
16 22 24 25
21 23 24 24
```

For more information on `.asc` files:

* [ArcGIS Raster and Images](https://desktop.arcgis.com/de/arcmap/10.3/manage-data/raster-and-images/esri-ascii-raster-format.htm)
* [ArgGIS Conversion ASCII to Raster](https://pro.arcgis.com/de/pro-app/tool-reference/conversion/ascii-to-raster.htm)