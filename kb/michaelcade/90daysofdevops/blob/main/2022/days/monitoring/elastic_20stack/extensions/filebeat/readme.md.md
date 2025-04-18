# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic%20Stack/extensions/filebeat/README.md
Language: console

## Snippet: Running Filebeat with Docker Compose
Description: Command to start Docker Compose with Filebeat included in the stack. This uses an additional compose file to add Filebeat to the base configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml up
```

## Snippet: Restarting Filebeat Container After Configuration Changes
Description: Command to restart the Filebeat container after making configuration changes in the filebeat.yml file. This ensures the new configuration is applied.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml restart filebeat
```