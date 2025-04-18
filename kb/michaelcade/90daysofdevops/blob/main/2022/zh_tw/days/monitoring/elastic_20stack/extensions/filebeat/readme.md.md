# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic%20Stack/extensions/filebeat/README.md
Language: console

## Snippet: Running Docker Compose with Filebeat Extension
Description: Command to start Docker Compose with an additional Filebeat configuration file. This allows Filebeat to be included in the stack alongside other services.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml up
```

## Snippet: Restarting Filebeat Container After Configuration Changes
Description: Command to restart the Filebeat container after making changes to its configuration. This ensures that the new configuration is applied.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml restart filebeat
```