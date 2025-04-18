# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic%20Stack/extensions/metricbeat/README.md
Language: console

## Snippet: Starting Metricbeat with Docker Compose
Description: Command to start Metricbeat by running Docker Compose with both the main compose file and Metricbeat extension file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml up
```

## Snippet: Restarting Metricbeat Container
Description: Command to restart the Metricbeat container after configuration changes, using Docker Compose with both the main compose file and Metricbeat extension.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml restart metricbeat
```