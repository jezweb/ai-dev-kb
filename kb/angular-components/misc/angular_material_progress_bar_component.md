# Angular Material Progress Bar Component

**Summary:** This file covers topics related to "Angular Material Progress Bar Component". Key snippets include: Implementing Indeterminate Progress Bar in Angular Material, Implementing Query Progress Bar in Angular Material, Implementing Buffer Progress Bar in Angular Material, Implementing Determinate Progress Bar in Angular Material.

---

## Implementing Indeterminate Progress Bar in Angular Material

**Description:** This snippet shows how to use an indeterminate progress bar in Angular Material. The indeterminate mode is suitable for operations where the user needs to wait without indicating a specific duration. In this mode, the 'value' property is ignored.

```html
<!-- example(progress-bar-indeterminate) -->
```

---

## Implementing Query Progress Bar in Angular Material

**Description:** This snippet illustrates the query mode of the progress bar in Angular Material. It's used to indicate pre-loading before the actual loading starts. The progress bar renders as an inverted 'indeterminate' bar, and the 'value' property is ignored in this mode.

```html
<!-- example(progress-bar-query) -->
```

---

## Implementing Buffer Progress Bar in Angular Material

**Description:** This example demonstrates the buffer mode of the progress bar in Angular Material. It's used to indicate activity or loading from the server. The 'value' property determines the progress of the primary bar, while 'bufferValue' shows additional buffering progress.

```html
<!-- example(progress-bar-buffer) -->
```

---

## Implementing Determinate Progress Bar in Angular Material

**Description:** This snippet demonstrates the usage of a determinate progress bar in Angular Material. The determinate mode is used when the percentage of the operation complete is known, and progress is represented by the 'value' property.

```html
<!-- example(progress-bar-determinate) -->
```

---