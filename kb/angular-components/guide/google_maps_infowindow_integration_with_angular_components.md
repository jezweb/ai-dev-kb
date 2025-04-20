# Google Maps InfoWindow Integration with Angular Components

**Summary:** This file covers topics related to "Google Maps InfoWindow Integration with Angular Components". Key snippets include: Google Maps Template with InfoWindow Implementation.

---

## Google Maps Template with InfoWindow Implementation

**Description:** HTML template that sets up the Google Map component with marker and info window integration. Includes event bindings for map clicks and marker interactions.

```html
<!-- google-maps-demo.component.html -->
<google-map
  height="400px"
  width="750px"
  [center]="center"
  [zoom]="zoom"
  (mapClick)="addMarker($event)">
    @for (position of markerPositions; track position) {
      <map-advanced-marker
        #marker="mapAdvancedMarker"
        [position]="position"
        (mapClick)="openInfoWindow(marker)" />
    }
    <map-info-window>Info Window content</map-info-window>
</google-map>
```

---