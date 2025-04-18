# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day53.md
Language: bash

## Snippet: Deploying Rancher Using Docker
Description: Command to deploy Rancher as a Docker container on a local workstation. This creates a container that exposes ports 80 and 443 for accessing the Rancher UI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day53.md#2025-04-17_snippet_0
Language: bash

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher
```

## Snippet: Deploying Rancher Agent on Master Node
Description: Docker command to deploy the Rancher agent on a master node with etcd and controlplane roles. This registers the node with the Rancher server using a specific token and CA checksum.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day53.md#2025-04-17_snippet_1
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --etcd --controlplane
```

## Snippet: Deploying Rancher Agent on Worker Nodes
Description: Docker command to deploy the Rancher agent on worker nodes. This command is similar to the master node command but only includes the worker role parameter.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day53.md#2025-04-17_snippet_2
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --worker
```