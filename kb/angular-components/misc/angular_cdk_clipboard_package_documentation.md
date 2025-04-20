# Angular CDK Clipboard Package Documentation

**Summary:** This file covers topics related to "Angular CDK Clipboard Package Documentation". Key snippets include: Buffered Copying for Longer Text with PendingCopy in Angular.

---

## Buffered Copying for Longer Text with PendingCopy in Angular

**Description:** Example showing how to handle copying longer text using the beginCopy method, which returns a PendingCopy object. This approach includes retry logic and proper cleanup to ensure larger content is copied successfully.

```typescript
import {Clipboard} from '@angular/cdk/clipboard';

class HeroProfile {
  lifetimeAchievements: string;

  constructor(private clipboard: Clipboard) {}

  copyAchievements() {
    const pending = this.clipboard.beginCopy(this.lifetimeAchievements);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }
}
```

---