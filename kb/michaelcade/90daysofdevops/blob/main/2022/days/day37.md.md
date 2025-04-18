# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md
Language: multiple

## Snippet: Git Rebase Operations
Description: Commands for rebasing branches interactively, allowing modification of commit history and integration of changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_8
Language: bash

```bash
git rebase -i <base>
```

## Snippet: Git Basic Commands
Description: A table of essential Git commands for initialization, cloning, configuration, staging, committing, and tracking status. These form the foundation of any Git workflow.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_1
Language: markdown

```markdown
| Command       | Example                     | Description                                                                                                                 |
| ------------- | --------------------------- |
```

## Snippet: Accessing Git Command Help in Terminal
Description: Methods to access Git documentation directly from the command line, including viewing detailed manual pages with --help and getting command summaries with -h.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_0
Language: bash

```bash
git add -h
```

## Snippet: Git Commands for Rewriting History
Description: Advanced Git commands for modifying commit history, including amending commits, rebasing branches, and viewing reference logs. These enable maintaining a clean and meaningful commit history.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_3
Language: markdown

```markdown
| Command    | Example              | Description                                                                                                                              |
| ---------- | -------------------- |
```

## Snippet: Git Remote Repository Commands
Description: Commands for interacting with remote Git repositories, including adding remote connections, fetching changes, pulling updates, and pushing local commits. These enable collaboration across distributed teams.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_5
Language: markdown

```markdown
| Command        | Example                       | Description                                                                                                                         |
| -------------- | ----------------------------- |
```

## Snippet: Git Diff Commands for File Comparison
Description: Commands for comparing different states of files in Git, including workspace vs. HEAD and staged vs. committed changes. These are crucial for reviewing modifications before committing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_6
Language: markdown

```markdown
| Command           | Example             | Description                                                            |
| ----------------- | ------------------- |
```

## Snippet: Git Commands for Undoing Changes
Description: Commands that allow reverting, resetting, and cleaning changes in Git. These are essential for correcting mistakes or unwanted modifications in your repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_2
Language: markdown

```markdown
| Command    | Example               | Description                                                                                                                           |
| ---------- | --------------------- |
```

## Snippet: Git Push Operations
Description: Commands for pushing changes to remote repositories, including force pushing, pushing all branches, and pushing tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_11
Language: bash

```bash
git push <remote> --force
git push <remote> --all
git push <remote> --tags
```

## Snippet: Configuring Git Settings
Description: Commands for configuring Git user settings and aliases globally and system-wide. Includes setting up user name, email, command aliases, and editor preferences.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_7
Language: bash

```bash
git config --global user.name <name>
git config --global user.email <email>
git config --global alias <alias-name> <git-command>
git config --system core.editor <editor>
git config --global --edit
```

## Snippet: Git Branch Management Commands
Description: Commands for creating, switching between, and merging Git branches. These facilitate parallel development workflows and feature isolation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_4
Language: markdown

```markdown
| Command      | Example                    | Description                                                                                                   |
| ------------ | -------------------------- |
```

## Snippet: Git Reset Operations
Description: Commands for resetting the staging area and working directory to specific states, including soft and hard resets to specific commits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_10
Language: bash

```bash
git reset
git reset --hard
git reset <commit>
git reset --hard <commit>
```

## Snippet: Git Pull Operations
Description: Commands for fetching and integrating changes from remote repositories using rebase strategy instead of merge.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day37.md#2025-04-17_snippet_9
Language: bash

```bash
git pull --rebase <remote>
```