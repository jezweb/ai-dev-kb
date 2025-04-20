# GoogleMap Component for Angular

**Summary:** This file covers topics related to "GoogleMap Component for Angular". Key snippets include: Implementing GoogleMap Component in Angular TypeScript.

---

## Implementing GoogleMap Component in Angular TypeScript

**Description:** This snippet demonstrates how to implement a GoogleMap component in an Angular application. It shows the setup of the component, including center and zoom configurations, and methods for handling map events like clicks and mouse movements.

```typescript
// google-maps-demo.component.ts
import {Component} from '@angular/core';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
  imports: [GoogleMap],
})
export class GoogleMapDemo {

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral;

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
}
```

---