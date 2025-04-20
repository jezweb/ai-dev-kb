# Angular YouTube Player API Documentation

**Summary:** This file covers topics related to "Angular YouTube Player API Documentation". Key snippets include: Angular YouTube Player API Definitions (TypeScript).

---

## Angular YouTube Player API Definitions (TypeScript)

**Description:** Complete API definitions for the @angular/youtube-player package, including the YouTubePlayer component, YouTubePlayerModule, configuration interfaces, and exported types. The API provides Angular integration with the YouTube Player iframe API.

```typescript
/// <reference types="youtube" />

import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as i0 from '@angular/core';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { SimpleChanges } from '@angular/core';

// @public
export type PlaceholderImageQuality = 'high' | 'standard' | 'low';

// @public
export const YOUTUBE_PLAYER_CONFIG: InjectionToken<YouTubePlayerConfig>;

// @public
export class YouTubePlayer implements AfterViewInit, OnChanges, OnDestroy {
    constructor(...args: unknown[]);
    readonly apiChange: Observable<YT.PlayerEvent>;
    disableCookies: boolean;
    disablePlaceholder: boolean;
    endSeconds: number | undefined;
    readonly error: Observable<YT.OnErrorEvent>;
    getAvailablePlaybackRates(): number[];
    getAvailableQualityLevels(): YT.SuggestedVideoQuality[];
    getCurrentTime(): number;
    getDuration(): number;
    getPlaybackQuality(): YT.SuggestedVideoQuality;
    getPlaybackRate(): number;
    getPlayerState(): YT.PlayerState | undefined;
    getVideoEmbedCode(): string;
    getVideoLoadedFraction(): number;
    getVideoUrl(): string;
    getVolume(): number;
    // (undocumented)
    protected _hasPlaceholder: boolean;
    get height(): number;
    set height(height: number | undefined);
    // (undocumented)
    protected _isLoading: boolean;
    isMuted(): boolean;
    protected _load(playVideo: boolean): void;
    loadApi: boolean;
    mute(): void;
    // (undocumented)
    static ngAcceptInputType_disableCookies: unknown;
    // (undocumented)
    static ngAcceptInputType_disablePlaceholder: unknown;
    // (undocumented)
    static ngAcceptInputType_endSeconds: number | undefined;
    // (undocumented)
    static ngAcceptInputType_height: unknown;
    // (undocumented)
    static ngAcceptInputType_loadApi: unknown;
    // (undocumented)
    static ngAcceptInputType_showBeforeIframeApiLoads: unknown;
    // (undocumented)
    static ngAcceptInputType_startSeconds: number | undefined;
    // (undocumented)
    static ngAcceptInputType_width: unknown;
    // (undocumented)
    ngAfterViewInit(): void;
    // (undocumented)
    ngOnChanges(changes: SimpleChanges): void;
    // (undocumented)
    ngOnDestroy(): void;
    pauseVideo(): void;
    placeholderButtonLabel: string;
    placeholderImageQuality: PlaceholderImageQuality;
    readonly playbackQualityChange: Observable<YT.OnPlaybackQualityChangeEvent>;
    readonly playbackRateChange: Observable<YT.OnPlaybackRateChangeEvent>;
    playerVars: YT.PlayerVars | undefined;
    playVideo(): void;
    readonly ready: Observable<YT.PlayerEvent>;
    requestFullscreen(options?: FullscreenOptions): Promise<void>;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    setPlaybackRate(playbackRate: number): void;
    setVolume(volume: number): void;
    protected _shouldShowPlaceholder(): boolean;
    showBeforeIframeApiLoads: boolean;
    startSeconds: number | undefined;
    readonly stateChange: Observable<YT.OnStateChangeEvent>;
    stopVideo(): void;
    suggestedQuality: YT.SuggestedVideoQuality | undefined;
    unMute(): void;
    videoId: string | undefined;
    get width(): number;
    set width(width: number | undefined);
    youtubeContainer: ElementRef<HTMLElement>;
    // (undocumented)
    static ɵcmp: i0.ɵɵComponentDeclaration<YouTubePlayer, "youtube-player", never, { "videoId": { "alias": "videoId"; "required": false; }; "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; "startSeconds": { "alias": "startSeconds"; "required": false; }; "endSeconds": { "alias": "endSeconds"; "required": false; }; "suggestedQuality": { "alias": "suggestedQuality"; "required": false; }; "playerVars": { "alias": "playerVars"; "required": false; }; "disableCookies": { "alias": "disableCookies"; "required": false; }; "loadApi": { "alias": "loadApi"; "required": false; }; "disablePlaceholder": { "alias": "disablePlaceholder"; "required": false; }; "showBeforeIframeApiLoads": { "alias": "showBeforeIframeApiLoads"; "required": false; }; "placeholderButtonLabel": { "alias": "placeholderButtonLabel"; "required": false; }; "placeholderImageQuality": { "alias": "placeholderImageQuality"; "required": false; }; }, { "ready": "ready"; "stateChange": "stateChange"; "error": "error"; "apiChange": "apiChange"; "playbackQualityChange": "playbackQualityChange"; "playbackRateChange": "playbackRateChange"; }, never, never, true, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<YouTubePlayer, never>;
}

// @public
export interface YouTubePlayerConfig {
    disablePlaceholder?: boolean;
    loadApi?: boolean;
    placeholderButtonLabel?: string;
    placeholderImageQuality?: PlaceholderImageQuality;
}

// @public (undocumented)
export class YouTubePlayerModule {
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<YouTubePlayerModule, never>;
    // (undocumented)
    static ɵinj: i0.ɵɵInjectorDeclaration<YouTubePlayerModule>;
    // (undocumented)
    static ɵmod: i0.ɵɵNgModuleDeclaration<YouTubePlayerModule, never, [typeof YouTubePlayer], [typeof YouTubePlayer]>;
}

// (No @packageDocumentation comment for this package)
```

---