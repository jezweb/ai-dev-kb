# Creating and Packaging Angular Library Schematics

**Summary:** This file covers topics related to "Creating and Packaging Angular Library Schematics". Key snippets include: Chaining Rules in Schematic Factory, Complete Schematic Factory Implementation, Setting Path for Schematic Output.

---

## Chaining Rules in Schematic Factory

**Description:** Code that chains multiple rules into a single rule using the chain() method, combining template rules with any other code executed by the schematic.

```typescript
return chain([
  mergeWith(templateSource)
]);
```

---

## Complete Schematic Factory Implementation

**Description:** The complete implementation of the schematic rule function, combining all the necessary components to read workspace configuration, apply templates, and generate files.

```typescript
import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  mergeWith,
  move,
  template,
  url,
  applyTemplates,
} from '@angular-devkit/schematics';
import {
  strings,
  normalize,
  virtualFs,
  workspaces
} from '@angular-devkit/core';

import { Schema as MyServiceSchema } from './schema';

function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new Error('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    }
  };
}

export function myService(options: MyServiceSchema): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const host = createHost(tree);
    const { workspace } = await workspaces.readWorkspace('/', host);

    const project = options.project || workspace.extensions.defaultProject;

    // Throws if project is not defined
    if (!project) {
      throw new Error('Option "project" is required.');
    }

    // Get configured project
    const projectConfig = workspace.projects.get(project);
    if (!projectConfig) {
      throw new Error(`Project "${project}" does not exist.`);
    }

    const projectType = projectConfig.extensions.projectType === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${projectConfig.sourceRoot}/${projectType}`;
    }

    const templateSource = apply(
      url('./files'),
      [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name
        }),
        move(normalize(options.path as string))
      ]);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}
```

---

## Setting Path for Schematic Output

**Description:** Code that determines where the schematic template files will be moved to once the schematic is applied, using either the provided path or the project's sourceRoot.

```typescript
if (options.path === undefined) {
  options.path = `${projectConfig.sourceRoot}/${projectType}`;
}
```

---