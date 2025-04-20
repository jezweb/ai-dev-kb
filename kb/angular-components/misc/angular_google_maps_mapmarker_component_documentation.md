# Angular Google Maps MapMarker Component Documentation

**Summary:** This file covers topics related to "Angular Google Maps MapMarker Component Documentation". Key snippets include: Implementing MapMarker Component in TypeScript.

---

## Implementing MapMarker Component in TypeScript

**Description:** This snippet demonstrates how to implement a component that uses GoogleMap and MapMarker components. It sets up a map with a center position, zoom level, and functionality to add markers when clicking on the map.

```typescript
// google-map-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap, MapMarker],
})
export class GoogleMapDemo {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }
}
```

---