# MapDirectionsRenderer in Angular Google Maps

**Summary:** This file covers topics related to "MapDirectionsRenderer in Angular Google Maps". Key snippets include: Defining MapDirectionsResponse Interface in TypeScript, Rendering Directions in Google Maps with Angular Template.

---

## Defining MapDirectionsResponse Interface in TypeScript

**Description:** Interface definition for MapDirectionsResponse that represents the response from the MapDirectionsService's route method. It contains the status of the directions request and the optional result with the directions data.

```typescript
export interface MapDirectionsResponse {
  status: google.maps.DirectionsStatus;
  result?: google.maps.DirectionsResult;
}
```

---

## Rendering Directions in Google Maps with Angular Template

**Description:** HTML template that displays a Google Map and conditionally renders directions using the MapDirectionsRenderer component. It uses the async pipe to subscribe to the directions results observable.

```html
<!-- google-maps-demo.component.html -->
<google-map height="400px" width="750px" [center]="center" [zoom]="zoom">
  @if (directionsResults$ | async; as directionsResults) {
    <map-directions-renderer [directions]="directionsResults" />
  }
</google-map>
```

---