# Adding Search Functionality to Angular App

**Summary:** This file covers topics related to "Adding Search Functionality to Angular App". Key snippets include: Adding Filtered Results Property in HomeComponent.

---

## Adding Filtered Results Property in HomeComponent

**Description:** Updates the HomeComponent class to include a new property 'filteredLocationList' for storing filtered housing locations. The constructor is also modified to initialize this property with all housing locations by default.

```typescript
filteredLocationList: HousingLocation[] = [];

constructor() {
  this.filteredLocationList = this.housingLocationList;
}
```

---