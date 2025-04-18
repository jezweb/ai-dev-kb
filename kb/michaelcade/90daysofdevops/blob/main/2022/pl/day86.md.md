# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md
Language: multiple

## Snippet: Creating a Snapshot and Backing Up to Google Cloud Storage
Description: Command to create a snapshot of a local directory and back it up to the configured Google Cloud Storage repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_3
Language: cli

```cli
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config kopia snapshot create "C:\Users\micha\demo\90DaysOfDevOps"
```

## Snippet: Mounting Snapshots from Google Cloud Storage
Description: Command to mount all snapshots from the Google Cloud Storage repository to a local drive for browsing or restore.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_5
Language: cli

```cli
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config mount all Z:
```

## Snippet: Creating a Google Cloud Storage Repository in Kopia
Description: Command to create a new repository in Google Cloud Storage using a specific bucket name of '90daysofdevops'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_2
Language: cli

```cli
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository create gcs --bucket 90daysofdevops
```

## Snippet: Restoring a Snapshot from Kopia Repository
Description: Command to restore the contents of a specific snapshot using its unique identifier.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_6
Language: cli

```cli
kopia snapshot restore kdbd9dff738996cfe7bcf99b45314e193
```

## Snippet: Listing Snapshots in Kopia Repository
Description: Command to list all snapshots currently stored in the configured Kopia repository.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_4
Language: cli

```cli
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config snapshot list
```

## Snippet: Checking Kopia Repository Status
Description: Command to display the current status of a Kopia repository using the KopiaUI executable with a specific configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_1
Language: cli

```cli
"C:\Program Files\KopiaUI\resources\server\kopia.exe" --config-file=C:\Users\micha\AppData\Roaming\kopia\repository.config repository status
```

## Snippet: Authenticating with Google Cloud Platform
Description: Command to authenticate with Google Cloud Platform using the Google Cloud SDK before setting up cloud storage backups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day86.md#2025-04-17_snippet_0
Language: bash

```bash
gcloud auth application-default login
```