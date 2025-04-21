# Angular Component Testing Guide

**Summary:** This file covers topics related to "Angular Component Testing Guide". Key snippets include: Using Jasmine Clock with fakeAsync in Angular Tests, Simulating User Input in Angular Component Tests, Testing Asynchronous Operations with fakeAsync and tick, Testing Component with Host Setup - TypeScript, Defining Hero Detail Component Template in Angular....

---

## Using Jasmine Clock with fakeAsync in Angular Tests

**Description:** This snippet demonstrates how to use Jasmine's clock feature in conjunction with fakeAsync for testing time-dependent code in Angular components.

```typescript
describe('use jasmine.clock()', () => {
  it('should auto enter fakeAsync', () => {
    jasmine.clock().install();
    let called = false;
    setTimeout(() => {
      called = true;
    }, 100);
    jasmine.clock().tick(100);
    expect(called).toBe(true);
    jasmine.clock().uninstall();
  });

  it('should error if nested', () => {
    expect(() => {
      fakeAsync(() => {
        jasmine.clock().install();
      })();
    }).toThrowError(/cannot be nested/);
  });
});
```

---

## Simulating User Input in Angular Component Tests

**Description:** This test demonstrates how to simulate user input by setting an input element's value and dispatching an input event.

```typescript
it('should convert hero name to Title Case', () => {
  const hostElement = fixture.nativeElement;
  const nameInput: HTMLInputElement = hostElement.querySelector('input');
  const nameDisplay: HTMLElement = hostElement.querySelector('span');

  nameInput.value = 'quick BROWN  fOx';
  nameInput.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
});
```

---

## Testing Asynchronous Operations with fakeAsync and tick

**Description:** This snippet shows how to use fakeAsync and tick to test asynchronous operations. It demonstrates simulating the passage of time and checking the results of setTimeout calls.

```typescript
it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
  let called = false;
  setTimeout(() => {
    called = true;
  }, 100);
  tick(100);
  expect(called).toBe(true);
}));
```

---

## Testing Component with Host Setup - TypeScript

**Description:** Configuration code for setting up a test host component to test DashboardHeroComponent in a more realistic scenario with proper data binding.

```typescript
this.testHost = TestBed.createComponent(TestHostComponent);
this.heroEl = fixture.nativeElement.querySelector('.hero');
this.fixture.detectChanges();
```

---

## Defining Hero Detail Component Template in Angular

**Description:** This HTML snippet shows the template for a HeroDetailComponent in Angular, which includes a title, two hero fields, and two buttons.

```HTML
<div *ngIf="hero">
  <h2><span>{{hero.name | titlecase}}</span> Details</h2>
  <div>
    <span>id: </span>{{hero.id}}
  </div>
  <div>
    <label for="name">name:
      <input id="name" [(ngModel)]="hero.name" placeholder="name"/>
    </label>
  </div>
  <button type="button" (click)="save()">Save</button>
  <button type="button" (click)="cancel()">Cancel</button>
</div>
```

---

## Implementing getQuote Method in Angular Component

**Description:** This snippet demonstrates the implementation of the getQuote method in the TwainComponent. It shows how the component interacts with an injected TwainService to fetch quotes asynchronously.

```typescript
getQuote() {
  this.errorMessage = '';
  this.quote = this.twainService.getQuote().pipe(
    startWith('...'),
    catchError((err: any) => {
      // Wait a turn because componentDidCatch runs after the error is caught in
      // component and the error message would be wiped out by this timer otherwise.
      setTimeout(() => this.errorMessage = err.message || err.toString());
      return of('...');
    })
  );
}
```

---

## Setting up TestBed for Angular Component Testing

**Description:** This snippet demonstrates how to set up TestBed for testing an Angular component with dependencies. It shows the complete beforeEach() function using TestBed.inject() to provide necessary services.

```typescript
beforeEach(() => {
  userServiceSpy = jasmine.createSpyObj('UserService', ['getLoggedInUser']);
  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [WelcomeComponent],
    providers: [{ provide: UserService, useValue: userServiceSpy }],
  });
  fixture = TestBed.createComponent(WelcomeComponent);
  component = fixture.componentInstance;
  userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
});
```

---

## Consolidating Angular Test Setup with Async/Await

**Description:** This TypeScript snippet demonstrates how to consolidate the asynchronous and synchronous setup steps for an Angular component test into a single async function using await.

