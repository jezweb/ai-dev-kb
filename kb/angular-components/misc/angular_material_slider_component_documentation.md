# Angular Material Slider Component Documentation

**Summary:** This file covers topics related to "Angular Material Slider Component Documentation". Key snippets include: Range Selection with Angular Material Slider, Discrete Thumb Label in Angular Material Slider, Basic Value Selection with Angular Material Slider.

---

## Range Selection with Angular Material Slider

**Description:** Shows how to create a range slider by using both matSliderStartThumb and matSliderEndThumb inputs. This allows selection of a value range within the slider's min and max bounds.

```html
<mat-slider>
  <input matSliderStartThumb>
  <input matSliderEndThumb>
</mat-slider>
```

---

## Discrete Thumb Label in Angular Material Slider

**Description:** Demonstrates how to add a visible value label to the slider thumb using the discrete attribute. This shows the currently selected value directly on the thumb.

```html
<mat-slider discrete>
  <input matSliderThumb>
</mat-slider>
```

---

## Basic Value Selection with Angular Material Slider

**Description:** Demonstrates how to create a basic slider with custom minimum, maximum and step values. The example shows setting initial value to 1.5 with a range from 1 to 5 in 0.5 step increments.

```html
<mat-slider min="1" max="5" step="0.5">
  <input matSliderThumb value="1.5">
</mat-slider>
```

---