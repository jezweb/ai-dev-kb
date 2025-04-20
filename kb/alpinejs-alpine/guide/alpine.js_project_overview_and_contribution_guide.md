---
title: "Alpine.js Project Overview and Contribution Guide"
category: "guide"
tags:
  - alpinejs
  - contribution
  - development
  - setup
  - testing
  - npm
  - build
  - cypress
  - jest
  - open-source
---

# Alpine.js Project Overview and Contribution Guide

**Summary:** This document provides instructions for contributors looking to set up the Alpine.js project locally for development. It covers cloning the repository, installing dependencies using NPM, building the project, and running the test suites (Cypress for integration tests, Jest for unit tests).

---

## Running Tests for Alpine.js

**Description:** Outlines the NPM commands available for running the Alpine.js test suites. `npm run test` executes both Cypress and Jest tests. Specific commands like `npm run cypress` (opens Cypress UI) and `npm run jest` (runs Jest, allows forwarding options like `--watch`) are provided for targeted testing during development.

```shell
# Run both Cypress and Jest tests
npm run test

# Run only Cypress tests and open its UI (recommended for development)
npm run cypress

# Run only Jest tests
npm run jest

# Run Jest tests in watch mode
npm run jest -- --watch
```

---

## Installing Dependencies and Building Alpine.js

**Description:** Steps required to set up the Alpine.js project after cloning the repository locally. This involves installing Node.js dependencies via `npm install` and then running `npm run build` to compile the project source code. The resulting build file (`/packages/alpinejs/dist/cdn.js`) can then be included in an HTML page for testing.

```markdown
1.  Clone this repo locally: `git clone https://github.com/alpinejs/alpine.git`
2.  Navigate into the directory: `cd alpine`
3.  Install dependencies: `npm install`
4.  Build the project: `npm run build`
5.  Include the local build in an HTML file: `<script src="/path/to/alpine/packages/alpinejs/dist/cdn.js" defer></script>`
```

---