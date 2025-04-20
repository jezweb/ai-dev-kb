# Creating the HousingLocation Component in Angular

**Summary:** This file covers topics related to "Creating the HousingLocation Component in Angular". Key snippets include: Generating a New Angular Component with CLI, Adding HousingLocationComponent to HomeComponent Imports Array.

---

## Generating a New Angular Component with CLI

**Description:** Command to generate a new HousingLocation component using Angular CLI. This creates the component files including the TypeScript class, HTML template, CSS file, and test file.

```shell
ng generate component housingLocation
```

---

## Adding HousingLocationComponent to HomeComponent Imports Array

**Description:** Code showing how to add HousingLocationComponent to the imports array in the @Component decorator of HomeComponent. This registers the component for use within HomeComponent's template.

```typescript
imports: [CommonModule, HousingLocationComponent],
```

---