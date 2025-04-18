# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day53.md
Language: bash

## Snippet: Rancher Worker Node Registration
Description: Docker command to register a worker node with Rancher, configuring it as a Kubernetes worker node.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day53.md#2025-04-17_snippet_2
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --worker
```

## Snippet: Rancher Master Node Registration
Description: Docker command to register a master node with Rancher, enabling both etcd and controlplane components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day53.md#2025-04-17_snippet_1
Language: bash

```bash
sudo docker run -d --privileged --restart=unless-stopped --net=host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run  rancher/rancher-agent:v2.6.3 --server https://10.0.0.1 --token mpq8cbjjwrj88z4xmf7blqxcfmwdsmq92bmwjpphdkklfckk5hfwc2 --ca-checksum a81944423cbfeeb92be0784edebba1af799735ebc30ba8cbe5cc5f996094f30b --etcd --controlplane
```

## Snippet: Deploying Rancher Container
Description: Command to deploy Rancher as a Docker container on the local workstation, exposing ports 80 and 443 for web access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day53.md#2025-04-17_snippet_0
Language: bash

```bash
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher
```