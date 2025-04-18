# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day23.md
Language: bash

## Snippet: Inspecting Docker Container IP Address - Generic Command
Description: Command to retrieve the IP address of a Docker container using docker inspect with network settings filtering
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day23.md#2025-04-17_snippet_0
Language: bash

```bash
docker inspect <container_id_or_name> -f '{{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'
```

## Snippet: Inspecting Docker Container IP Address - ES2 Container
Description: Specific command to get the IP address of the es2 latest container
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day23.md#2025-04-17_snippet_1
Language: bash

```bash
docker inspect es2 latest -f '{{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'
```

## Snippet: Inspecting Docker Container IP Address - S Container
Description: Specific command to get the IP address of the s latest container
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day23.md#2025-04-17_snippet_2
Language: bash

```bash
docker inspect s latest -f '{{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'
```