# Angular Google Maps MapAdvancedMarker Component Documentation

**Summary:** This file covers topics related to "Angular Google Maps MapAdvancedMarker Component Documentation". Key snippets include: Implementing MapAdvancedMarker in Angular TypeScript Component.

---

## Implementing MapAdvancedMarker in Angular TypeScript Component

**Description:** This TypeScript snippet demonstrates how to implement a Google Map with advanced markers in an Angular component. It shows initialization of map properties, marker options, and a method to add markers on click events.

```typescript
// google-map-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap, MapAdvancedMarker} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap, MapAdvancedMarker],
})
export class GoogleMapDemo {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  advancedMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false};
  advancedMarkerPositions: google.maps.LatLngLiteral[] = [];

  addAdvancedMarker(event: google.maps.MapMouseEvent) {
    this.advancedMarkerPositions.push(event.latLng.toJSON());
  }
}
```

---