# Creating and Using Custom Pipes in Angular

**Summary:** This file covers topics related to "Creating and Using Custom Pipes in Angular". Key snippets include: Adding @Pipe Decorator to ReversePipe in TypeScript, Using ReversePipe in Angular Component Template.

---

## Adding @Pipe Decorator to ReversePipe in TypeScript

**Description:** This code snippet shows how to add the @Pipe decorator to the ReversePipe class, specifying the name to be used in templates.

```typescript
@Pipe({
    name: 'reverse'
})
```

---

## Using ReversePipe in Angular Component Template

**Description:** This snippet shows how to use the custom ReversePipe in an Angular component's template and how to import it into the component.

```angular-ts
@Component({
    ...
    template: `Reverse Machine: {{ word | reverse }}`
    imports: [ReversePipe]
})
```

---