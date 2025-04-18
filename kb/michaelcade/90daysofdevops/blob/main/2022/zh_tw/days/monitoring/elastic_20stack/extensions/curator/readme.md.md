# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic%20Stack/extensions/curator/README.md
Language: bash

## Snippet: Running Docker Compose with Curator Extension
Description: Command to start Docker Compose with the Elasticsearch Curator extension. This runs both the main docker-compose.yml and the curator extension configuration together.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/curator/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/curator/curator-compose.yml up
```