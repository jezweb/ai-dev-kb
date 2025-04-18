# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic%20Stack/extensions/metricbeat/README.md
Language: console

## Snippet: Running Docker Compose with Metricbeat Extension
Description: Command to start Docker Compose with an additional Metricbeat configuration file. This includes Metricbeat in the stack by referencing both the main docker-compose.yml and the Metricbeat extension file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml up
```

## Snippet: Restarting Metricbeat Container After Configuration Changes
Description: Command to restart the Metricbeat container after making changes to its configuration. This is necessary for any modifications to the metricbeat.yml file to take effect.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml restart metricbeat
```