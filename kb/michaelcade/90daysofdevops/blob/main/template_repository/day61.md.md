# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day61.md
Language: yaml

## Snippet: Defining a Kubernetes Network Policy
Description: A YAML configuration for a Network Policy that controls pod communication. This policy allows ingress traffic only to pods with the 'app: web' label, and only from sources with the 'role: monitoring' label, demonstrating network security isolation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day61.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: test-network-policy
  namespace: default
spec:
  podSelector:
    matchLabels:
      app: web
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - ipBlock:
        cidr: 172.17.0.0/16
        except:
        - 172.17.1.0/24
    - namespaceSelector:
        matchLabels:
          project: myproject
    - podSelector:
        matchLabels:
          role: monitoring
    ports:
    - protocol: TCP
      port: 6379
  egress:
  - to:
    - ipBlock:
        cidr: 10.0.0.0/24
    ports:
    - protocol: TCP
      port: 5978
```

## Snippet: Implementing Pod Security Policy in Kubernetes
Description: A YAML configuration for a Pod Security Policy that restricts privileges by disallowing privilege escalation, root containers, and host paths. This policy demonstrates security best practices for Pod deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day61.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'downwardAPI'
    - 'persistentVolumeClaim'
  hostNetwork: false
  hostIPC: false
  hostPID: false
  runAsUser:
    rule: 'MustRunAsNonRoot'
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  fsGroup:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  readOnlyRootFilesystem: false
```