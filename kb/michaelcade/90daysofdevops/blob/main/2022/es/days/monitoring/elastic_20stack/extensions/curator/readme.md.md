# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic%20Stack/extensions/curator/README.md
Language: bash

## Snippet: Running Docker Compose with Curator Extension
Description: Command to start Docker Compose with the Curator extension by combining the main docker-compose.yml with the curator-specific compose file. This enables automated index management through Curator running as a cron job every minute.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/curator/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/curator/curator-compose.yml up
```