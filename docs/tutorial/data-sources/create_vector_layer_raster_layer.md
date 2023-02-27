# How to prepare a vector/raster layer file

This tutorial offers a step-by-step guide on how to create a raster layer that can be used to populate a raster layer in a MARS model.

For more information on layers, please check out this [article](../development/layers.md).

## Finding the geographic area

1. Open QGIS
2. In the Browser window (center left), open the "XYZ Tiles" drop-down menu.
3. From there, drag-and-drop OpenStreetMap into the Layer window (bottom left). This should open a world map in the main window of QGIS.
4. On the map, navigate to where you want to obtain geodata from.

![qgis_osm_layer](./qgis_osm_layer.png)

## Creating a blank layer in QGIS

1. In the tool bar above the map, click on "Create new temporary layer" (German: "Neuen Temporärlayer anlegen").
2. In the pop-up menu:
    - Specify the new layer's name
    - Select "Polygon / CurvePolygon" from the geometry type drop-down menu.
    - Select `EPSG:4326 - WGS 84`
    - Click OK
3. Your new layer should now be visible in the Layer window

![qgis_new_layer](./qgis_new_layer.png)

## Marking the required area on the map

1. Click the pencil icon in the tool bar (if it is not already selected) to enter edit mode.
2. Click the icon "Add a polygon".        
3. On the map, draw the desired shape of your raster layer. When you are finished, right-click anywhere on the map.
4. Click the pencil icon in the tool bar and select Save in the pop-up menu.
5. In the popup, you can set the ID to `1`.
6. You now have your desired shape as a vector layer. If this is the desired format:
    - Right-click the layer in the Layer window.
    - Select "Export" and "Save object as...".
    - Specify the file name and format. (For more information, please check out this [article](./geospatial_data_sources.md))
    - Click OK
7. You now have a vector layer file ready for use in your MARS model. For more information on how to configure layers, please check out this [article](../configuration/layer_config.md).

![qgis_new_polygon](./qgis_new_polygon.png)

## How to convert a vector layer to a raster layer in QGIS

Follow these steps to convert a vector layer to a raster layer in QGIS:	

1. Load your vector layer into QGIS (e.g., by dropping the layer file into the main editing window).
2. Select the vector layer in the Layer window.
3. Click "Raster" in the top menu bar and navigate to "Conversion" and "Rasterize".

![qgis_polygon_to_raster](qgis_polygon_to_raster.png)

1. Specify the vector layer as "input layer".
2. Select "Georeferenced unit" as output (under "output raster size units").
3. Specify Width and Height.
    :::note
    These numbers refer to longitude and latitude and are measured in degrees (°). They determine how many cells your raster layer will be divided into horizontally and vertically. Depending on the geographic dimensions (size) of your layer, you might need to select small numbers to be able to place enough cells in the layer.  A cell size of `0.001°` will roughly correspond to `111 m`.
    :::
4. Under "output size", select the three dots and click "use layer dimensions".
    - In the pop-up menu, select the vector layer you want to convert to a raster layer and click OK.
5. Set the `NODATA` value to `1`.
6. Click Run, you have no rasterized your polygon!

![qgis_vector_to_raster](qgis_vector_to_raster.png)

![qgis_rasterized](qgis_rasterized.png)

Your raster layer should now be available in the Layer window (bottom left). To export it as an `.asc` file for MARS do the following:

1. Select the layer, then click on "Raster" in the top menu bar and select "Convert" and "Translate (Convert format)".
2. Specify the raster layer as "input layer".
3. Under "converted", select the three dots and "Save in file…".
    - Specify the path of your file and .asc as the file format.
5. Click OK. You now have a raster layer file ready for use in your MARS model.
