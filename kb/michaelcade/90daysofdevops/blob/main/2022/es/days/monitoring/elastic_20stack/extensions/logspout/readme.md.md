# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic%20Stack/extensions/logspout/README.md
Language: multiple

## Snippet: Configuring Logstash UDP Input
Description: Logstash pipeline configuration to enable UDP input on port 5000 with JSON codec for receiving logs from Logspout.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_1
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
Description: Command to start Docker Compose with the Logspout extension by referencing both the main docker-compose.yml and the logspout-compose.yml configuration files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/logspout/logspout-compose.yml up
```