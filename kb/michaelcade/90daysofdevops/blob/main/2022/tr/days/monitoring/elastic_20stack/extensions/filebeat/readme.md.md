# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic%20Stack/extensions/filebeat/README.md
Language: console

## Snippet: Running Docker Compose with Filebeat Extension
Description: Command to start Docker Compose with the Filebeat extension by referencing both the main docker-compose.yml and the Filebeat-specific configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml up
```

## Snippet: Restarting Filebeat Container
Description: Command to restart the Filebeat container after making configuration changes to apply the modifications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml restart filebeat
```