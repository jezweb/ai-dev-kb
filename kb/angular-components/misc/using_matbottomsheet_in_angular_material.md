# Using MatBottomSheet in Angular Material

**Summary:** This file covers topics related to "Using MatBottomSheet in Angular Material". Key snippets include: Opening a Bottom Sheet in Angular Material, Managing Bottom Sheet Lifecycle in Angular Material, Configuring Global Defaults for Bottom Sheets in Angular Material.

---

## Opening a Bottom Sheet in Angular Material

**Description:** Demonstrates how to open a bottom sheet using the MatBottomSheet service. The open method returns a MatBottomSheetRef which can be used to control the bottom sheet.

```typescript
const bottomSheetRef = bottomSheet.open(SocialShareComponent, {
  ariaLabel: 'Share on social media'
});
```

---

## Managing Bottom Sheet Lifecycle in Angular Material

**Description:** Shows how to subscribe to the afterDismissed event and programmatically dismiss a bottom sheet using the MatBottomSheetRef.

```typescript
bottomSheetRef.afterDismissed().subscribe(() => {
  console.log('Bottom sheet has been dismissed.');
});

bottomSheetRef.dismiss();
```

---

## Configuring Global Defaults for Bottom Sheets in Angular Material

**Description:** Shows how to specify global default options for bottom sheets by providing a MAT_BOTTOM_SHEET_DEFAULT_OPTIONS in the application's root module.

```typescript
@NgModule({
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
```

---