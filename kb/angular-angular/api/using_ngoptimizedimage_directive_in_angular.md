# Using NgOptimizedImage Directive in Angular

**Summary:** This file covers topics related to "Using NgOptimizedImage Directive in Angular". Key snippets include: Adding NgOptimizedImage to Component Imports, Customizing Responsive Breakpoints for Image Srcset Generation, Using Fill Mode with NgOptimizedImage, Configuring Non-blurred Placeholders in NgOptimizedImage, Configuring Imgix Loader Provider in Angular....

---

## Adding NgOptimizedImage to Component Imports

**Description:** Demonstrates how to include the NgOptimizedImage directive in the imports array of a standalone component or NgModule.

```typescript
imports: [
  NgOptimizedImage,
  // ...
],
```

---

## Customizing Responsive Breakpoints for Image Srcset Generation

**Description:** Demonstrates how to customize the breakpoint values used for responsive image srcset generation using the IMAGE_CONFIG provider.

```typescript
providers: [
  {
    provide: IMAGE_CONFIG,
    useValue: {
      breakpoints: [16, 48, 96, 128, 384, 640, 750, 828, 1080, 1200, 1920]
    }
  },
],
```

---

## Using Fill Mode with NgOptimizedImage

**Description:** Demonstrates how to use the fill attribute to make an image fill its containing element, useful for background image behavior.

```angular-html
<img ngSrc="cat.jpg" fill>
```

---

## Configuring Non-blurred Placeholders in NgOptimizedImage

**Description:** Shows how to disable the default CSS blur effect on image placeholders by providing a placeholderConfig object with the blur property set to false.

```angular-html
<img 
  ngSrc="cat.jpg" 
  width="400" 
  height="200" 
  placeholder 
  [placeholderConfig]="{blur: false}"
/>
```

---

## Configuring Imgix Loader Provider in Angular

**Description:** Example of providing the Imgix loader for NgOptimizedImage using a base URL. This configuration enables static analysis for preconnect link generation.

```typescript
providers: [
  provideImgixLoader('https://my.base.url/'),
],
```

---

## Disabling Image Lazy Loading with Loading Attribute

**Description:** Demonstrates how to disable the default lazy loading behavior by explicitly setting the loading attribute to eager.

```angular-html
<img ngSrc="cat.jpg" width="400" height="200" loading="eager">
```

---

## Adding Automatic Placeholder to an Image

**Description:** Shows how to implement automatic low-resolution placeholders for images when using an image loader or CDN that supports image resizing.

```angular-html
<img ngSrc="cat.jpg" width="400" height="200" placeholder>
```

---

## Disabling Preconnect Warnings with PRECONNECT_CHECK_BLOCKLIST Token

**Description:** Shows how to disable preconnect warnings for specific domains by injecting the PRECONNECT_CHECK_BLOCKLIST token into the providers array.

```typescript
providers: [
  {provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://your-domain.com'}
],
```

---

## Implementing Custom Image Loader Function in Angular

**Description:** Example of a custom image loader function that uses src, width, and loaderParams to construct a URL. It demonstrates handling optional parameters and custom CDN features.

```typescript
const myCustomLoader = (config: ImageLoaderConfig) => {
  let url = `https://example.com/images/${config.src}?`;
  let queryParams = [];
  if (config.width) {
    queryParams.push(`w=${config.width}`);
  }
  if (config.loaderParams?.roundedCorners) {
    queryParams.push('mask=corners&corner-radius=5');
  }
  return url + queryParams.join('&');
};
```

---

## Configuring Placeholder Resolution in IMAGE_CONFIG

**Description:** Demonstrates how to configure the resolution of automatic placeholders by setting the placeholderResolution value in the IMAGE_CONFIG provider.

```typescript
providers: [
  {
    provide: IMAGE_CONFIG,
    useValue: {
      placeholderResolution: 40
    }
  },
],
```

---

## Setting Priority Attribute on an Image

**Description:** Demonstrates how to mark an image as high priority for loading, which is especially important for Largest Contentful Paint (LCP) elements.

```angular-html
<img ngSrc="cat.jpg" width="400" height="200" priority>
```

---