# LiveAnnouncer Documentation

**Summary:** This file covers topics related to "LiveAnnouncer Documentation". Key snippets include: Implementing LiveAnnouncer in an Angular Component.

---

## Implementing LiveAnnouncer in an Angular Component

**Description:** Demonstrates how to inject and use the LiveAnnouncer service in an Angular component to make screen reader announcements. The example shows how to inject the service via the constructor and make a simple announcement.

```typescript
@Component({
  selector: 'my-component'
  providers: [LiveAnnouncer]
})
export class MyComponent {

  constructor(liveAnnouncer: LiveAnnouncer) {
    liveAnnouncer.announce("Hey Google");
  }
}
```

---