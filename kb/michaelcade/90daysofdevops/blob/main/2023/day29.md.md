# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md
Language: bash

## Snippet: Generating Falco Key Pair with falcoctl
Description: Uses falcoctl to generate a key pair for Falco's gRPC communication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md#2025-04-17_snippet_4
Language: bash

```bash
FALCOCTL_NAME=falco-grpc.default.svc.cluster.local FALCOCTL_PATH=$PWD falcoctl tls install
```

## Snippet: Installing Loki Stack with Helm in Kubernetes
Description: Installs the Loki stack including Promtail for log collection in a Kubernetes cluster using Helm.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md#2025-04-17_snippet_0
Language: bash

```bash
helm install loki --namespace=monitoring grafana/loki-stack
```

## Snippet: Installing Falco and Falco Exporter with Helm
Description: Adds the Falco Helm repository and installs Falco and Falco Exporter with custom certificates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md#2025-04-17_snippet_5
Language: bash

```bash
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm repo update
helm install falco falcosecurity/falco --set driver.kind=ebpf --set-file certs.server.key=$PWD/server.key,certs.server.crt=$PWD/server.crt,certs.ca.crt=$PWD/ca.crt --set falco.grpc.enabled=true,falco.grpcOutput.enabled=true,falco.grpc_output.enabled=true
helm install falco-exporter  --set-file certs.ca.crt=$PWD/ca.crt,certs.client.key=$PWD/client.key,certs.client.crt=$PWD/client.crt falcosecurity/falco-exporter
```

## Snippet: Querying Loki Logs in Grafana
Description: Example Loki query to filter logs from the etcd container containing the word 'compaction'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md#2025-04-17_snippet_2
Language: bash

```bash
{container="etcd"} |= `compaction`
```

## Snippet: Retrieving Grafana Admin Password and Service URL
Description: Retrieves the Grafana admin password from a Kubernetes secret and gets the service URL for accessing the Grafana UI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
minikube service grafana-np --url
```

## Snippet: Installing falcoctl for Falco Certificate Management
Description: Downloads and installs falcoctl, a tool for managing Falco certificates and keys.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day29.md#2025-04-17_snippet_3
Language: bash

```bash
LATEST=$(curl -sI https://github.com/falcosecurity/falcoctl/releases/latest | awk '/location: /{gsub("\r","",$2);split($2,v,"/");print substr(v[8],2)}')
curl --fail -LS "https://github.com/falcosecurity/falcoctl/releases/download/v${LATEST}/falcoctl_${LATEST}_linux_amd64.tar.gz" | tar -xz
sudo install -o root -g root -m 0755 falcoctl /usr/local/bin/falcoctl
```