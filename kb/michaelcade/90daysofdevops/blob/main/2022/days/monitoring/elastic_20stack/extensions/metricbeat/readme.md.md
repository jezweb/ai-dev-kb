# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic%20Stack/extensions/metricbeat/README.md
Language: console

## Snippet: Restarting Metricbeat Container After Configuration Changes
Description: Command to restart the Metricbeat container after making changes to its configuration file. This is necessary for any modifications to the config/metricbeat.yml file to take effect.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_1
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml restart metricbeat
```

## Snippet: Running Docker Compose with Metricbeat Extension
Description: Command to start Docker Compose with an additional Metricbeat configuration file. This combines the base docker-compose.yml with the Metricbeat-specific compose file to include Metricbeat in the stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/metricbeat/README.md#2025-04-17_snippet_0
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/metricbeat/metricbeat-compose.yml up
```