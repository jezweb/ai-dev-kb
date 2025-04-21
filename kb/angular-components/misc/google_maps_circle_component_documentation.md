# Google Maps Circle Component Documentation

**Summary:** This file covers topics related to "Google Maps Circle Component Documentation". Key snippets include: MapCircle Template Implementation in Angular HTML.

---

## MapCircle Template Implementation in Angular HTML

**Description:** Shows the HTML template implementation of a Google Map with a MapCircle component. Demonstrates how to bind circle properties and set map dimensions.

```html
<!-- google-maps-demo.component.html -->
<google-map height="400px" width="750px" [center]="center" [zoom]="zoom">
  <map-circle [center]="circleCenter" [radius]="radius" />
</google-map>
```

---