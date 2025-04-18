# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md
Language: multiple

## Snippet: Deploying Nginx on Kubernetes for Testing
Description: Creates a simple Nginx deployment in Kubernetes that will be used to demonstrate Falco's runtime detection capabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create deployment nginx --image=nginx:1.19
```

## Snippet: Creating Custom Falco Rule for Curl Detection
Description: Defines a custom Falco rule in YAML that will detect when the curl command is executed in any container. This would help detect potential data exfiltration attempts.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md#2025-04-17_snippet_3
Language: yaml

```yaml
customRules:
  rules-curl.yaml: |-
    - rule: DetectCurlCommandExecution
      desc: Detects the execution of the "curl" command
      condition: spawned_process and proc.name == curl
      output: "Curl command executed: %proc.cmdline"
      priority: WARNING
```

## Snippet: Accessing Pod Shell to Simulate Suspicious Activity
Description: Opens a bash shell inside the Nginx pod using kubectl exec command. This allows for simulating suspicious activities that Falco will detect.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl exec -it `kubectl get pod | grep nginx | awk '{print $1}'` -- bash
```

## Snippet: Upgrading Falco with Custom Rules Using Helm
Description: Helm command to upgrade the Falco installation with a custom rule file. The command configures Falco to use eBPF for monitoring and sets up certificates for secure communication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md#2025-04-17_snippet_4
Language: bash

```bash
helm upgrade --install  falco falcosecurity/falco --set driver.kind=ebpf --set-file certs.server.key=$PWD/server.key,certs.server.crt=$PWD/server.crt,certs.ca.crt=$PWD/ca.crt --set falco.grpc.enabled=true,falco.grpcOutput.enabled=true,falco.grpc_output.enabled=true -f <PATH_TO_RULE_YAML>
```

## Snippet: Installing Package During Container Runtime
Description: Demonstrates installing curl package in a running container, which is an unusual activity that Falco should detect as suspicious behavior.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md#2025-04-17_snippet_2
Language: bash

```bash
apt update && apt install -y curl
```

## Snippet: Simulating Malicious Behavior with Curl
Description: Executes curl command inside the container to trigger the custom Falco rule. This simulates how an attacker might attempt to exfiltrate data from a compromised container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day30.md#2025-04-17_snippet_5
Language: bash

```bash
curl https://google.com
```