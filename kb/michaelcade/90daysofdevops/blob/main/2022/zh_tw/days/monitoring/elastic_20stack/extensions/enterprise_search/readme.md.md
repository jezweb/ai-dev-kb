# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic%20Stack/extensions/enterprise-search/README.md
Language: multiple

## Snippet: Starting Enterprise Search with Docker Compose
Description: Console command to start the stack including Enterprise Search using Docker Compose.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_4
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/enterprise-search/enterprise-search-compose.yml up
```

## Snippet: Configuring Enterprise Search Encryption Keys in YAML
Description: YAML configuration for specifying encryption keys required for Enterprise Search startup. Shows two different formats for defining multiple encryption keys.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
secret_management.encryption_keys: [my_first_encryption_key, my_second_encryption_key, ...]
```

## Snippet: Restarting Enterprise Search Container
Description: Console command to restart the Enterprise Search container after configuration changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_7
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/enterprise-search/enterprise-search-compose.yml restart enterprise-search
```

## Snippet: Enabling Elasticsearch API Key Service
Description: YAML configuration to enable the required API key service in Elasticsearch.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_2
Language: yaml

```yaml
xpack.security.authc.api_key.enabled: true
```

## Snippet: Setting Enterprise Search Password in Docker Compose
Description: YAML configuration example for setting a custom password for Enterprise Search in the Docker Compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_5
Language: yaml

```yaml
enterprise-search:

  environment:
    ENT_SEARCH_DEFAULT_PASSWORD: {{some strong password}}
```

## Snippet: Generating AES-256 Encryption Key Using OpenSSL
Description: Command line example showing how to generate a strong encryption key using OpenSSL's AES-256 cipher.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_1
Language: console

```console
$ openssl enc -aes-256 -P

enter aes-256-cbc encryption password: <a strong password>
Verifying - enter aes-256-cbc encryption password: <repeat your strong password>
...

key=<generated AES key>
```

## Snippet: Configuring Enterprise Search Environment Variables
Description: YAML configuration showing how to override Enterprise Search settings using environment variables in Docker Compose.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_6
Language: yaml

```yaml
enterprise-search:

  environment:
    ent_search.auth.source: standard
    worker.threads: '6'
```

## Snippet: Configuring Enterprise Search Host in Kibana
Description: YAML configuration to set the Enterprise Search host URL in Kibana configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_3
Language: yaml

```yaml
enterpriseSearch.host: http://enterprise-search:3002
```