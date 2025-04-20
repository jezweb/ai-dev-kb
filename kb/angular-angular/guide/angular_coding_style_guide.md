# Angular Coding Style Guide

**Summary:** This file covers topics related to "Angular Coding Style Guide". Key snippets include: Demonstrating Bad Practices in Angular Component Structure, Implementing a Filter Text Service in Angular, Implementing OnInit Lifecycle Hook (Correct), Creating Singleton Services in Angular, Using HostListener and HostBinding in Angular Directives....

---

## Demonstrating Bad Practices in Angular Component Structure

**Description:** This example demonstrates what to avoid by combining multiple responsibilities in a single file: defining a component, bootstrapping the app, defining a model, and loading data all in one file.

```typescript
/* tslint:disable:no-unused-variable */
// #docregion
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* tslint:disable:class-name no-unused-variable */
interface hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    `,
  styles: []
})
class AppComponent {
  title = 'Tour of Heroes';

  // This is a bad way to create a service
  heroes: any[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ];
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

```

---

## Implementing a Filter Text Service in Angular

**Description:** A stateless service that provides text filtering functionality. This service is provided in the SharedModule and demonstrates how to create utility services for shared functionality across components.

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class FilterTextService {
  constructor() {
    console.log('Created an instance of FilterTextService');
  }

  filter(data: string, props: Array<string>, originalList: Array<any>) {
    return originalList.filter(item => {
      let match = false;
      for (const prop of props) {
        if (item[prop].toString().toLowerCase().indexOf(data.toLowerCase()) > -1) {
          match = true;
          break;
        }
      }
      return match;
    });
  }
}

```

---

## Implementing OnInit Lifecycle Hook (Correct)

**Description:** This snippet shows the correct implementation of the OnInit lifecycle hook in an Angular component. By implementing the interface, TypeScript can catch spelling and syntax errors.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html'
})
export class HeroButtonComponent implements OnInit {
  ngOnInit() {
    console.log('The component is initialized');
  }
}
```

---

## Creating Singleton Services in Angular

**Description:** Shows how to create and use singleton services in Angular for sharing data and functionality across a feature area or an entire app. The example demonstrates a hero service that manages a collection of heroes.

```TypeScript
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [];

  constructor(private backend: BackendService) {}

  getHeroes() {
    this.heroes = this.backend.getAll(Hero);
    return this.heroes;
  }
}
```

---

## Using HostListener and HostBinding in Angular Directives

**Description:** Demonstrates the use of @HostListener and @HostBinding decorators in Angular directives as an alternative to the host metadata property. This approach allows for easier modification of properties and methods in a single place.

```TypeScript
@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {
  @HostBinding('class.valid') isValid = false;

  @HostListener('blur') onBlur() {
    this.validate(this.el.nativeElement.value);
  }

  private validate(value: string) {
    this.isValid = value.length > 3;
  }

  constructor(private el: ElementRef) {}
}
```

---

## Providing Services in Angular

**Description:** Demonstrates how to provide a service at the application root level using the @Injectable decorator. This approach allows for better tree-shaking and optimization in production builds.

```TypeScript
@Injectable({
  providedIn: 'root'
})
export class Service {
}
```

---

## Defining Application Module with Single Responsibility

**Description:** This app.module.ts file demonstrates proper module setup by focusing solely on module configuration and imports, separating it from component implementations.

```typescript
// #docregion
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeroesComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

---

## Creating an InitCaps Pipe in Angular

**Description:** A custom pipe that transforms text by capitalizing the first letter of each word. This is part of a shared module and demonstrates how to implement and export utility pipes for use across an application.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform(value: string) {
    return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, m => m.toUpperCase());
  }
}

```

---

## Using Attribute Directives in Angular

**Description:** Shows how to use attribute directives to enhance elements with presentation logic without a template. This example demonstrates a highlight directive applied to an element.

```TypeScript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}
}
```

---

## Component Selector Naming Convention

**Description:** Demonstrates proper kebab-case naming for component selectors following Custom Elements specification.

```typescript
@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform { }
```

---