# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Containers/elasticsearch-logstash-kibana/README.md
Language: multiple

## Snippet: Docker Compose Configuration for ELK Stack
Description: A partial Docker Compose configuration that defines services for Elasticsearch, Logstash, and Kibana with version 7.8.0 images.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_1
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

## Snippet: Deploying ELK Stack with Docker Compose
Description: Command to deploy the ELK stack using Docker Compose in detached mode, showing the output of creating a network and the three containers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_2
Language: bash

```bash
$ docker-compose up -d
Creating network "elasticsearch-logstash-kibana_elastic" with driver "bridge"
Creating es ... done
Creating log ... done
Creating kib ... done
```

## Snippet: Stopping and Removing ELK Stack Containers
Description: Command to stop and remove all ELK stack containers and associated networks using Docker Compose.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_4
Language: bash

```bash
$ docker-compose down
```

## Snippet: Verifying ELK Stack Container Status
Description: Shows how to list the running ELK containers with docker ps command, displaying container IDs, images, commands, status, and port mappings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_3
Language: bash

```bash
$ docker ps
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                    PORTS                                                                                            NAMES
173f0634ed33        logstash:7.8.0        "/usr/local/bin/dock…"   43 seconds ago      Up 41 seconds             0.0.0.0:5000->5000/tcp, 0.0.0.0:5044->5044/tcp, 0.0.0.0:9600->9600/tcp, 0.0.0.0:5000->5000/udp   log
b448fd3e9b30        kibana:7.8.0          "/usr/local/bin/dumb…"   43 seconds ago      Up 42 seconds             0.0.0.0:5601->5601/tcp                                                                           kib
366d358fb03d        elasticsearch:7.8.0   "/tini -- /usr/local…"   43 seconds ago      Up 42 seconds (healthy)   0.0.0.0:9200->9200/tcp, 0.0.0.0:9300->9300/tcp                                                   es
```

## Snippet: Project Structure for ELK Stack Docker Compose Setup
Description: Shows the directory structure of the ELK stack Docker Compose project, containing only the docker-compose.yml file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Containers/elasticsearch-logstash-kibana/README.md#2025-04-17_snippet_0
Language: plaintext

```plaintext
.
└── docker-compose.yml
```