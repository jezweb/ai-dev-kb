# MapKmlLayer Component for Google Maps in Angular

**Summary:** This file covers topics related to "MapKmlLayer Component for Google Maps in Angular". Key snippets include: Rendering Google Map with KML Layer in Angular Template, Implementing MapKmlLayer in Angular Component.

---

## Rendering Google Map with KML Layer in Angular Template

**Description:** This HTML template demonstrates how to use the google-map component with a map-kml-layer child component. It sets the map's height, width, center, and zoom, and binds the KML layer URL.

```html
<!-- google-maps-demo.component.html -->
<google-map height="400px" width="750px" [center]="center" [zoom]="zoom">
  <map-kml-layer [url]="kmlUrl" />
</google-map>
```

---

## Implementing MapKmlLayer in Angular Component

**Description:** This TypeScript code defines an Angular component that uses GoogleMap and MapKmlLayer. It sets up a map with a center point, zoom level, and a KML layer URL.

```typescript
// google-maps-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap, MapKmlLayer} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap, MapKmlLayer],
})
export class GoogleMapDemo {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  kmlUrl = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
}
```

---