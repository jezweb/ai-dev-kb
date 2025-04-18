# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic%20Stack/extensions/logspout/README.md
Language: multiple

## Snippet: Running Docker Compose with Logspout Extension
Description: Command to launch Docker Compose with the Logspout extension by referencing both the main docker-compose.yml and the logspout extension configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/logspout/logspout-compose.yml up
```

## Snippet: Configuring Logstash UDP Input
Description: Logstash pipeline configuration that enables UDP input on port 5000 and sets the input codec to JSON for processing incoming log data from Logspout.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_1
Language: logstash

```logstash
input {
  udp {
    port  => 5000
    codec => json
  }
}
```