# Preparing Angular Components for Internationalization (i18n)

**Summary:** This file covers topics related to "Preparing Angular Components for Internationalization (i18n)". Key snippets include: Translating Inline Text without HTML Element using ng-container, Marking Text in Angular Component Code with $localize, Marking Element Attributes for Translation in Angular, Marking Static Text in Angular Component Template with i18n Attribute, Nesting Plural and Select Clauses in Angular HTML....

---

## Translating Inline Text without HTML Element using ng-container

**Description:** Demonstrates how to use ng-container to translate inline text without creating a new DOM element.

```html
<ng-container i18n>I don't output any element</ng-container>
```

---

## Marking Text in Angular Component Code with $localize

**Description:** Demonstrates how to use the $localize tagged message string to mark text in component code for translation, including examples with interpolation and conditional syntax.

```typescript
$localize`string_to_translate`;
$localize`:{i18n_metadata}:string_to_translate`;
$localize`string_to_translate ${variable_name}`;
$localize`string_to_translate ${variable_name}:placeholder_name:`;
return this.show ? $localize`Show Tabs` : $localize`Hide tabs`;
```

---

## Marking Element Attributes for Translation in Angular

**Description:** Shows how to mark element attributes for translation using the i18n- prefix. The example translates the title attribute of an image.

```html
<img [src]="logo" i18n-title title="Angular logo" />
```

---

## Marking Static Text in Angular Component Template with i18n Attribute

**Description:** Demonstrates how to use the i18n attribute to mark static text in an Angular component template for translation. The example shows a simple greeting message.

```html
<h1 i18n="An introduction header for this sample">Hello i18n!</h1>
```

---

## Nesting Plural and Select Clauses in Angular HTML

**Description:** Illustrates how to nest 'plural' and 'select' clauses in an ICU expression to handle complex internationalization scenarios in Angular templates.

```html
<span i18n>{gender, select, female {She} male {He} other {They}} updated the status {minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}</span>
```

---

## Using Select Clause for Gender in Angular HTML

**Description:** Demonstrates how to use the 'select' clause in an ICU expression to handle different gender values in an Angular template.

```html
<span i18n>The author is {gender, select, female {female} male {male} other {other}}</span>
```

---

## Marking Alternates with Select Clause in Angular HTML

**Description:** Shows the structure of using the 'select' clause in an ICU expression to handle alternate text based on string values in Angular templates.

```html
{ component_property, select, selection_categories }
```

---