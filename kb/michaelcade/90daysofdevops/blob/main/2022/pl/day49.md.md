# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day49.md
Language: markdown

## Snippet: Kubernetes Core Components Documentation
Description: Documentation outlining the main components and architecture of Kubernetes, including the Control Plane, Worker Nodes, kubelet, kube-proxy, and container runtime.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day49.md#2025-04-17_snippet_0
Language: markdown

```markdown
**Control Plane**
Every Kubernetes cluster requires a Control Plane node, the control plane's components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events.

**Worker Node**
A worker machine that runs Kubernetes workloads. It can be a physical (bare metal) machine or a virtual machine (VM). Each node can host one or more pods. Kubernetes nodes are managed by a control plane

**kubelet**
An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod.

**kube-proxy**
kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

**Container runtime**
The container runtime is the software that is responsible for running containers.
```