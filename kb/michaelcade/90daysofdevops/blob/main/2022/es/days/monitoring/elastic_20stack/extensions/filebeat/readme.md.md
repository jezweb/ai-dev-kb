# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic%20Stack/extensions/filebeat/README.md
Language: console

## Snippet: Running Filebeat with Docker Compose
Description: This command demonstrates how to include Filebeat in the stack by running Docker Compose with an additional file reference. It combines the main docker-compose.yml with the Filebeat-specific compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml up
```

## Snippet: Restarting Filebeat Container
Description: This command shows how to restart the Filebeat container after making changes to its configuration. It uses Docker Compose with both the main and Filebeat-specific compose files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml restart filebeat
```