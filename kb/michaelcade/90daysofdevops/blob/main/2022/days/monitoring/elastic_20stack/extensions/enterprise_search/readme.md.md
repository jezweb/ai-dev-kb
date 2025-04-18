# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic%20Stack/extensions/enterprise-search/README.md
Language: multiple

## Snippet: Starting Enterprise Search with Docker Compose
Description: Command-line example for starting Enterprise Search using Docker Compose with the necessary configuration files. This command launches Enterprise Search alongside the other components in the Elastic Stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_4
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/enterprise-search/enterprise-search-compose.yml up
```

## Snippet: Setting a Secure Enterprise Search Password in Docker Compose
Description: YAML snippet for configuring a secure password for Enterprise Search in the Docker Compose file. This environment variable should be set before the first boot of Enterprise Search.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_5
Language: yaml

```yaml
enterprise-search:

  environment:
    ENT_SEARCH_DEFAULT_PASSWORD: {{some strong password}}
```

## Snippet: Configuring Encryption Keys in Enterprise Search YAML Configuration
Description: Example YAML configurations for adding encryption keys to Enterprise Search. Enterprise Search requires one or more encryption keys to be configured before initial startup to function properly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
secret_management.encryption_keys: [my_first_encryption_key, my_second_encryption_key, ...]
```

## Snippet: Restarting Enterprise Search Container after Configuration Changes
Description: Command-line example for restarting the Enterprise Search container after making configuration changes. This ensures that the new configuration is applied to the running service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_7
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/enterprise-search/enterprise-search-compose.yml restart enterprise-search
```

## Snippet: Setting Enterprise Search Configuration Options in Docker Compose
Description: YAML snippet showing how to override Enterprise Search configuration options using environment variables in the Docker Compose file. This example sets the authentication source and number of worker threads.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_6
Language: yaml

```yaml
enterprise-search:

  environment:
    ent_search.auth.source: standard
    worker.threads: '6'
```

## Snippet: Enabling Elasticsearch API Key Service in YAML Configuration
Description: YAML configuration snippet for enabling Elasticsearch's API key service, which is required by Enterprise Search to function. This setting must be added to the Elasticsearch configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_2
Language: yaml

```yaml
xpack.security.authc.api_key.enabled: true
```

## Snippet: Generating Strong Encryption Keys with OpenSSL
Description: Command-line example using OpenSSL to generate a strong AES-256 encryption key for Enterprise Search. This generates a secure key that can be used in the Enterprise Search configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_1
Language: console

```console
$ openssl enc -aes-256 -P

enter aes-256-cbc encryption password: <a strong password>
Verifying - enter aes-256-cbc encryption password: <repeat your strong password>
...

key=<generated AES key>
```

## Snippet: Configuring Enterprise Search Host in Kibana YAML
Description: YAML configuration snippet for Kibana to enable the management interface for Enterprise Search. This setting specifies the Enterprise Search host URL for Kibana to connect to.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_3
Language: yaml

```yaml
enterpriseSearch.host: http://enterprise-search:3002
```