var baseLayer = new ol.layer.Group({layers: [new ol.layer.Tile({source: new ol.source.OSM()})]});

var format_geojson_POINT = new ol.format.GeoJSON();
var features_geojson_POINT = format_geojson_POINT.readFeatures(geojson_POINT, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geojson_POINT = new ol.source.Vector();
jsonSource_geojson_POINT.addFeatures(features_geojson_POINT);var lyr_geojson_POINT = new ol.layer.Vector({
                source:jsonSource_geojson_POINT, 
                style: style_POINT,
                title: "Hasil Pendataan Rumah Tangga"
            });	

var format_RTatributntapOGRGeoJSONMultiPolygon = new ol.format.GeoJSON();
var features_RTatributntapOGRGeoJSONMultiPolygon = format_RTatributntapOGRGeoJSONMultiPolygon.readFeatures(geojson_RTatributntapOGRGeoJSONMultiPolygon, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTatributntapOGRGeoJSONMultiPolygon = new ol.source.Vector();
jsonSource_RTatributntapOGRGeoJSONMultiPolygon.addFeatures(features_RTatributntapOGRGeoJSONMultiPolygon);
var lyr_RTatributntapOGRGeoJSONMultiPolygon = new ol.layer.Vector({
                source:jsonSource_RTatributntapOGRGeoJSONMultiPolygon, 
                style: style_RTatributntapOGRGeoJSONMultiPolygon,
                title: "RT"
            });
			
var format_kelurahanlengkapOGRGeoJSONPolygon = new ol.format.GeoJSON();
var features_kelurahanlengkapOGRGeoJSONPolygon = format_kelurahanlengkapOGRGeoJSONPolygon.readFeatures(geojson_kelurahanlengkapOGRGeoJSONPolygon, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahanlengkapOGRGeoJSONPolygon = new ol.source.Vector();
jsonSource_kelurahanlengkapOGRGeoJSONPolygon.addFeatures(features_kelurahanlengkapOGRGeoJSONPolygon);
var lyr_kelurahanlengkapOGRGeoJSONPolygon = new ol.layer.Vector({
                source:jsonSource_kelurahanlengkapOGRGeoJSONPolygon, 
                style: style_kelurahanlengkapOGRGeoJSONPolygon,
                title: "Kelurahan Berstatus Kumuh"
            });
			

			
var format_ndakkumuhOGRGeoJSONPolygon = new ol.format.GeoJSON();
var features_ndakkumuhOGRGeoJSONPolygon = format_ndakkumuhOGRGeoJSONPolygon.readFeatures(geojson_ndakkumuhOGRGeoJSONPolygon, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ndakkumuhOGRGeoJSONPolygon = new ol.source.Vector();
jsonSource_ndakkumuhOGRGeoJSONPolygon.addFeatures(features_ndakkumuhOGRGeoJSONPolygon);
var lyr_ndakkumuhOGRGeoJSONPolygon = new ol.layer.Vector({
                source:jsonSource_ndakkumuhOGRGeoJSONPolygon, 
                style: style_ndakkumuhOGRGeoJSONPolygon,
				title:"Kelurahan Tidak Kumuh"
                
            });			

var format_kelurahanlineOGRGeoJSONLineString = new ol.format.GeoJSON();
var features_kelurahanlineOGRGeoJSONLineString = format_kelurahanlineOGRGeoJSONLineString.readFeatures(geojson_kelurahanlineOGRGeoJSONLineString, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahanlineOGRGeoJSONLineString = new ol.source.Vector();
jsonSource_kelurahanlineOGRGeoJSONLineString.addFeatures(features_kelurahanlineOGRGeoJSONLineString);
var lyr_kelurahanlineOGRGeoJSONLineString = new ol.layer.Vector({
                source:jsonSource_kelurahanlineOGRGeoJSONLineString, 
                style: style_kelurahanlineOGRGeoJSONLineString,
				title:"Batas Kelurahan"
                
            });			

				

var format_semuaRT = new ol.format.GeoJSON();
var features_semuaRT = format_semuaRT.readFeatures(geojson_semuaRT, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_semuaRT = new ol.source.Vector();
jsonSource_semuaRT.addFeatures(features_semuaRT);var lyr_semuaRT = new ol.layer.Vector({
                source:jsonSource_semuaRT, 
                style: style_semuaRT,
                title: "Proporsional Simbol"
            });			
			
			
lyr_RTatributntapOGRGeoJSONMultiPolygon.setVisible(false);
lyr_kelurahanlengkapOGRGeoJSONPolygon.setVisible(true);
lyr_geojson_POINT.setVisible(true);
lyr_kelurahanlineOGRGeoJSONLineString.setVisible (true);
lyr_ndakkumuhOGRGeoJSONPolygon.setVisible(true);
lyr_semuaRT.setVisible(false);


var layersList = [
					baseLayer,	
					lyr_RTatributntapOGRGeoJSONMultiPolygon,
					lyr_semuaRT,
					lyr_kelurahanlineOGRGeoJSONLineString,
					lyr_ndakkumuhOGRGeoJSONPolygon,
					lyr_kelurahanlengkapOGRGeoJSONPolygon,
					lyr_geojson_POINT,

				];


