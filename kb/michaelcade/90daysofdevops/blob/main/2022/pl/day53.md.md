# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day53.md
Language: bash

## Snippet: Registering Master Node in Rancher Cluster
Description: This Docker command registers a master node (with etcd and controlplane roles) in a Rancher-managed Kubernetes cluster. It includes the necessary parameters for connecting to the Rancher server and configuring the node's roles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day53.md#2025-04-17_snippet_1
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --etcd --controlplane
```

## Snippet: Deploying Rancher as a Docker Container
Description: This command pulls the Rancher image and runs it as a Docker container, exposing it on ports 80 and 443. It enables access to the Rancher UI for cluster management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day53.md#2025-04-17_snippet_0
Language: bash

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher
```

## Snippet: Registering Worker Node in Rancher Cluster
Description: This Docker command registers a worker node in a Rancher-managed Kubernetes cluster. It includes the necessary parameters for connecting to the Rancher server and configuring the node as a worker.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day53.md#2025-04-17_snippet_2
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --worker
```