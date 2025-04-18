# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day23.md
Language: multiple

## Snippet: Defining an Insecure Kubernetes Pod Manifest in YAML
Description: This YAML snippet demonstrates a Kubernetes Pod manifest with several security misconfigurations, such as missing memory limits and running as root. It's used as an example for scanning with KubeSec.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day23.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: kubesec-demo
spec:
  containers:
    - name: kubesec-demo
      image: gcr.io/google-samples/node-hello:1.0
      securityContext:
        runAsNonRoot: false
```

## Snippet: Scanning Kubernetes Manifest with KubeSec in Shell
Description: This shell command demonstrates how to use the KubeSec tool to scan a Kubernetes manifest file (kubesec-test.yaml) for security issues. The output shows various security recommendations and explanations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day23.md#2025-04-17_snippet_1
Language: shell

```shell
$ kubesec scan kubesec-test.yaml
[
  {
    "object": "Pod/kubesec-demo.default",
    "valid": true,
    "message": "Passed with a score of 0 points",
    "score": 0,
    "scoring": {
      "advise": [
        {
          "selector": ".metadata .annotations .\"container.seccomp.security.alpha.kubernetes.io/pod\"",
          "reason": "Seccomp profiles set minimum privilege and secure against unknown threats"
        },
        {
          "selector": ".spec .serviceAccountName",
          "reason": "Service accounts restrict Kubernetes API access and should be configured with least privilege"
        },
        {
          "selector": "containers[] .securityContext .runAsNonRoot == true",
          "reason": "Force the running image to run as a non-root user to ensure least privilege"
        },
        {
          "selector": ".metadata .annotations .\"container.apparmor.security.beta.kubernetes.io/nginx\"",
          "reason": "Well defined AppArmor policies may provide greater protection from unknown threats. WARNING: NOT PRODUCTION READY"
        },
        {
          "selector": "containers[] .resources .requests .memory",
          "reason": "Enforcing memory requests aids a fair balancing of resources across the cluster"
        },
        {
          "selector": "containers[] .securityContext .runAsUser -gt 10000",
          "reason": "Run as a high-UID user to avoid conflicts with the host's user table"
        },
        {
          "selector": "containers[] .resources .limits .cpu",
          "reason": "Enforcing CPU limits prevents DOS via resource exhaustion"
        },
        {
          "selector": "containers[] .resources .requests .cpu",
          "reason": "Enforcing CPU requests aids a fair balancing of resources across the cluster"
        },
        {
          "selector": "containers[] .securityContext .readOnlyRootFilesystem == true",
          "reason": "An immutable root filesystem can prevent malicious binaries being added to PATH and increase attack cost"
        },
        {
          "selector": "containers[] .securityContext .capabilities .drop",
          "reason": "Reducing kernel capabilities available to a container limits its attack surface"
        },
        {
          "selector": "containers[] .resources .limits .memory",
          "reason": "Enforcing memory limits prevents DOS via resource exhaustion"
        },
        {
          "selector": "containers[] .securityContext .capabilities .drop | index(\"ALL\")",
          "reason": "Drop all capabilities and add only those required to reduce syscall attack surface"
        }
      ]
    }
  }
]
```