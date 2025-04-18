# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md
Language: multiple

## Snippet: Checking Kopia Repository Status
Description: Command to check the status of the current Kopia repository configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_2
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository status
```

## Snippet: Creating Kopia Snapshot
Description: Command to create a new snapshot of a specified directory and send it to the configured repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_4
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config kopia snapshot create "C:\Users\micha\demo\90DaysOfDevOps"
```

## Snippet: Listing Kopia Snapshots
Description: Command to list all snapshots in the currently configured Kopia repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_5
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config snapshot list
```

## Snippet: Restoring Kopia Snapshot
Description: Command to restore a specific snapshot using its unique identifier.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_7
Language: bash

```bash
kopia snapshot restore kdbd9dff738996cfe7bcf99b45314e193
```

## Snippet: Authenticating with Google Cloud SDK
Description: Command to authenticate with Google Cloud Platform using the Google Cloud SDK.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_1
Language: bash

```bash
gcloud auth application-default login
```

## Snippet: Creating Kopia Repository in Google Cloud Storage
Description: Command to create a new Kopia repository in a Google Cloud Storage bucket.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_3
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository create gcs --bucket 90daysofdevops
```

## Snippet: Basic YAML Front Matter for Blog Post
Description: YAML configuration block defining metadata for the blog post including title, publication status, description, and tags.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_0
Language: yaml

```yaml
---
title: '#90DaysOfDevOps - Backup all the platforms - Day 86'
published: false
description: 90DaysOfDevOps - Backup all the platforms
tags: 'devops, 90daysofdevops, learning'
cover_image: null
canonical_url: null
id: 1049058
---
```

## Snippet: Mounting Kopia Snapshots
Description: Command to mount all snapshots from the configured repository to a specified drive letter.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day86.md#2025-04-17_snippet_6
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config mount all Z:
```