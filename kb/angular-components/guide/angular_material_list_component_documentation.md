# Angular Material List Component Documentation

**Summary:** This file covers topics related to "Angular Material List Component Documentation". Key snippets include: Creating Simple Lists with Angular Material, Implementing Multi-line Lists in Angular Material, Creating Lists with Multiple Sections in Angular Material, Implementing Multi-line Lists with Angular Material, Implementing Complex Navigation Lists in Angular Material....

---

## Creating Simple Lists with Angular Material

**Description:** Demonstrates how to create a basic list using mat-list and mat-list-item components. This snippet shows a simple list with single-line text items.

```html
<mat-list>
 <mat-list-item>Pepper</mat-list-item>
 <mat-list-item>Salt</mat-list-item>
 <mat-list-item>Paprika</mat-list-item>
</mat-list>
```

---

## Implementing Multi-line Lists in Angular Material

**Description:** Shows how to create multi-line list items using matListItemTitle and matListItemLine directives. This example demonstrates a list with items containing a title and additional information.

```html
<mat-list>
  <mat-list-item>
    <span matListItemTitle>Pepper</span>
    <span matListItemLine>Produced by a plant</span>
  </mat-list-item>
  <mat-list-item>
    <span matListItemTitle>Salt</span>
    <span matListItemLine>Extracted from sea water</span>
  </mat-list-item>
  <mat-list-item>
    <span matListItemTitle>Paprika</span>
    <span matListItemLine>Produced by dried and ground red peppers</span>
  </mat-list-item>
</mat-list>
```

---

## Creating Lists with Multiple Sections in Angular Material

**Description:** Demonstrates how to create lists with multiple sections using matSubheader and mat-divider. This example shows a list with separate sections for folders and notes.

```html
<mat-list>
   <h3 matSubheader>Folders</h3>
   @for (folder of folders; track folder) {
     <mat-list-item>
        <mat-icon matListIcon>folder</mat-icon>
        <h4 matListItemTitle>{{folder.name}}</h4>
        <p matListItemLine class="demo-2"> {{folder.updated}} </p>
     </mat-list-item>
   }
   <mat-divider></mat-divider>
   <h3 matSubheader>Notes</h3>
   @for (note of notes; track note) {
     <mat-list-item>
        <mat-icon matListIcon>note</mat-icon>
        <h4 matListItemTitle>{{note.name}}</h4>
        <p matListItemLine class="demo-2"> {{note.updated}} </p>
     </mat-list-item>
   }
</mat-list>
```

---

## Implementing Multi-line Lists with Angular Material

**Description:** Demonstrates how to create multi-line list items using matListItemLine attribute. This example shows both two-line and three-line list implementations.

```html
<!-- two line list -->
<mat-list>
  @for (message of messages; track message) {
    <mat-list-item>
      <h3 matListItemTitle>{{message.from}}</h3>
      <p matListItemLine>
        <span>{{message.subject}}</span>
        <span class="demo-2"> -- {{message.content}}</span>
      </p>
    </mat-list-item>
  }
</mat-list>

<!-- three line list -->
<mat-list>
  @for (message of messages; track message) {
    <mat-list-item>
      <h3 matListItemTitle>{{message.from}}</h3>
      <p matListItemLine>{{message.subject}}</p>
      <p matListItemLine class="demo-2">{{message.content}}</p>
    </mat-list-item>
  }
</mat-list>
```

---

## Implementing Complex Navigation Lists in Angular Material

**Description:** Demonstrates a more complex navigation list with additional interactive elements. This example includes a button with an icon in the meta section of each list item.

```html
<mat-nav-list>
  @for (link of links; track link) {
    <mat-list-item [activated]="link.isActive">
       <a matListItemTitle href="...">{{ link }}</a>
       <button matIconButton (click)="showInfo(link)" matListItemMeta>
          <mat-icon>info</mat-icon>
       </button>
    </mat-list-item>
  }
</mat-nav-list>
```

---

## Creating Action Lists with Angular Material

**Description:** Shows how to create an action list using mat-action-list and mat-list-item attributes on button elements. This snippet demonstrates a simple action list with click handlers.

```html
<mat-action-list>
  <button mat-list-item (click)="save()">Save</button>
  <button mat-list-item (click)="undo()">Undo</button>
</mat-action-list>
```

---

## Adding Icons to List Items in Angular Material

**Description:** Shows how to add icons to list items using the matListItemIcon attribute. This example demonstrates a list with folder icons for each item.

```html
<mat-list>
  @for (message of messages; track message) {
    <mat-list-item>
      <mat-icon matListItemIcon>folder</mat-icon>
      <h3 matListItemTitle>{{message.from}}</h3>
      <p matListItemLine>
        <span>{{message.subject}}</span>
        <span class="demo-2"> -- {{message.content}}</span>
      </p>
    </mat-list-item>
  }
</mat-list>
```

---