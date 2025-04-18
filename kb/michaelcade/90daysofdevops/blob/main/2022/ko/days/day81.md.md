# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day81.md
Language: yaml

## Snippet: Configuring FluentBit ConfigMap for Kubernetes
Description: A Kubernetes ConfigMap configuration for FluentBit that defines parsers, service settings, inputs, filters, and outputs for log collection and forwarding to Elasticsearch
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day81.md#2025-04-17_snippet_0
Language: yaml

```yaml
Name:         fluent-bit
Namespace:    default
Labels:       app.kubernetes.io/instance=fluent-bit
              app.kubernetes.io/managed-by=Helm
              app.kubernetes.io/name=fluent-bit
              app.kubernetes.io/version=1.8.14
              helm.sh/chart=fluent-bit-0.19.21
Annotations:  meta.helm.sh/release-name: fluent-bit
              meta.helm.sh/release-namespace: default

Data
====
custom_parsers.conf:
----
[PARSER]
    Name docker_no_time
    Format json
    Time_Keep Off
    Time_Key time
    Time_Format %Y-%m-%dT%H:%M:%S.%L

fluent-bit.conf:
----
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
    Name Kubernetes
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