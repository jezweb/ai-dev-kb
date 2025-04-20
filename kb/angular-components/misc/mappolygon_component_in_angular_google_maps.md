# MapPolygon Component in Angular Google Maps

**Summary:** This file covers topics related to "MapPolygon Component in Angular Google Maps". Key snippets include: Implementing MapPolygon in Angular TypeScript Component.

---

## Implementing MapPolygon in Angular TypeScript Component

**Description:** This snippet demonstrates how to set up a component that uses the MapPolygon and GoogleMap components from @angular/google-maps. It defines the center coordinates, zoom level, and vertices for the polygon.

```typescript
// google-maps-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap, MapPolygon} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap, MapPolygon],
})
export class GoogleMapDemo {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  vertices: google.maps.LatLngLiteral[] = [
    {lat: 13, lng: 13},
    {lat: -13, lng: 0},
    {lat: 13, lng: -13},
  ];
}
```

---