var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

map.on('singleclick', function(evt) {
    var content = '<p>If the popup content is quite long then by default it will scroll vertically.</p>';
    content += '<p>This behaviour together with the minimum width and maximum height can be changed by overriding the rules for the CSS class <code>.ol-popup-content</code> defined in <code>src/ol3-popup.css</code>.</p>';
    content += '<hr />';
    content += '<p><em>This text is here to demonstrate the content scrolling due to there being too much content to display :-)</em></p>';
    popup.show(evt.coordinate, content);
});
