# Angular Custom Events with Outputs

**Summary:** This file covers topics related to "Angular Custom Events with Outputs". Key snippets include: Binding to Custom Events in Angular Templates, Customizing Output Event Names in Angular, Emitting Data with Angular Custom Events, Emitting Events from Angular Components, Defining Custom Events using output Function in Angular Components....

---

## Binding to Custom Events in Angular Templates

**Description:** Example of binding to a custom 'panelClosed' event in an Angular template using the event binding syntax with parentheses.

```angular-html
<expandable-panel (panelClosed)="savePanelState()" />
```

---

## Customizing Output Event Names in Angular

**Description:** Use the alias parameter in the output function to specify a different name for the event in templates. This allows internal property names to differ from the public event API.

```typescript
@Component({/*...*/})
export class CustomSlider {
  changed = output({alias: 'valueChanged'});
}
```

---

## Emitting Data with Angular Custom Events

**Description:** Examples of emitting different types of data with Angular custom events. Shows how to emit both primitive values and complex objects.

```typescript
// You can emit primitive values.
this.valueChanged.emit(7);

// You can emit custom event objects
this.thumbDropped.emit({
  pointerX: 123,
  pointerY: 456,
})
```

---

## Emitting Events from Angular Components

**Description:** Emit a custom event using the emit method on an OutputEmitterRef. This sends the event notification to any components listening to this output.

```typescript
  this.panelClosed.emit();
```

---

## Defining Custom Events using output Function in Angular Components

**Description:** Create a custom event named 'panelClosed' using the output function in an Angular component. This allows the component to emit events that parent components can listen to.

```typescript
@Component({/*...*/})
export class ExpandablePanel {
  panelClosed = output<void>();
}
```

---

## Binding to Aliased @Output Events in Angular Templates

**Description:** Example of binding to an event that uses an alias with the @Output decorator. The template uses the alias name instead of the property name.

```angular-html
<custom-slider (valueChanged)="saveVolume()" />
```

---

## Specifying Output Aliases in the @Component Decorator

**Description:** Define output aliases in the outputs array of the @Component decorator using a colon notation. This approach is useful for renaming inherited output properties.

```typescript
// `CustomSlider` inherits the `valueChanged` property from `BaseSlider`.
@Component({
  /*...*/
  outputs: ['valueChanged: volumeChanged'],
})
export class CustomSlider extends BaseSlider {}
```

---

## Manual Unsubscription from Angular Output Events

**Description:** Example of manually unsubscribing from an output event when needed. The subscribe method returns an OutputRefSubscription with an unsubscribe method for cleanup.

```typescript
const eventSubscription = someComponent.someEventProperty.subscribe(eventData => {
  console.log(eventData);
});

// ...

eventSubscription.unsubscribe();
```

---

## Manual Unsubscription from Angular Output Events

**Description:** Example of manually unsubscribing from an output event when needed. The subscribe method returns an OutputRefSubscription with an unsubscribe method for cleanup.

```typescript
const eventSubscription = someComponent.someEventProperty.subscribe(eventData => {
  console.log(eventData);
});

// ...

eventSubscription.unsubscribe();
```

---

## Accessing Event Data in Angular Templates

**Description:** Access event data in a template using the $event variable when listening to a custom event. This allows the template to receive data passed from the component's emit method.

```angular-html
<custom-slider (valueChanged)="logValue($event)" />
```

---

## Programmatically Subscribing to Angular Output Events

**Description:** Subscribe to component outputs programmatically when working with dynamically created components. Useful for handling events from components created through ViewContainerRef.

```typescript
const someComponentRef: ComponentRef<SomeComponent> = viewContainerRef.createComponent(/*...*/);

someComponentRef.instance.someEventProperty.subscribe(eventData => {
  console.log(eventData);
});
```

---