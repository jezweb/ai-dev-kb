# Angular Internationalization Example Application

**Summary:** This file covers topics related to "Angular Internationalization Example Application". Key snippets include: Defining Angular Component Template with i18n Attributes.

---

## Defining Angular Component Template with i18n Attributes

**Description:** An Angular component template containing text with i18n directives for internationalization. It includes examples of basic text translation, translation with meaning and description, plural forms, and nested expressions.

```html
<h1 i18n="site header|An introduction header for this sample@@introductionHeader">Hello i18n!</h1>

<ng-container i18n>I don't output any element</ng-container>

<br>

<ng-container i18n>{{ placeholder }}</ng-container>

<br>

<button type="button" (click)="inc(1)">+</button> <button type="button" (click)="inc(-1)">-</button>

<span i18n>{minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}</span>

<br>

<span i18n>Updated: {minutes, number}</span>

<br />

<span i18n>The author is {gender, select, male {male} female {female} other {other}}</span>

<br />

<span i18n example="User welcome">Hello {{ placeholder }}</span>
```

---