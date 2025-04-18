# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day53.md
Language: bash

## Snippet: Registering a Kubernetes Worker Node with Rancher Agent
Description: Docker command to register a node as a worker component in a Rancher-managed Kubernetes cluster. This configures the node to serve as a worker in the cluster with the same token and CA checksum as the master node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day53.md#2025-04-17_snippet_2
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --worker
```

## Snippet: Registering a Kubernetes Master Node with Rancher Agent
Description: Docker command to register a node as both etcd and control-plane components in a Rancher-managed Kubernetes cluster. This configures the node to serve as a master in the cluster with the specified token and CA checksum.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day53.md#2025-04-17_snippet_1
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --etcd --controlplane
```

## Snippet: Deploying Rancher as a Docker Container
Description: Command to run Rancher server as a Docker container with ports 80 and 443 exposed. This sets up Rancher with automatic restart unless explicitly stopped and runs it in privileged mode.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day53.md#2025-04-17_snippet_0
Language: bash

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher
```