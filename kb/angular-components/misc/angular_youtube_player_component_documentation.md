# Angular YouTube Player Component Documentation

**Summary:** This file covers topics related to "Angular YouTube Player Component Documentation". Key snippets include: Initializing Basic YouTube Player Component in Angular, Configuring YouTube Player API Loading with Module.

---

## Initializing Basic YouTube Player Component in Angular

**Description:** Demonstrates basic setup of a YouTube player component using the standalone component approach. Shows how to import and implement a simple player with a video ID.

```typescript
import {Component} from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';

@Component({
  imports: [YouTubePlayer],
  template: '<youtube-player videoId="mVjYG9TSN88"/>',
  selector: 'youtube-player-example',
})
export class YoutubePlayerExample {}
```

---

## Configuring YouTube Player API Loading with Module

**Description:** Shows how to configure the YouTube Player API loading behavior at the module level using dependency injection. Demonstrates disabling automatic API loading.

```typescript
import {NgModule} from '@angular/core';
import {YouTubePlayer, YOUTUBE_PLAYER_CONFIG} from '@angular/youtube-player';

@NgModule({
  imports: [YouTubePlayer],
  providers: [{
    provide: YOUTUBE_PLAYER_CONFIG,
    useValue: {
      loadApi: false
    }
  }]
})
export class YourApp {}
```

---