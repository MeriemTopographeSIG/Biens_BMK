var wms_layers = [];


        var lyr_Imagesatellite_0 = new ol.layer.Tile({
            'title': 'Image satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GEOREFBMK_1 = new ol.format.GeoJSON();
var features_GEOREFBMK_1 = format_GEOREFBMK_1.readFeatures(json_GEOREFBMK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOREFBMK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOREFBMK_1.addFeatures(features_GEOREFBMK_1);
var lyr_GEOREFBMK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOREFBMK_1, 
                style: style_GEOREFBMK_1,
                popuplayertitle: 'GEOREF BMK',
                interactive: true,
                title: '<img src="styles/legend/GEOREFBMK_1.png" /> GEOREF BMK'
            });

lyr_Imagesatellite_0.setVisible(true);lyr_GEOREFBMK_1.setVisible(true);
var layersList = [lyr_Imagesatellite_0,lyr_GEOREFBMK_1];
lyr_GEOREFBMK_1.set('fieldAliases', {'id': 'id', });
lyr_GEOREFBMK_1.set('fieldImages', {'id': 'TextEdit', });
lyr_GEOREFBMK_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_GEOREFBMK_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});