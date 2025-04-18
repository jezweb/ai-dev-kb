# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md
Language: bash

## Snippet: Creating Application Namespace and Service Account
Description: Commands to create a dedicated namespace for the web application and a service account within that namespace. The service account will be used by the application to authenticate with Vault.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_15
Language: bash

```bash
kubectl create sa internal-app -n devwebapp
```

## Snippet: Deploying and Verifying Application with Vault Integration
Description: Commands to deploy the web application pod to the Kubernetes cluster and verify that it can access the secret stored in Vault. The final command checks if the credentials were correctly injected into the pod.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_17
Language: bash

```bash
kubectl exec --stdin=true --tty=true devwebapp -n devwebapp -c devwebapp -- cat /vault/secrets/credentials.txt
```

## Snippet: Creating Kubernetes Authentication Role
Description: Command to create a Kubernetes authentication role that binds the service account, namespace, and policy together. This role defines which pods can access specific secrets based on their service account and namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_14
Language: bash

```bash
vault write auth/kubernetes/role/devweb-app \
        bound_service_account_names=internal-app \
        bound_service_account_namespaces=webdevapp \
        policies=devwebapp \
        ttl=24h
```

## Snippet: Joining and Unsealing Additional Vault Pods
Description: Commands to join the other Vault pods (vault-1 and vault-2) to the Raft cluster and unseal them using the same unseal key. This completes the Vault cluster setup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl exec vault-1 -n vault -- vault operator unseal $VAULT_UNSEAL_KEY

kubectl exec vault-2 -n vault -- vault operator unseal $VAULT_UNSEAL_KEY
```

## Snippet: Enabling KV Secrets Engine in Vault
Description: Command executed inside the Vault pod to enable the Key-Value version 2 secrets engine at the path '/secret'. This allows storing and retrieving secrets.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_10
Language: bash

```bash
vault secrets enable -path=secret kv-v2
```

## Snippet: Creating Web Application Pod with Vault Integration
Description: Command to create a YAML file defining a pod that uses the Vault Agent Injector for secrets. The annotations specify the role to use and which secret to inject into the pod.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_16
Language: bash

```bash
cat > devwebapp.yaml <<EOF
---
apiVersion: v1
kind: Pod
metadata:
  name: devwebapp
  labels:
    app: devwebapp
  annotations:
    vault.hashicorp.com/agent-inject: "true"
    vault.hashicorp.com/role: "devweb-app"
    vault.hashicorp.com/agent-inject-secret-credentials.txt: "secret/data/devwebapp/config"
spec:
  serviceAccountName: internal-app
  containers:
    - name: devwebapp
      image: jweissig/app:0.0.1
EOF
```

## Snippet: Accessing Vault Root Token
Description: Command to extract the root token from the cluster-keys.json file. This token provides full administrative access to Vault and is needed to enable the secrets engine.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_8
Language: bash

```bash
jq -r ".root_token" cluster-keys.json
```

## Snippet: Configuring Kubernetes Authentication in Vault
Description: Commands to enable and configure Kubernetes authentication in Vault. This allows Kubernetes pods to authenticate with Vault using their service account token.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_12
Language: bash

```bash
vault write auth/kubernetes/config \
    kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443"
```

## Snippet: Creating Vault Raft Configuration Values File
Description: Command to create a Helm values file that configures Vault to use high availability mode with Raft consensus protocol. This enables a clustered deployment of Vault.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_3
Language: bash

```bash
cat > helm-vault-raft-values.yml <<EOF
server:
  affinity: ""
  ha:
    enabled: true
    raft: 
      enabled: true
EOF
```

## Snippet: Accessing and Using Vault Unseal Keys
Description: Commands to extract the unseal key from the JSON file, store it in a variable, and use it to unseal the first Vault pod (vault-0). The unseal process decrypts Vault's storage to make it accessible.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl exec vault-0 -n vault -- vault operator unseal $VAULT_UNSEAL_KEY
```

## Snippet: Deploying Vault to Kubernetes using Helm
Description: Command to install Vault to a dedicated namespace in the Kubernetes cluster using Helm and the previously created values file. This creates a new namespace called 'vault'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_4
Language: bash

```bash
helm install vault hashicorp/vault --namespace vault --values helm-vault-raft-values.yml --create-namespace
```

## Snippet: Initializing Vault with Key Sharing
Description: Command to initialize the Vault cluster with key sharing configuration. It generates a root key split into shares and sets the threshold required to unseal Vault, storing the keys in JSON format.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl exec vault-0 -n vault -- vault operator init \
    -key-shares=1 \
    -key-threshold=1 \
    -format=json > cluster-keys.json
```

## Snippet: Creating Access Policy for Web Application
Description: Command to create a policy named 'devwebapp' that allows read access to the specific secret path for the web application. This defines what the application is allowed to access in Vault.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_13
Language: bash

```bash
vault policy write devwebapp - <<EOF
path "secret/data/devwebapp/config" {
  capabilities = ["read"]
}
EOF
```

## Snippet: Installing HashiCorp Vault CLI on macOS
Description: Commands to install HashiCorp Vault CLI on a macOS system using Homebrew. This installs the vault binary which provides access to all vault subcommands.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_0
Language: bash

```bash
brew install hashicorp/tap/vault
```

## Snippet: Accessing Vault Pod Shell for Configuration
Description: Command to execute a shell in the vault-0 pod, which is needed to perform Vault configuration tasks like enabling secrets engines and creating policies.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl exec --stdin=true --tty=true vault-0 -n vault -- /bin/sh
```

## Snippet: Starting Minikube Cluster with Required Add-ons
Description: Command to start a Minikube Kubernetes cluster with specific add-ons and configurations needed for the Vault deployment, including volume snapshots and CSI driver support.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_1
Language: bash

```bash
minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p demo --kubernetes-version=1.26.0
```

## Snippet: Creating and Accessing Application Secrets in Vault
Description: Commands to create a username and password secret for a web application and verify the secret was created correctly. The secret is stored at a specific path for the application to access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_11
Language: bash

```bash
vault kv get secret/devwebapp/config
```

## Snippet: Installing Helm and Adding HashiCorp Repository
Description: Commands to install Helm package manager on macOS and add the HashiCorp helm repository, which contains the Vault chart used for deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day39.md#2025-04-17_snippet_2
Language: bash

```bash
helm repo add hashicorp https://helm.releases.hashicorp.com
```