# Geospatial Data
Geospatial data object containing a spatial reference in the form of coordinates. Often these are geocoordinate with the coordinate reference system ``srid:EPSG:4326``.
___

## Obtaining useful Data

A useful resource for geospatial data about Hamburg is [GeoPortal](https://geoportal-hamburg.de/geo-online/). (Other cities/countries have their own agencies, such as the Federal Office of Statistics, that provide local, geospatial data). Follow these steps to obtain raster- and vector-layer data at Geoportal Hamburg:

1. Click on Themen → Fachdaten
2. From the list, choose the type of information you wish to obtain raster- or vector-data on and click the information icon next to it.
3. In the info card that pops up click on `WMS` address if available.
4. If not available, then click on `Weitere Metadaten`. This will forward you to metaver.de (MetadatenVerbund).
   1. On [Metaver](https://metaver.de), click on one of the links under ``Verweise`` or `Weitere Verweise`.
5. You will be directed to a site that contains an XML document. Copy the site's URL and paste it into QGIS to display the geodata.

___

## Prepare Data

LIFE can consume multiple geospatial data format such as `GeoJSON (*.geojson)`, `GeoPackage (*.gpgk)`, `GraphML (*.graphml)` or `ESRI Shapefile (*.shp)` as for vector layers, or `Raster CSV (*.csv)`,  `ASCII Grid (*.asc)` for raster-layer. 

To prepare non-conforming geospatial data for your model, you can convert it with **QGIS** as a useful public GIS processing tool.

1. Download and install [QGIS](https://qgis.org/en/site/forusers/download.html).
2. Load your geospatial data into the QGIS application. This will produce one or more layer(s) in the Layer window (bottom left).
3. Export the layer by opening the context-entries and selecting `Export`.
4. Select an appropriate format, mentioned above or described [here](../model-configuration/layer_config.md).
