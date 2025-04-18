# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md
Language: bash

## Snippet: Restoring Kopia Snapshot
Description: Command to restore a specific snapshot using its ID with Kopia.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_6
Language: bash

```bash
kopia snapshot restore kdbd9dff738996cfe7bcf99b45314e193
```

## Snippet: Creating Google Cloud Storage Repository with Kopia
Description: Command to create a new Kopia repository in Google Cloud Storage using the Kopia CLI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_2
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository create gcs --bucket 90daysofdevops
```

## Snippet: Listing Kopia Snapshots
Description: Command to list all snapshots in the currently configured Kopia repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_4
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config snapshot list
```

## Snippet: Creating Snapshot with Kopia
Description: Command to create a snapshot of a specific directory and send it to the configured Kopia repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_3
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config kopia snapshot create "C:\Users\micha\demo\90DaysOfDevOps"
```

## Snippet: Authenticating with Google Cloud SDK
Description: Command to authenticate with Google Cloud Platform using the Google Cloud SDK.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_0
Language: bash

```bash
gcloud auth application-default login
```

## Snippet: Checking Kopia Repository Status
Description: Command to check the status of the current Kopia repository using the Kopia CLI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_1
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository status
```

## Snippet: Mounting Kopia Snapshots
Description: Command to mount all snapshots from the configured Kopia repository to a specified drive letter.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day86.md#2025-04-17_snippet_5
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config mount all Z:
```