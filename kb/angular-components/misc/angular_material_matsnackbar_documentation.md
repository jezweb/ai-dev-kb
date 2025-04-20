# Angular Material MatSnackBar Documentation

**Summary:** This file covers topics related to "Angular Material MatSnackBar Documentation". Key snippets include: Sharing Data with Custom Snackbar Component in Angular, Handling Snackbar Events and Dismissal in Angular, Opening Basic Snackbar Messages in Angular, Configuring Snackbar Duration in Angular.

---

## Sharing Data with Custom Snackbar Component in Angular

**Description:** Shows how to pass data to a custom snackbar component and access it using dependency injection with MAT_SNACK_BAR_DATA token.

```typescript
snackBar.openFromComponent(MessageArchivedComponent, {
  data: 'some data'
});
```

---

## Handling Snackbar Events and Dismissal in Angular

**Description:** Shows how to subscribe to snackbar events and handle dismissal. Demonstrates usage of MatSnackBarRef for managing snackbar lifecycle and actions.

```typescript
snackBarRef.afterDismissed().subscribe(() => {
  console.log('The snackbar was dismissed');
});


snackBarRef.onAction().subscribe(() => {
  console.log('The snackbar action was triggered!');
});

snackBarRef.dismiss();
```

---

## Opening Basic Snackbar Messages in Angular

**Description:** Demonstrates different ways to open a snackbar using simple messages or custom components. Shows basic usage of MatSnackBar service with various options.

```typescript
// Simple message.
let snackBarRef = snackBar.open('Message archived');

// Simple message with an action.
let snackBarRef = snackBar.open('Message archived', 'Undo');

// Load the given component into the snackbar.
let snackBarRef = snackBar.openFromComponent(MessageArchivedComponent);
```

---

## Configuring Snackbar Duration in Angular

**Description:** Demonstrates how to set a custom duration for auto-dismissing snackbars using configuration object.

```typescript
snackBar.open('Message archived', 'Undo', {
  duration: 3000
});
```

---