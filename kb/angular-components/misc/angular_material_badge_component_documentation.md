# Angular Material Badge Component Documentation

**Summary:** This file covers topics related to "Angular Material Badge Component Documentation". Key snippets include: Customizing Badge Position in Angular Material, Configuring Badge Overlap in Angular Material, Setting Badge Size in Angular Material.

---

## Customizing Badge Position in Angular Material

**Description:** Demonstrates how to position badges using the matBadgePosition attribute with values 'above|below' and 'before|after'. This allows controlling where the badge appears relative to its host element.

```html
<h3>Badge position</h3>
<p>
  <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
</p>

<p>
  <span matBadge="1" matBadgePosition="below before" matBadgeColor="primary">Hello</span>
</p>

<p>
  <span matBadge="3" matBadgePosition="below after" matBadgeColor="accent">Hi</span>
</p>

<p>
  <span matBadge="5" matBadgePosition="above before" matBadgeColor="warn">Yo</span>
</p>
```

---

## Configuring Badge Overlap in Angular Material

**Description:** Shows how to control the overlap behavior of badges using the matBadgeOverlap attribute. This determines whether the badge should overlap its host element or be separated from it.

```html
<h3>Badge overlap</h3>
<p>
  <span matBadge="1" matBadgeOverlap="false">Text with no overlap</span>
</p>

<p>
  <span matBadge="22" matBadgeOverlap="false">Text with no overlap</span>
</p>
<p>
  <span matBadge="88" matBadgeOverlap="false">Text with no overlap</span>
</p>

<p>
  <span matBadge="1" matBadgeOverlap="true">Text with overlap</span>
</p>
<p>
  <span matBadge="22" matBadgeOverlap="true">Text with overlap</span>
</p>
<p>
  <span matBadge="88" matBadgeOverlap="true">Text with overlap</span>
</p>
```

---

## Setting Badge Size in Angular Material

**Description:** Illustrates how to change the badge size using the matBadgeSize attribute with values 'small', 'medium', or 'large'. Small badges do not display their label text, which is useful for indicating unread notifications without showing exact count.

```html
<h3>Badge size</h3>
<p>
  <span matBadge="1" matBadgeSize="small">Text with small badge</span>
</p>
<p>
  <span matBadge="22" matBadgeSize="medium">Text with medium badge</span>
</p>
<p>
  <span matBadge="88" matBadgeSize="large">Text with large badge</span>
</p>
```

---