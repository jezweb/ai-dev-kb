# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day53.md
Language: multiple

## Snippet: Deploying Rancher as a Docker Container
Description: This command pulls and runs the Rancher container with the necessary port mappings (80, 443) and privileges to manage Kubernetes clusters from your local machine.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day53.md#2025-04-17_snippet_0
Language: bash

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher
```

## Snippet: Registering a Worker Node in Rancher
Description: Command to register a node with the worker role in a Rancher-managed Kubernetes cluster. This is used for nodes that will run application workloads rather than cluster management components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day53.md#2025-04-17_snippet_2
Language: shell

```shell
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --worker
```

## Snippet: Registering a Master Node in Rancher
Description: Command to register a node with both etcd and controlplane roles in a Rancher-managed Kubernetes cluster. This is used for the master node which manages the cluster control plane.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day53.md#2025-04-17_snippet_1
Language: shell

```shell
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --etcd --controlplane
```