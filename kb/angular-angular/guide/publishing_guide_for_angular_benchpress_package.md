# Publishing Guide for Angular Benchpress Package

**Summary:** This file covers topics related to "Publishing Guide for Angular Benchpress Package". Key snippets include: Publishing Angular Benchpress Package using Bazel.

---

## Publishing Angular Benchpress Package using Bazel

**Description:** Command to publish the @angular/benchpress package using Bazel after updating the version in package.json. This package needs to be published separately from the main Angular framework.

```bash
yarn bazel run //packages/benchpress:npm_package.publish
```

---