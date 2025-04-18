# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/CONTRIBUTING.md
Language: shell

## Snippet: Git Setup and Feature Branch Creation
Description: Commands for adding upstream remote, creating a new feature branch, and pushing changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/CONTRIBUTING.md#2025-04-17_snippet_0
Language: shell

```shell
git remote add upstream https://github.com/vmware-samples/packer-examples-for-vsphere.git
git checkout -b my-new-feature main
git commit -s -a
git push origin my-new-feature
```

## Snippet: Amending Recent Commit
Description: Commands for adding changes to the most recent commit and force pushing to update a pull request.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/CONTRIBUTING.md#2025-04-17_snippet_2
Language: shell

```shell
git add .
git commit --amend
git push --force-with-lease origin my-new-feature
```

## Snippet: Syncing with Upstream Repository
Description: Commands for updating a feature branch with changes from the upstream main branch using rebase.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/CONTRIBUTING.md#2025-04-17_snippet_1
Language: shell

```shell
git checkout my-new-feature
git fetch -a
git pull --rebase upstream main
git push --force-with-lease origin my-new-feature
```

## Snippet: Squashing Changes into Earlier Commits
Description: Commands for combining new changes with an earlier commit using fixup and interactive rebase.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/CONTRIBUTING.md#2025-04-17_snippet_3
Language: shell

```shell
git add .
git commit --fixup <commit>
git rebase -i --autosquash main
git push --force-with-lease origin my-new-feature
```