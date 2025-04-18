# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day86.md
Language: bash

## Snippet: Creating Kopia Snapshot
Description: Command to create a new snapshot of a specified directory and store it in the configured repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day86.md#2025-04-17_snippet_2
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config kopia snapshot create "C:\Users\micha\demo\90DaysOfDevOps"
```

## Snippet: Creating GCS Repository in Kopia
Description: Command to create a new repository in Google Cloud Storage using Kopia, specifying the bucket name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day86.md#2025-04-17_snippet_1
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository create gcs --bucket 90daysofdevops
```

## Snippet: Mounting Kopia Snapshots
Description: Command to mount all snapshots from the repository to a specified drive letter.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day86.md#2025-04-17_snippet_4
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config mount all Z:
```

## Snippet: Checking Kopia Repository Status
Description: Command to check the current status of a Kopia repository using the Kopia executable with a specific config file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day86.md#2025-04-17_snippet_0
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository status
```

## Snippet: Listing Kopia Snapshots
Description: Command to list all available snapshots in the currently configured repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day86.md#2025-04-17_snippet_3
Language: bash

```bash
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config snapshot list
```