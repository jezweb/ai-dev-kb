# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic%20Stack/extensions/logspout/README.md
Language: multiple

## Snippet: Configuring Logstash Pipeline for Logspout
Description: Logstash pipeline configuration that enables the UDP input on port 5000 and sets the input codec to JSON for receiving logs from Logspout.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_1
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
Description: Command to run Docker Compose from the repository root with the Logspout extension enabled via an additional compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/logspout/README.md#2025-04-17_snippet_0
Language: bash

```bash
$ docker-compose -f docker-compose.yml -f extensions/logspout/logspout-compose.yml up
```