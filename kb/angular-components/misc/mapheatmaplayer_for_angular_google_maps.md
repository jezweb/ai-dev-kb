# MapHeatmapLayer for Angular Google Maps

**Summary:** This file covers topics related to "MapHeatmapLayer for Angular Google Maps". Key snippets include: Implementing a Heatmap Layer in Angular Google Maps Component, Rendering MapHeatmapLayer in HTML Template.

---

## Implementing a Heatmap Layer in Angular Google Maps Component

**Description:** This TypeScript component demonstrates how to set up a Google Map with a heatmap layer. It configures the map center coordinates, zoom level, heatmap options (radius), and provides sample location data points to visualize on the heatmap.

```typescript
// google-map-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap, MapHeatmapLayer} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap, MapHeatmapLayer],
})
export class GoogleMapDemo {
  center = {lat: 37.774546, lng: -122.433523};
  zoom = 12;
  heatmapOptions = {radius: 5};
  heatmapData = [
    {lat: 37.782, lng: -122.447},
    {lat: 37.782, lng: -122.445},
    {lat: 37.782, lng: -122.443},
    {lat: 37.782, lng: -122.441},
    {lat: 37.782, lng: -122.439},
    {lat: 37.782, lng: -122.437},
    {lat: 37.782, lng: -122.435},
    {lat: 37.785, lng: -122.447},
    {lat: 37.785, lng: -122.445},
    {lat: 37.785, lng: -122.443},
    {lat: 37.785, lng: -122.441},
    {lat: 37.785, lng: -122.439},
    {lat: 37.785, lng: -122.437},
    {lat: 37.785, lng: -122.435}
  ];
}
```

---

## Rendering MapHeatmapLayer in HTML Template

**Description:** This HTML template shows how to implement a Google Map with a heatmap layer. The template creates a map with specified height, width, center position, and zoom level, then adds a MapHeatmapLayer component that binds to the data and options defined in the TypeScript component.

```html
<!-- google-map-demo.component.html -->
<google-map height="400px" width="750px" [center]="center" [zoom]="zoom">
  <map-heatmap-layer [data]="heatmapData" [options]="heatmapOptions" />
</google-map>
```

---