# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day69.md
Language: multiple

## Snippet: AWX Demo Configuration for Kubernetes
Description: YAML configuration for deploying AWX demo instance in Kubernetes, specifying the service type as ClusterIP.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day69.md#2025-04-17_snippet_0
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

## Snippet: AWX Password Retrieval Command
Description: Bash command to retrieve the admin password from Kubernetes secrets for AWX deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day69.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get secret awx-demo-admin-password -o jsonpath="{.data.password}" -n awx| base64 --decode
```