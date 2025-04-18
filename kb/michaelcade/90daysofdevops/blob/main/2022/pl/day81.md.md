# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day81.md
Language: conf

## Snippet: Configuring FluentBit in Kubernetes via ConfigMap
Description: A comprehensive FluentBit configuration for Kubernetes that sets up log collection from containers and systemd, with outputs to Elasticsearch. Includes parser configuration, input sources, filters, and multiple output streams.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day81.md#2025-04-17_snippet_0
Language: conf

```conf
[PARSER]
    Name docker_no_time
    Format json
    Time_Keep Off
    Time_Key time
    Time_Format %Y-%m-%dT%H:%M:%S.%L

[SERVICE]
    Daemon Off
    Flush 1
    Log_Level info
    Parsers_File parsers.conf
    Parsers_File custom_parsers.conf
    HTTP_Server On
    HTTP_Listen 0.0.0.0
    HTTP_Port 2020
    Health_Check On

[INPUT]
    Name tail
    Path /var/log/containers/*.log
    multiline.parser docker, cri
    Tag kube.*
    Mem_Buf_Limit 5MB
    Skip_Long_Lines On

[INPUT]
    Name systemd
    Tag host.*
    Systemd_Filter _SYSTEMD_UNIT=kubelet.service
    Read_From_Tail On

[FILTER]
    Name kubernetes
    Match kube.*
    Merge_Log On
    Keep_Log Off
    K8S-Logging.Parser On
    K8S-Logging.Exclude On

[OUTPUT]
    Name es
    Match kube.*
    Host elasticsearch-master
    Logstash_Format On
    Retry_Limit False

[OUTPUT]
    Name es
    Match host.*
    Host elasticsearch-master
    Logstash_Format On
    Logstash_Prefix node
    Retry_Limit False
```