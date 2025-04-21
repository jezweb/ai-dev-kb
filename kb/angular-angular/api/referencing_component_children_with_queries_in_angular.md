# Referencing Component Children with Queries in Angular

**Summary:** This file covers topics related to "Referencing Component Children with Queries in Angular". Key snippets include: Implementing View Children Query in Angular Component, Querying for a Single Content Child with @ContentChild in Angular, Using Template Reference Variable in View Query, Using Required Queries in Angular Component, Querying for a Single Child Component with @ViewChild in Angular....

---

## Implementing View Children Query in Angular Component

**Description:** Shows how to use the viewChildren function to query for multiple child components in the component's view and map their properties in a computed property.

```angular-ts
@Component({
  selector: 'custom-card-action',
  /*...*/
})
export class CustomCardAction {
  text: string;
}

@Component({
  selector: 'custom-card',
  template: `
    <custom-card-action>Save</custom-card-action>
    <custom-card-action>Cancel</custom-card-action>
  `,
})
export class CustomCard {
  actions = viewChildren(CustomCardAction);
  actionsTexts = computed(() => this.actions().map(action => action.text);
}
```

---

## Querying for a Single Content Child with @ContentChild in Angular

**Description:** This snippet illustrates how to use the @ContentChild decorator to query for a single content child in an Angular component. It shows how to access the queried content in the ngAfterContentInit lifecycle hook.

```angular-ts
@Component({
  selector: 'custom-toggle',
  /*...*/
})
export class CustomToggle {
  text: string;
}

@Component({
  selector: 'custom-expando',
  /*...*/
})
export class CustomExpando {
  @ContentChild(CustomToggle) toggle: CustomToggle;

  ngAfterContentInit() {
    console.log(this.toggle.text);
  }
}

@Component({
  selector: 'user-profile',
  template: `
    <custom-expando>
      <custom-toggle>Show</custom-toggle>
    </custom-expando>
  `
})
export class UserProfile { }
```

---

## Using Template Reference Variable in View Query

**Description:** Shows how to use a string locator corresponding to a template reference variable in a viewChild query to retrieve an ElementRef.

```angular-ts
@Component({
  /*...*/
  template: `
    <button #save>Save</button>
    <button #cancel>Cancel</button>
  `
})
export class ActionBar {
  saveButton = viewChild<ElementRef<HTMLButtonElement>>('save');
}
```

---

## Using Required Queries in Angular Component

**Description:** Demonstrates how to use required queries for both viewChild and contentChild to enforce the presence of specific child components.

```angular-ts
@Component({/* ... */})
export class CustomCard {
  header = viewChild.required(CustomCardHeader);
  body = contentChild.required(CustomCardBody);
}
```

---

## Querying for a Single Child Component with @ViewChild in Angular

**Description:** This snippet demonstrates how to use the @ViewChild decorator to query for a single child component in an Angular application. It shows how to access the queried component in the ngAfterViewInit lifecycle hook.

```angular-ts
@Component({
  selector: 'custom-card-header',
  /*...*/
})
export class CustomCardHeader {
  text: string;
}

@Component({
  selector: 'custom-card',
  template: '<custom-card-header>Visit sunny California!</custom-card-header>',
})
export class CustomCard {
  @ViewChild(CustomCardHeader) header: CustomCardHeader;

  ngAfterViewInit() {
    console.log(this.header.text);
  }
}
```

---

## Implementing View Child Query in Angular Component

**Description:** Demonstrates how to use the viewChild function to query for a single child component in the component's view and use the result in a computed property.

```angular-ts
@Component({
  selector: 'custom-card-header',
  /*...*/
})
export class CustomCardHeader {
  text: string;
}

@Component({
  selector: 'custom-card',
  template: '<custom-card-header>Visit sunny California!</custom-card-header>',
})
export class CustomCard {
  header = viewChild(CustomCardHeader);
  headerText = computed(() => this.header()?.text);
}
```

---

## Querying for Multiple Child Components with @ViewChildren in Angular

**Description:** This example shows how to use the @ViewChildren decorator to query for multiple child components in an Angular application. It demonstrates how to iterate over the QueryList of results in the ngAfterViewInit lifecycle hook.

```angular-ts
@Component({
  selector: 'custom-card-action',
  /*...*/
})
export class CustomCardAction {
  text: string;
}

@Component({
  selector: 'custom-card',
  template: `
    <custom-card-action>Save</custom-card-action>
    <custom-card-action>Cancel</custom-card-action>
  `,
})
export class CustomCard {
  @ViewChildren(CustomCardAction) actions: QueryList<CustomCardAction>;

  ngAfterViewInit() {
    this.actions.forEach(action => {
      console.log(action.text);
    });
  }
}
```

---

## Using Static Query Option with @ViewChild in Angular

**Description:** This snippet shows how to use the static option with @ViewChild decorator to make the query result available earlier in the component lifecycle. It demonstrates accessing the query result in the ngOnInit hook.

```angular-ts
@Component({
  selector: 'custom-card',
  template: '<custom-card-header>Visit sunny California!</custom-card-header>',
})
export class CustomCard {
  @ViewChild(CustomCardHeader, {static: true}) header: CustomCardHeader;

  ngOnInit() {
    console.log(this.header.text);
  }
}
```

---

## Querying for Multiple Content Children with @ContentChildren in Angular

**Description:** This example demonstrates how to use the @ContentChildren decorator to query for multiple content children in an Angular component. It shows how to iterate over the QueryList of results in the ngAfterContentInit lifecycle hook.

```angular-ts
@Component({
  selector: 'custom-menu-item',
  /*...*/
})
export class CustomMenuItem {
  text: string;
}

@Component({
  selector: 'custom-menu',
  /*...*/
})
export class CustomMenu {
  @ContentChildren(CustomMenuItem) items: QueryList<CustomMenuItem>;

  ngAfterContentInit() {
    this.items.forEach(item => {
      console.log(item.text);
    });
  }
}

@Component({
  selector: 'user-profile',
  template: `
    <custom-menu>
      <custom-menu-item>Cheese</custom-menu-item>
      <custom-menu-item>Tomato</custom-menu-item>
    </custom-menu>
  `
})
export class UserProfile { }
```

---