# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic%20Stack/extensions/enterprise-search/README.md
Language: multiple

## Snippet: Configuring Enterprise Search Encryption Keys in YAML
Description: YAML configuration showing how to specify encryption keys for Enterprise Search. Keys can be specified either as a list or inline array format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
secret_management.encryption_keys: [my_first_encryption_key, my_second_encryption_key, ...]
```

## Snippet: Setting Enterprise Search Password in Docker Compose
Description: YAML configuration showing how to set a custom password for Enterprise Search in the Docker Compose environment variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_4
Language: yaml

```yaml
enterprise-search:

  environment:
    ENT_SEARCH_DEFAULT_PASSWORD: {{some strong password}}
```

## Snippet: Generating AES-256 Encryption Key via OpenSSL
Description: Console command to generate a strong encryption key using OpenSSL's AES-256 cipher. Requires user input of a strong password.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_1
Language: console

```console
$ openssl enc -aes-256 -P

enter aes-256-cbc encryption password: <a strong password>
Verifying - enter aes-256-cbc encryption password: <repeat your strong password>
...

key=<generated AES key>
```

## Snippet: Configuring Enterprise Search Environment Variables
Description: YAML configuration demonstrating how to override Enterprise Search configuration options using environment variables in Docker Compose.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_5
Language: yaml

```yaml
enterprise-search:

  environment:
    ent_search.auth.source: standard
    worker.threads: '6'
```

## Snippet: Configuring Enterprise Search Host in Kibana
Description: YAML configuration to specify the Enterprise Search host URL in Kibana configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_3
Language: yaml

```yaml
enterpriseSearch.host: http://enterprise-search:3002
```

## Snippet: Enabling Elasticsearch API Key Service
Description: YAML configuration to enable the required API key service in Elasticsearch.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_2
Language: yaml

```yaml
xpack.security.authc.api_key.enabled: true
```