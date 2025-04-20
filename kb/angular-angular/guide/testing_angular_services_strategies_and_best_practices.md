# Testing Angular Services: Strategies and Best Practices

**Summary:** This file covers topics related to "Testing Angular Services: Strategies and Best Practices". Key snippets include: Testing MasterService with TestBed and Spy, Configuring TestBed for ValueService Testing, Testing a Service with Dependencies Using Multiple Approaches, Testing HTTP Services with Spies, Testing Without beforeEach Using Setup Function....

---

## Testing MasterService with TestBed and Spy

**Description:** Test case showing how to use a spy to verify both the return value and that the spy method was called correctly.

```typescript
it('#getValue should return stubbed value from a spy', () => {
  const stubValue = 'stub value';
  valueServiceSpy.getValue.and.returnValue(stubValue);

  expect(masterService.getValue())
    .withContext('service returned stub value')
    .toBe(stubValue);
  expect(valueServiceSpy.getValue.calls.count())
    .withContext('spy method was called once')
    .toBe(1);
  expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
    .toBe(stubValue);
});
```

---

## Configuring TestBed for ValueService Testing

**Description:** Setting up TestBed to provide the ValueService for testing, demonstrating how to configure the testing module in the beforeEach function.

```typescript
let valueService: ValueService;

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [ValueService] });
  valueService = TestBed.inject(ValueService);
});
```

---

## Testing a Service with Dependencies Using Multiple Approaches

**Description:** Multiple unit test strategies for MasterService, showing how to test with an actual dependency, a spy, a dummy value, and a fake object implementation.

```typescript
describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fakeService', () => {
    masterService = new MasterService({ getValue: () => 'fake value' } as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getValue']);

    // set the spy to return a value
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });
});
```

---

## Testing HTTP Services with Spies

**Description:** Testing a service that makes HTTP calls by using spies on the HttpClient, showing how to test success and error cases for Observable-returning methods.

```typescript
let httpClientSpy: jasmine.SpyObj<HttpClient>;
let heroService: HeroService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  heroService = new HeroService(httpClientSpy);
});

it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
  const expectedHeroes: Hero[] =
    [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

  httpClientSpy.get.and.returnValue(of(expectedHeroes));

  heroService.getHeroes().subscribe({
    next: heroes => {
      expect(heroes)
        .withContext('expected heroes')
        .toEqual(expectedHeroes);
      done();
    },
    error: done.fail
  });
  expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
});

it('should return an error when the server returns a 404', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.get.and.returnValue(throwError(() => errorResponse));

  heroService.getHeroes().subscribe({
    next: heroes => done.fail('expected an error, not heroes'),
    error: error => {
      expect(error.message).toContain('test 404 error');
      done();
    }
  });
});
```

---

## Testing Without beforeEach Using Setup Function

**Description:** Test case that uses a setup function instead of beforeEach, showing a more explicit and self-contained approach to test organization.

```typescript
it('#getValue should return stubbed value from a spy', () => {
  const { masterService, stubValue, valueServiceSpy } = setup();
  expect(masterService.getValue())
    .withContext('service returned stub value')
    .toBe(stubValue);
  expect(valueServiceSpy.getValue.calls.count())
    .withContext('spy method was called once')
    .toBe(1);
  expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
    .toBe(stubValue);
});
```

---

## Implementing a Service with Dependencies in Angular

**Description:** Definition of MasterService that depends on the ValueService, demonstrating how to implement a service that delegates to an injected dependency.

```typescript
@Injectable()
export class MasterService {
  constructor(private valueService: ValueService) { }
  getValue() { return this.valueService.getValue(); }
}
```

---