# Angular Components A11y Package Documentation

**Summary:** This file covers topics related to "Angular Components A11y Package Documentation". Key snippets include: Using FocusMonitor in TypeScript, Using LiveAnnouncer in TypeScript, Using cdkTrapFocus Directive in HTML, Initializing ListKeyManager with Wrap in TypeScript.

---

## Using FocusMonitor in TypeScript

**Description:** Shows how to use FocusMonitor to subscribe to focus changes and handle them within the Angular zone.

```typescript
focusMonitor.monitor(el).subscribe(origin => this.ngZone.run(() => /* ... */ ));
```

---

## Using LiveAnnouncer in TypeScript

**Description:** Demonstrates how to use LiveAnnouncer to announce messages for screen-reader users in a component.

```typescript
@Component({...})
export class MyComponent {

 constructor(liveAnnouncer: LiveAnnouncer) {
   liveAnnouncer.announce("Hey Google");
 }
}
```

---

## Using cdkTrapFocus Directive in HTML

**Description:** Demonstrates how to use the cdkTrapFocus directive to trap focus within an element for accessibility purposes.

```html
<div class="my-inner-dialog-content" cdkTrapFocus>
  <!-- Tab and Shift + Tab will not leave this element. -->
</div>
```

---

## Initializing ListKeyManager with Wrap in TypeScript

**Description:** Shows how to initialize a FocusKeyManager with wrapping enabled for navigation through options.

```typescript
this.keyManager = new FocusKeyManager(...).withWrap();
```

---