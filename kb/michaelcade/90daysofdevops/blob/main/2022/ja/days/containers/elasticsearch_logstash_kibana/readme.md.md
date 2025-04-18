# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Containers/elasticsearch-logstash-kibana/README.md
Language: multiple

## Snippet: ELK Stack Docker Compose Configuration
Description: Docker Compose configuration defining services for Elasticsearch, Logstash, and Kibana with version 7.8.0 images
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_1
Language: yaml

```yaml
services:
  elasticsearch:
    image: elasticsearch:7.8.0
    ...
  logstash:
    image: logstash:7.8.0
    ...
  kibana:
    image: kibana:7.8.0
    ...
```

## Snippet: Docker Compose Deployment Command
Description: Command to deploy the ELK stack and its output showing creation of network and containers
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_2
Language: bash

```bash
$ docker-compose up -d
Creating network "elasticsearch-logstash-kibana_elastic" with driver "bridge"
Creating es ... done
Creating log ... done
Creating kib ... done
```

## Snippet: Stack Cleanup Command
Description: Command to stop and remove the ELK stack containers
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_4
Language: bash

```bash
$ docker-compose down
```

## Snippet: Container Status Verification
Description: Docker ps command output showing running containers with their port mappings and status
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_3
Language: bash

```bash
$ docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                    PORTS                                                                                            NAMES
173f0634ed33        logstash:7.8.0        "/usr/local/bin/dock…"   43 seconds ago      Up 41 seconds             0.0.0.0:5000->5000/tcp, 0.0.0.0:5044->5044/tcp, 0.0.0.0:9600->9600/tcp, 0.0.0.0:5000->5000/udp   log
b448fd3e9b30        kibana:7.8.0          "/usr/local/bin/dumb…"   43 seconds ago      Up 42 seconds             0.0.0.0:5601->5601/tcp                                                                           kib
366d358fb03d        elasticsearch:7.8.0   "/tini -- /usr/local…"   43 seconds ago      Up 42 seconds (healthy)   0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp                                                   es
```

## Snippet: Project Structure Output
Description: Shows the basic project structure with a single docker-compose.yml file
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_0
Language: plaintext

```plaintext
.
└── docker-compose.yml
```