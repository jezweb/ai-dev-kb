# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day69.md
Language: yaml

## Snippet: Configuring AWX Deployment in Kubernetes
Description: YAML configuration for deploying AWX in a Kubernetes cluster, specifying the service type as ClusterIP.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day69.md#2025-04-17_snippet_0
Language: yaml

```yaml
---
apiVersion: awx.ansible.com/v1beta1
kind: AWX
metadata:
  name: awx-demo
spec:
  service_type: ClusterIP
```