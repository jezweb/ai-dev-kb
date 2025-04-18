# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic%20Stack/extensions/enterprise-search/README.md
Language: multiple

## Snippet: Configuring Encryption Keys in Enterprise Search YAML (Format 2)
Description: An alternative format for configuring encryption keys in the enterprise-search.yml configuration file using an array notation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_1
Language: yaml

```yaml
secret_management.encryption_keys: [my_first_encryption_key, my_second_encryption_key, ...]
```

## Snippet: Configuring Enterprise Search via Environment Variables
Description: Example showing how to override Enterprise Search configuration options by setting environment variables in the Docker Compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_7
Language: yaml

```yaml
enterprise-search:

  environment:
    ent_search.auth.source: standard
    worker.threads: '6'
```

## Snippet: Configuring Encryption Keys in Enterprise Search YAML (Format 1)
Description: Enterprise Search requires encryption keys to be configured before startup. This snippet shows the first format for configuring multiple encryption keys in the enterprise-search.yml file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
secret_management.encryption_keys:
  - my_first_encryption_key
  - my_second_encryption_key
  - ...
```

## Snippet: Configuring Enterprise Search Host in Kibana
Description: Kibana needs to be configured to connect to Enterprise Search. This snippet shows the required setting for kibana.yml to enable the Enterprise Search management interface.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_4
Language: yaml

```yaml
enterpriseSearch.host: http://enterprise-search:3002
```

## Snippet: Restarting Enterprise Search Container After Configuration Changes
Description: Command to restart the Enterprise Search container after making configuration changes. This applies the changes without restarting the entire stack.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_8
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/enterprise-search/enterprise-search-compose.yml restart enterprise-search
```

## Snippet: Starting Enterprise Search with Docker Compose
Description: Command to launch Enterprise Search as part of the Elastic Stack using Docker Compose. This combines the base docker-compose.yml with the enterprise-search extension compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_5
Language: console

```console
$ docker-compose -f docker-compose.yml -f extensions/enterprise-search/enterprise-search-compose.yml up
```

## Snippet: Generating AES-256 Encryption Key Using OpenSSL
Description: A command-line example showing how to generate a strong encryption key using OpenSSL with the AES-256 cipher. The generated key can be used for Enterprise Search encryption.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_2
Language: console

```console
$ openssl enc -aes-256 -P

enter aes-256-cbc encryption password: <a strong password>
Verifying - enter aes-256-cbc encryption password: <repeat your strong password>
...

key=<generated AES key>
```

## Snippet: Enabling Elasticsearch API Key Service in Configuration
Description: Enterprise Search requires Elasticsearch's API key service to be enabled. This YAML configuration snippet enables the service in the elasticsearch.yml file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_3
Language: yaml

```yaml
xpack.security.authc.api_key.enabled: true
```

## Snippet: Setting Enterprise Search Password in Docker Compose
Description: Example of how to set a stronger password for Enterprise Search by changing the ENT_SEARCH_DEFAULT_PASSWORD environment variable in the Docker Compose file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/tr/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_6
Language: yaml

```yaml
enterprise-search:

  environment:
    ENT_SEARCH_DEFAULT_PASSWORD: {{some strong password}}
```