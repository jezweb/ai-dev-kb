# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md
Language: multiple

## Snippet: Mounting Kopia Snapshots from Google Cloud Storage
Description: Command to mount all snapshots from the Google Cloud Storage repository to a local drive letter. This allows browsing the backup contents without performing a full restore.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_6
Language: powershell

```powershell
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config mount all Z:
```

## Snippet: Creating a Google Cloud Storage Repository in Kopia
Description: Command to create a new Kopia repository in Google Cloud Storage using a specific bucket. This replaces the current repository configuration with one pointing to the cloud storage bucket.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_3
Language: powershell

```powershell
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository create gcs --bucket 90daysofdevops
```

## Snippet: Restoring a Specific Kopia Snapshot
Description: Command to restore a specific snapshot from the Kopia repository using its unique identifier. This command would restore the snapshot contents to their original location or a specified destination.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_7
Language: powershell

```powershell
kopia snapshot restore kdbd9dff738996cfe7bcf99b45314e193
```

## Snippet: Authenticating with Google Cloud SDK for Storage Access
Description: Command to authenticate with Google Cloud Platform using the Google Cloud SDK to access storage services. This authentication is required before setting up Kopia to use Google Cloud Storage as a repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_1
Language: bash

```bash
gcloud auth application-default login
```

## Snippet: Creating a Snapshot and Backing Up to Google Cloud Storage
Description: Command to create a snapshot of a local directory and store it in the configured Google Cloud Storage repository. This initiates the backup process for the specified directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_4
Language: powershell

```powershell
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config kopia snapshot create "C:\Users\micha\demo\90DaysOfDevOps"
```

## Snippet: Checking Kopia Repository Status
Description: Command to check the current status of a Kopia repository configuration using the Kopia executable with a specific config file path. This displays details about the currently configured repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_2
Language: powershell

```powershell
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository status
```

## Snippet: Listing Available Snapshots in Kopia Repository
Description: Command to list all available snapshots in the currently configured Kopia repository (Google Cloud Storage). This helps identify snapshots available for restoration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_5
Language: powershell

```powershell
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config snapshot list
```

## Snippet: Markdown Document Structure
Description: Markdown formatted document explaining data protection concepts and Kopia backup tool implementation. Includes headers, emphasis, and image references.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day86.md#2025-04-17_snippet_0
Language: markdown

```markdown
---
title: '#90DaysOfDevOps - Backup all the platforms - Day 86'
published: false
description: 90DaysOfDevOps - Backup all the platforms
tags: 'devops, 90daysofdevops, learning'
cover_image: null
canonical_url: null
id: 1049058
---
## Backup all the platforms

During this whole challenge we have discussed many different platforms and environments...
```