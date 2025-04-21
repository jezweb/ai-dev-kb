# Angular Google Maps Marker Clusterer Component

**Summary:** This file covers topics related to "Angular Google Maps Marker Clusterer Component". Key snippets include: Implementing a Google Map with Marker Clustering in TypeScript.

---

## Implementing a Google Map with Marker Clustering in TypeScript

**Description:** TypeScript component that implements a Google Map with marker clustering functionality. This component allows users to add markers by clicking on the map, which will then be automatically clustered by the MapMarkerClusterer.

```typescript
// google-map-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap, MapMarkerClusterer, MapAdvancedMarker} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap, MapMarkerClusterer, MapAdvancedMarker],
})
export class GoogleMapDemo {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }
}
```

---