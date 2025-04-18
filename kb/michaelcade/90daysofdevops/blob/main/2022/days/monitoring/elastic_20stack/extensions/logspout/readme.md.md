# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic%20Stack/extensions/logspout/README.md
Language: multiple

## Snippet: Configuring Logstash UDP Input for Logspout
Description: Logstash pipeline configuration snippet that enables the UDP input on port 5000 with JSON codec to receive logs from Logspout. This must be added to your Logstash configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_1
Language: logstash

```logstash
input {
  udp {
    port  => 5000
    codec => json
  }
}
```

## Snippet: Running Docker Compose with Logspout Extension
Description: Command to run Docker Compose with the logspout-compose.yml extension file alongside the main docker-compose.yml file. This enables the Logspout functionality for log collection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/logspout/logspout-compose.yml up
```