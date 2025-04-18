# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic%20Stack/extensions/enterprise-search/README.md
Language: multiple

## Snippet: Enabling Elasticsearch API Key Service
Description: YAML configuration to enable the required API key service in Elasticsearch's configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_2
Language: yaml

```yaml
xpack.security.authc.api_key.enabled: true
```

## Snippet: Configuring Enterprise Search Environment Variables
Description: YAML configuration demonstrating how to override Enterprise Search settings using environment variables in Docker Compose.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_5
Language: yaml

```yaml
enterprise-search:

  environment:
    ent_search.auth.source: standard
    worker.threads: '6'
```

## Snippet: Setting Enterprise Search Password in Docker Compose
Description: YAML configuration showing how to set a custom password for Enterprise Search in the Docker Compose environment variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_4
Language: yaml

```yaml
enterprise-search:

  environment:
    ENT_SEARCH_DEFAULT_PASSWORD: {{some strong password}}
```

## Snippet: Generating AES-256 Encryption Key using OpenSSL
Description: Console command for generating a strong encryption key using OpenSSL's AES-256 cipher. This key can be used for Enterprise Search encryption.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_1
Language: console

```console
$ openssl enc -aes-256 -P

enter aes-256-cbc encryption password: <a strong password>
Verifying - enter aes-256-cbc encryption password: <repeat your strong password>
...

key=<generated AES key>
```

## Snippet: Configuring Enterprise Search Host in Kibana
Description: YAML configuration to set the Enterprise Search host URL in Kibana's configuration file for management interface integration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_3
Language: yaml

```yaml
enterpriseSearch.host: http://enterprise-search:3002
```

## Snippet: Configuring Encryption Keys in Enterprise Search YAML
Description: YAML configuration showing two formats for specifying encryption keys in enterprise-search.yml. Keys are required for initial startup and can be specified either as a list or array.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/Monitoring/Elastic Stack/extensions/enterprise-search/README.md#2025-04-17_snippet_0
Language: yaml

```yaml
secret_management.encryption_keys: [my_first_encryption_key, my_second_encryption_key, ...]
```