# Common Routing Tasks in Angular

**Summary:** This file covers topics related to "Common Routing Tasks in Angular". Key snippets include: Implementing Nested Routes in Angular HTML Template, Accessing Route Parameters in Angular Component, Setting Page Titles in Angular Routes, Navigating with Parameters in Angular, Implementing Route Guards in Angular....

---

## Implementing Nested Routes in Angular HTML Template

**Description:** This snippet demonstrates how to set up nested routes in an Angular component's HTML template using router links and a router outlet.

```html
<h2>First Component</h2>

<nav>
  <ul>
    <li><a routerLink="child-a">Child A</a></li>
    <li><a routerLink="child-b">Child B</a></li>
  </ul>
</nav>

<router-outlet />
```

---

## Accessing Route Parameters in Angular Component

**Description:** This code shows how to access route parameters in an Angular component using ActivatedRoute and RxJS operators.

```typescript
heroes$: Observable<Hero[]>;
selectedId: number;
heroes = HEROES;

ngOnInit() {
  this.heroes$ = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = Number(params.get('id'));
      return this.service.getHeroes();
    })
  );
}
```

---

## Setting Page Titles in Angular Routes

**Description:** This snippet demonstrates how to set page titles for Angular routes using the title property in the route configuration.

```typescript
const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,  // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a',  // child route path
        title: resolvedChildATitle,
        component: ChildAComponent,  // child route component that the router renders
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent,  // another child route component that the router renders
      },
    ],
  },
];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
```

---

## Navigating with Parameters in Angular

**Description:** This snippet demonstrates how to navigate to a route with parameters in Angular using the Router's navigate method.

```typescript
private readonly route = inject(ActivatedRoute);
private readonly router = inject(Router);

hero$: Observable<Hero>;

ngOnInit() {
  const heroId = this.route.snapshot.paramMap.get('id');
  this.hero$ = this.service.getHero(heroId);
}

gotoItems(hero: Hero) {
  const heroId = hero ? hero.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that item.
  this.router.navigate(['/heroes', { id: heroId }]);
}
```

---

## Implementing Route Guards in Angular

**Description:** This snippet shows how to create and use route guards in Angular to prevent unauthorized access to routes.

```typescript
export const yourGuardFunction: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // your  logic goes here
}
```

---

## Setting Up Redirects in Angular Router

**Description:** Configures routes with a redirect to default to the first-component route when the path is empty.

```typescript
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
```

---

## Enabling Component Input Binding for Angular Router

**Description:** Adds withComponentInputBinding feature to provideRouter method for passing information from routes to components.

```typescript
providers: [
  provideRouter(appRoutes, withComponentInputBinding()),
]
```

---

## Applying Route Guards in Angular Route Configuration

**Description:** This code demonstrates how to apply route guards in the Angular route configuration to protect specific routes.

```typescript
{
  path: '/your-path',
  component: YourComponent,
  canActivate: [yourGuardFunction],
}
```

---

## Implementing Router Links and Outlet in Angular Template

**Description:** Adds router links to navigate between components and includes a router outlet to display the selected component.

```html
<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet />
```

---

## RouterLink with Route Parameters

**Description:** Shows how to include required route parameters in the router link array.

```angular-html
<a [routerLink]="['/hero', hero.id]">
  <span class="badge">{{ hero.id }}</span>{{ hero.name }}
</a>
```

---

## Configuring Nested Routes in Angular TypeScript

**Description:** This code snippet shows how to configure nested routes in Angular using the Routes array, including parent and child routes.

```typescript
const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
];
```

---