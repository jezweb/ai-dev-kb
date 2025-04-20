# Integrating Details Page with Routing in Angular

**Summary:** This file covers topics related to "Integrating Details Page with Routing in Angular". Key snippets include: Adding RouterLink Directive in Angular Component Template, Implementing DetailsComponent Class in Angular, Defining Dynamic Route in Angular, Updating DetailsComponent Template in Angular, Importing RouterLink and RouterOutlet in Angular Component.

---

## Adding RouterLink Directive in Angular Component Template

**Description:** Shows how to use the routerLink directive in an Angular component template for dynamic navigation to the details page.

```typescript
<a [routerLink]="['/details', housingLocation.id]">Learn More</a>
```

---

## Implementing DetailsComponent Class in Angular

**Description:** Demonstrates how to implement the DetailsComponent class to retrieve and display housing location details based on route parameters.

```typescript
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
```

---

## Defining Dynamic Route in Angular

**Description:** Demonstrates how to define a route with a dynamic segment for the details page in Angular.

```javascript
'details/:id'
```

---

## Updating DetailsComponent Template in Angular

**Description:** Shows how to update the DetailsComponent template to display housing location details using optional chaining.

```typescript
template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}">
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
  </article>
`,
```

---

## Importing RouterLink and RouterOutlet in Angular Component

**Description:** Demonstrates how to import RouterLink and RouterOutlet from @angular/router for use in an Angular component.

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';
```

---