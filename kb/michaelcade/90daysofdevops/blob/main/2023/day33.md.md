# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md
Language: multiple

## Snippet: Testing Network Connection to Nginx
Description: Demonstrates how to test network connectivity to the Nginx service using a temporary curl pod.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_4
Language: bash

```bash
curl nginx
```

## Snippet: Creating Non-Root Nginx Pod with Security Context
Description: Demonstrates how to create an Nginx pod that runs as a non-root user with specific security context settings, including user/group ID and privilege escalation prevention.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl apply -f - << EOF
apiVersion: v1
kind: Pod
metadata:
  name: nginx-non-root
spec:
  containers:
  - name: nginx
    image: nginxinc/nginx-unprivileged
    securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        allowPrivilegeEscalation: false

EOF
```

## Snippet: Applying Network Policy for Nginx Access
Description: Creates a network policy that restricts access to the Nginx pod, allowing only pods with a specific label to connect.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl apply -f - << EOF
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: nginx-client-access
spec:
  podSelector:
    matchLabels:
      app: nginx
  ingress:
  - from:
    - podSelector:
        matchLabels:
          nginx: "client"
EOF
```

## Snippet: Creating Nginx Pod with Seccomp Profile
Description: Shows how to create an Nginx pod with a default seccomp profile (RuntimeDefault) to restrict system calls, enhancing security.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl apply -f - << EOF
apiVersion: v1
kind: Pod
metadata:
  name: nginx-seccomp-confined
spec:
  securityContext:
    seccompProfile:
        type: RuntimeDefault
  containers:
  - name: nginx
    image: nginxinc/nginx-unprivileged
    securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        allowPrivilegeEscalation: false

EOF
```

## Snippet: Generated Network Policy Example
Description: Example of a generated Kubernetes NetworkPolicy for a nginx pod, allowing ingress traffic on port 80.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_12
Language: yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  creationTimestamp: null
  name: nginx-network
  namespace: default
spec:
  ingress:
  - from:
    - podSelector: {}
    ports:
    - port: 80
      protocol: TCP
  podSelector:
    matchLabels:
      app: nginx
  policyTypes:
  - Ingress
  - Egress
status: {}
```

## Snippet: Testing Network Policy with Unlabeled Pod
Description: Demonstrates that an unlabeled pod cannot access the Nginx service after applying the network policy.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_6
Language: bash

```bash
curl --connect-timeout 1 nginx
```

## Snippet: Installing Inspektor Gadget with Krew
Description: Commands to install the Inspektor Gadget controller using Krew package manager and deploy gadgets in the cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl gadget deploy
```

## Snippet: Creating Nginx Deployment and Service
Description: Creates a basic Nginx deployment and exposes it as a service in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl create deployment nginx --image=nginx
kubectl expose deployment nginx --port=80
```

## Snippet: Starting Minikube with Cilium CNI
Description: Initializes a Minikube cluster with Cilium as the Container Network Interface (CNI) to support network policies.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_0
Language: bash

```bash
minikube start --cni cilium
```

## Snippet: Monitoring Network Policy Generation
Description: Commands to monitor network activity and generate network policies for a nginx pod.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl gadget advise network-policy report --input /tmp/network.log
```

## Snippet: Testing Network Policy with Labeled Pod
Description: Shows that a pod with the correct label can access the Nginx service after applying the network policy.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_7
Language: bash

```bash
curl --connect-timeout 1 nginx
```

## Snippet: Generated Seccomp Profile Example
Description: Example of a generated seccomp profile showing allowed system calls for a nginx pod.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_10
Language: json

```json
{
  "defaultAction": "SCMP_ACT_ERRNO",
  "architectures": [
    "SCMP_ARCH_X86_64",
    "SCMP_ARCH_X86",
    "SCMP_ARCH_X32"
  ],
  "syscalls": [
    {
      "names": [
        "access",
        "arch_prctl",
        "brk",
        "chown",
        "clone",
        "close",
        "connect",
        "dup",
        "dup2",
        "execve",
        "exit_group",
        "faccessat",
        "fcntl",
        "fstat",
        "futex",
        "getcwd",
        "getdents64",
        "getegid",
        "geteuid",
        "getgid",
        "getpgrp",
        "getpid",
        "getppid",
        "getuid",
        "ioctl",
        "lseek",
        "mmap",
        "mprotect",
        "munmap",
        "openat",
        "pipe",
        "prlimit64",
        "pselect6",
        "read",
        "rt_sigaction",
        "rt_sigprocmask",
        "rt_sigreturn",
        "select",
        "set_robust_list",
        "set_tid_address",
        "setns",
        "setpgid",
        "socket",
        "stat",
        "statfs",
        "sysinfo",
        "uname",
        "wait4",
        "write"
      ],
      "action": "SCMP_ACT_ALLOW"
    }
  ]
}
```

## Snippet: Monitoring Seccomp Profile Generation
Description: Commands to start and stop monitoring a nginx pod for generating seccomp profiles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day33.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl gadget advise seccomp-profile stop <traceid>
```