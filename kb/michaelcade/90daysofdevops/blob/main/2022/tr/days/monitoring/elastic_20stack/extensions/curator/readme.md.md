# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic%20Stack/extensions/curator/README.md
Language: bash

## Snippet: Running Elasticsearch Curator with Docker Compose
Description: Command to launch Docker Compose with Curator extension by combining the main docker-compose.yml with the curator-specific compose file. This enables automated index management that runs every minute via cron.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/curator/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/curator/curator-compose.yml up
```