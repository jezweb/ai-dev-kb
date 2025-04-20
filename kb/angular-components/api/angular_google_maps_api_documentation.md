# Angular Google Maps API Documentation

**Summary:** This file covers topics related to "Angular Google Maps API Documentation". Key snippets include: MapMarker Class Definition in TypeScript, Defining Google Map Component in TypeScript for Angular.

---

## MapMarker Class Definition in TypeScript

**Description:** Definition of the MapMarker class which wraps the Google Maps Marker API for Angular. It provides properties for marker customization, event observables, and lifecycle methods for initialization and cleanup.

```typescript
readonly mapDragend: Observable<google.maps.MapMouseEvent>;
readonly mapDragstart: Observable<google.maps.MapMouseEvent>;
readonly mapMousedown: Observable<google.maps.MapMouseEvent>;
readonly mapMouseout: Observable<google.maps.MapMouseEvent>;
readonly mapMouseover: Observable<google.maps.MapMouseEvent>;
readonly mapMouseup: Observable<google.maps.MapMouseEvent>;
readonly mapRightclick: Observable<google.maps.MapMouseEvent>;
marker?: google.maps.Marker;
readonly markerInitialized: EventEmitter<google.maps.Marker>;
// (undocumented)
ngOnChanges(changes: SimpleChanges): void;
// (undocumented)
ngOnDestroy(): void;
// (undocumented)
ngOnInit(): void;
set options(options: google.maps.MarkerOptions);
set position(position: google.maps.LatLngLiteral | google.maps.LatLng);
readonly positionChanged: Observable<void>;
_resolveMarker(): Promise<google.maps.Marker>;
readonly shapeChanged: Observable<void>;
set title(title: string);
readonly titleChanged: Observable<void>;
set visible(value: boolean);
readonly visibleChanged: Observable<void>;
readonly zindexChanged: Observable<void>;
// (undocumented)
static ɵdir: i0.ɵɵDirectiveDeclaration<MapMarker, "map-marker", ["mapMarker"], { "title": { "alias": "title"; "required": false; }; "position": { "alias": "position"; "required": false; }; "label": { "alias": "label"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "options": { "alias": "options"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "animationChanged": "animationChanged"; "mapClick": "mapClick"; "clickableChanged": "clickableChanged"; "cursorChanged": "cursorChanged"; "mapDblclick": "mapDblclick"; "mapDrag": "mapDrag"; "mapDragend": "mapDragend"; "draggableChanged": "draggableChanged"; "mapDragstart": "mapDragstart"; "flatChanged": "flatChanged"; "iconChanged": "iconChanged"; "mapMousedown": "mapMousedown"; "mapMouseout": "mapMouseout"; "mapMouseover": "mapMouseover"; "mapMouseup": "mapMouseup"; "positionChanged": "positionChanged"; "mapRightclick": "mapRightclick"; "shapeChanged": "shapeChanged"; "titleChanged": "titleChanged"; "visibleChanged": "visibleChanged"; "zindexChanged": "zindexChanged"; "markerInitialized": "markerInitialized"; }, never, never, true, never>;
// (undocumented)
static ɵfac: i0.ɵɵFactoryDeclaration<MapMarker, never>;
```

---

## Defining Google Map Component in TypeScript for Angular

**Description:** This snippet defines the GoogleMap class, which represents the main Google Maps component in Angular. It includes properties for map options, methods for map manipulation, and Observable events for various map interactions.

```typescript
export class GoogleMap implements OnChanges, OnInit, OnDestroy {
    // (undocumented)
    set options(options: google.maps.MapOptions);
    get overlayMapTypes(): google.maps.MVCArray<google.maps.MapType | null>;
    panBy(x: number, y: number): void;
    panTo(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void;
    panToBounds(latLngBounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding): void;
    readonly projectionChanged: Observable<void>;
    _resolveMap(): Promise<google.maps.Map>;
    readonly tilesloaded: Observable<void>;
    readonly tiltChanged: Observable<void>;
    width: string | number | null;
    // (undocumented)
    set zoom(zoom: number);
    readonly zoomChanged: Observable<void>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<GoogleMap, "google-map", ["googleMap"], { "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; "mapId": { "alias": "mapId"; "required": false; }; "mapTypeId": { "alias": "mapTypeId"; "required": false; }; "center": { "alias": "center"; "required": false; }; "zoom": { "alias": "zoom"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "mapInitialized": "mapInitialized"; "authFailure": "authFailure"; "boundsChanged": "boundsChanged"; "centerChanged": "centerChanged"; "mapClick": "mapClick"; "mapDblclick": "mapDblclick"; "mapDrag": "mapDrag"; "mapDragend": "mapDragend"; "mapDragstart": "mapDragstart"; "headingChanged": "headingChanged"; "idle": "idle"; "maptypeidChanged": "maptypeidChanged"; "mapMousemove": "mapMousemove"; "mapMouseout": "mapMouseout"; "mapMouseover": "mapMouseover"; "projectionChanged": "projectionChanged"; "mapRightclick": "mapRightclick"; "tilesloaded": "tilesloaded"; "tiltChanged": "tiltChanged"; "zoomChanged": "zoomChanged"; }, never, ["*"], true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<GoogleMap, never>;
}
```

---