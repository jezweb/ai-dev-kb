# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day80.md
Language: multiple

## Snippet: Setting up ELK Stack with Docker Compose
Description: Command to start the ELK Stack using Docker Compose, which deploys Elasticsearch, Logstash, and Kibana containers locally.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day80.md#2025-04-17_snippet_0
Language: bash

```bash
docker-compose up -d
```

## Snippet: Accessing Kibana Web Interface
Description: URL endpoint to access the Kibana dashboard after deployment with default authentication credentials.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day80.md#2025-04-17_snippet_1
Language: markdown

```markdown
http://localhost:5601/\nUsername: elastic\nPassword: changeme or 90DaysOfDevOps
```