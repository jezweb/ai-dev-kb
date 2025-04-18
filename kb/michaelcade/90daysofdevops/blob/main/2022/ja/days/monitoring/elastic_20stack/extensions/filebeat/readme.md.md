# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic%20Stack/extensions/filebeat/README.md
Language: console

## Snippet: Restarting Filebeat Container
Description: This command restarts the Filebeat container after making changes to its configuration. It uses Docker Compose with both the main compose file and the Filebeat extension.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml restart filebeat
```

## Snippet: Running Docker Compose with Filebeat
Description: This command runs Docker Compose from the root of the repository, including Filebeat in the stack by referencing the filebeat-compose.yml file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/filebeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/filebeat/filebeat-compose.yml up
```