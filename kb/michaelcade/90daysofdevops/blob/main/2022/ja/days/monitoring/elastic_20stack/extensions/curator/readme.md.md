# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic%20Stack/extensions/curator/README.md
Language: bash

## Snippet: Running Elasticsearch Curator with Docker Compose
Description: This command demonstrates how to run Docker Compose with the Curator extension. It uses the main docker-compose.yml file along with the curator-specific compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/curator/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/curator/curator-compose.yml up
```