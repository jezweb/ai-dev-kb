# Adding a Form to an Angular App

**Summary:** This file covers topics related to "Adding a Form to an Angular App". Key snippets include: Creating Form Object in Angular Component, Implementing Form Submission Handler in Angular Component.

---

## Creating Form Object in Angular Component

**Description:** This code creates a FormGroup object with FormControl elements for firstName, lastName, and email in the DetailsComponent class.

```TypeScript
applyForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl('')
});
```

---

## Implementing Form Submission Handler in Angular Component

**Description:** This method handles the 'Apply now' button click in the DetailsComponent, submitting the form data to the housing service.

```TypeScript
submitApplication() {
  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );
}
```

---