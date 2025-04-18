# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day31.md
Language: multiple

## Snippet: Applying Kubernetes Network Policy
Description: Command to apply a NetworkPolicy configuration to a Kubernetes cluster using kubectl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day31.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl apply -f <filename>.yaml
```

## Snippet: Creating Kubernetes Network Policy for Frontend Traffic
Description: Example YAML configuration for a Kubernetes NetworkPolicy that controls ingress traffic to frontend pods. This policy allows traffic to pods labeled 'app=frontend' while denying traffic to all other pods.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day31.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: frontend-policy
spec:
  podSelector:
    matchLabels:
      app: frontend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector: {}
```