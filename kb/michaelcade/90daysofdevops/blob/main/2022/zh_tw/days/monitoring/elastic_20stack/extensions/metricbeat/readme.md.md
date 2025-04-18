# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic%20Stack/extensions/metricbeat/README.md
Language: console

## Snippet: Restarting Metricbeat Container after Configuration Changes
Description: This command shows how to restart the Metricbeat container after making changes to its configuration. It uses Docker Compose with the same files as the initial run command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml restart metricbeat
```

## Snippet: Running Metricbeat with Docker Compose
Description: This command demonstrates how to include Metricbeat in the stack by running Docker Compose with an additional command line argument referencing the metricbeat-compose.yml file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml up
```