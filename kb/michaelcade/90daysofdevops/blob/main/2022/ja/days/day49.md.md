# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day49.md
Language: markdown

## Snippet: Kubernetes Cluster Architecture Components
Description: Overview of core Kubernetes cluster components including API server, scheduler, controller manager, etcd, and worker nodes. These components work together to form the control plane and worker node architecture of a Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day49.md#2025-04-17_snippet_0
Language: markdown

```markdown
Cluster Components:
- API Server: Validates and configures data for API objects
- Scheduler: Assigns pods to nodes based on resources
- Controller Manager: Manages core control loops
- etcd: Key-value store for cluster data
- Worker Nodes: Run container runtime and kubelet
```

## Snippet: Kubernetes Resource Types and Definitions
Description: Documentation of various Kubernetes resource types including Pods, Deployments, ReplicaSets, StatefulSets, DaemonSets and Services. Each resource type serves a specific purpose in managing containerized applications.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day49.md#2025-04-17_snippet_1
Language: markdown

```markdown
Resource Types:
- Pods: Smallest deployable units
- Deployments: Manage pod lifecycle
- ReplicaSets: Ensure desired pod count
- StatefulSets: For stateful applications
- DaemonSets: Run pods on every node
- Services: Expose pods to network
```