# Angular Service Worker Push Notifications Guide

**Summary:** This file covers topics related to "Angular Service Worker Push Notifications Guide". Key snippets include: Configuring Basic Push Notification Payload with Click Action in JSON.

---

## Configuring Basic Push Notification Payload with Click Action in JSON

**Description:** Example showing how to structure a basic push notification payload with a default click action to open a window. Demonstrates using the onActionClick property to define default behavior.

```json
{
  "notification": {
    "title": "New Notification!",
    "data": {
      "onActionClick": {
        "default": {"operation": "openWindow", "url": "foo"}
      }
    }
  }
}
```

---