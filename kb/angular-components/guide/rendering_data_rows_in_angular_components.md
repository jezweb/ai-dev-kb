# Rendering Data Rows in Angular Components

**Summary:** This file covers topics related to "Rendering Data Rows in Angular Components". Key snippets include: Defining RenderRow Interface in TypeScript for Angular Table Components.

---

## Defining RenderRow Interface in TypeScript for Angular Table Components

**Description:** This code snippet defines the RenderRow interface used to represent a row in the table rendering process. It includes the data object, its index in the data array, and the row definition.

```typescript
export interface RenderRow<T> {
  data: T;
  dataIndex: number;
  rowDef: CdkRowDef<T>;
}
```

---