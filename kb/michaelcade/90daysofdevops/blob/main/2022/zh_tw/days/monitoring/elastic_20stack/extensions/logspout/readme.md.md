# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic%20Stack/extensions/logspout/README.md
Language: multiple

## Snippet: Running Docker Compose with Logspout Extension
Description: Command to run Docker Compose with the Logspout extension, using an additional compose file for the extension configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/logspout/logspout-compose.yml up
```

## Snippet: Configuring Logstash Pipeline for Logspout
Description: Logstash pipeline configuration to enable UDP input and set the input codec to JSON for receiving logs from Logspout.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_1
Language: logstash

```logstash
input {
  udp {
    port  => 5000
    codec => json
  }
}
```