# Angular Material Divider Component Documentation

**Summary:** This file covers topics related to "Angular Material Divider Component Documentation". Key snippets include: Material List with Inset Dividers Implementation in HTML.

---

## Material List with Inset Dividers Implementation in HTML

**Description:** Complex example showing how to use mat-divider within a material list component, including conditional inset dividers and section separation.

```html
<mat-list>
   <h3 mat-subheader>Folders</h3>
   @for (folder of folders; track folder) {
      <mat-list-item>
         <mat-icon mat-list-icon>folder</mat-icon>
         <h4 mat-line>{{folder.name}}</h4>
         <p mat-line class="demo-2">{{folder.updated}}</p>
         @if (!$last) {
            <mat-divider [inset]="true"></mat-divider>
         }
      </mat-list-item>
   }
   <mat-divider></mat-divider>
   <h3 mat-subheader>Notes</h3>
   @for (note of notes; track node) {
      <mat-list-item>
         <mat-icon mat-list-icon>note</mat-icon>
         <h4 mat-line>{{note.name}}</h4>
         <p mat-line class="demo-2"> {{note.updated}} </p>
      </mat-list-item>
   }
</mat-list>
```

---