```TypeScript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ BannerComponent ],
  }).compileComponents();

  fixture = TestBed.createComponent(BannerComponent);
  component = fixture.componentInstance;
  h1 = fixture.nativeElement.querySelector('h1');
});
```

---

## Implementing Page Object for Angular Component Testing

**Description:** This TypeScript snippet defines a Page class that encapsulates the logic for accessing and manipulating the HeroDetailComponent's properties in tests.

```TypeScript
class Page {
  get buttons()  { return this.queryAll<HTMLButtonElement>('button'); }
  get saveBtn() { return this.buttons[0]; }
  get cancelBtn() { return this.buttons[1]; }
  get nameDisplay() { return this.query<HTMLElement>('span'); }
  get nameInput() { return this.query<HTMLInputElement>('input'); }

  gotoListSpy!: jasmine.Spy;
  navigateSpy!: jasmine.Spy;

  constructor(private fixture: ComponentFixture<HeroDetailComponent>) {
    // get the navigate spy from the injected router spy object
    const routerSpy = fixture.debugElement.injector.get(Router) as any;
    this.navigateSpy = routerSpy.navigate;

    // spy on component's `gotoList()` method
    const component = fixture.componentInstance;
    this.gotoListSpy = spyOn(component, 'gotoList');
  }

  //// query helpers ///
  private query<T>(selector: string): T {
    return this.fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return this.fixture.nativeElement.querySelectorAll(selector);
  }
}
```

---

## Configuring TestBed for Automatic Change Detection

**Description:** This code configures the TestBed to use automatic change detection by adding ComponentFixtureAutoDetect to the providers array.

```typescript
TestBed.configureTestingModule({
  declarations: [ BannerComponent ],
  providers: [
    { provide: ComponentFixtureAutoDetect, useValue: true }
  ]
});
```

---

## Implementing Async Data Helper for Testing

**Description:** Utility function that creates an async observable that emits data in the next JavaScript engine turn

```typescript
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
```

---

## Configuring Async Observable Test Setup in Angular

**Description:** Sets up async observable testing using fakeAsync and jasmine spies for getQuote method

```typescript
getQuote.and.returnValue(asyncData(testQuote));
```

---

## Configuring Synchronous Setup for Angular Component Test

**Description:** This TypeScript snippet shows the synchronous setup steps for an Angular component test, including creating the component and querying for elements to inspect.

```TypeScript
beforeEach(() => {
  fixture = TestBed.createComponent(BannerComponent);
  component = fixture.componentInstance;
  h1 = fixture.nativeElement.querySelector('h1');
});
```

---

## Testing Angular Component Router Links

**Description:** This code snippet contains tests that confirm that the router links in an Angular component are wired correctly to the routerLink directives.

```TypeScript
it('can get RouterLinks from template', () => {
  expect(page.navLinks.length).toBe(3, 'should have 3 routerLinks');
  expect(page.navLinks[0].routerLink.linkParams).toBe('/dashboard');
  expect(page.navLinks[1].routerLink.linkParams).toBe('/heroes');
  expect(page.navLinks[2].routerLink.linkParams).toBe('/about');
});

it('can click Heroes link in template', () => {
  const heroesLinkDe = page.navLinks[1];
  const heroesLink = heroesLinkDe.nativeElement;
  heroesLink.click();
  expect(heroesLinkDe.routerLink.navigatedTo).toBe('/heroes');
});
```

---

## Configuring Additional Macro Tasks for fakeAsync in Angular Tests

**Description:** This snippet demonstrates how to configure additional macro tasks to be supported in fakeAsync tests. It shows how to enable support for HTMLCanvasElement.toBlob() in Angular tests.

```typescript
beforeEach(() => {
  // Enable 'toBlob' as a macroTask
  (window as any)['__zone_symbol__FakeAsyncTestMacroTask'] = [
    {
      source: 'HTMLCanvasElement.toBlob',
      callbackArgs: [{size: 200}]
    }
  ];
});
```

---

## Testing Angular Component with Property Changes

**Description:** This test demonstrates changing a component's property and then triggering change detection to update the view.

```typescript
it('should display a different test title', () => {
  component.title = 'Test Title';
  fixture.detectChanges();
  expect(h1.textContent).toContain('Test Title');
});
```

---

## Testing Angular Component with Property Changes

**Description:** This test demonstrates changing a component's property and then triggering change detection to update the view.

```typescript
it('should display a different test title', () => {
  component.title = 'Test Title';
  fixture.detectChanges();
  expect(h1.textContent).toContain('Test Title');
});
```

---