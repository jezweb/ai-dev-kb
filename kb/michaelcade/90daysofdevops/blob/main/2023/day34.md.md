# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md
Language: bash

## Snippet: Extracting Kubernetes Service Account Token from Kube-proxy Pod
Description: Command to extract the Kubernetes service account token from a running kube-proxy pod in the kube-system namespace. This demonstrates how credentials can be accessed if a pod is compromised.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl -n kube-system exec $(kubectl get pods -n kube-system | grep kube-proxy | head -n 1 | awk '{print $1}') -- cat /var/run/secrets/kubernetes.io/serviceaccount/token
```

## Snippet: Creating a Kyverno Policy to Block Privileged Containers
Description: YAML definition for a Kyverno ClusterPolicy that prevents the creation of privileged containers. The policy validates that the privileged flag under securityContext is set to false for all containers in Pods.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl apply -f - << EOF
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: no-privileged-containers
  annotations:
    policies.kyverno.io/title: No Privileged Containers
    policies.kyverno.io/subject: Pod
spec:
  validationFailureAction: Enforce
  rules:
    - name: no-privileged-containers
      match:
        any:
        - resources:
            kinds:
              - Pod
      validate:
        message: >
          Privileged containers are not allowed!
        pattern:
          spec:
            containers:
              - =(securityContext):
                  =(privileged): "false"
EOF
```

## Snippet: Testing Unauthorized Access with Stolen Credentials
Description: Command to test if the stolen kube-proxy service account token works by attempting to list nodes in the cluster, demonstrating successful credential abuse.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get nodes
```

## Snippet: Testing Kyverno Policy with a Privileged Pod
Description: Example of creating a Pod with privileged access that should be blocked by the Kyverno policy. This demonstrates how admission controllers enforce security policies at resource creation time.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl apply -f - << EOF
apiVersion: v1
kind: Pod
metadata:
  name: privileged-container-demo
spec:
  containers:
  - name: privileged-container-demo
    image: nginx:latest
    securityContext:
      privileged: true
EOF
```

## Snippet: Finding ClusterRoleBindings for a Service Account
Description: Command to list all ClusterRoleBindings that are associated with the kube-proxy service account. This shows which cluster-wide roles are assigned to the kube-proxy service account.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get clusterrolebindings -o wide | grep kube-proxy
```

## Snippet: Examining ClusterRole Permissions
Description: Command to retrieve the detailed YAML definition of the system:node-proxier ClusterRole. This shows the specific permissions granted to this role, including permissions to interact with endpoints, services, nodes, and events.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get clusterrole system:node-proxier -o yaml
```

## Snippet: Inspecting Deployment Controller ClusterRole
Description: Command to view the permissions assigned to the deployment-controller service account. This shows what resources the deployment controller can interact with, especially its permissions to manage ReplicaSets for Deployments.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl get clusterrole system:controller:deployment-controller -o yaml
```

## Snippet: Configuring kubectl with Stolen Service Account Token
Description: A series of commands that configure kubectl to use a stolen service account token from kube-proxy, showing how credential theft can lead to unauthorized access in Kubernetes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_1
Language: bash

```bash
export KUBE_PROXY_POD_NAME=`kubectl get pods -n kube-system | grep kube-proxy | head -n 1 | awk '{print $1}'`
export TOKEN=`kubectl -n kube-system exec $KUBE_PROXY_POD_NAME -- cat /var/run/secrets/kubernetes.io/serviceaccount/token`
export API_SERVER_URL=`kubectl config view --minify --output jsonpath="{.clusters[*].cluster.server}"`
kubectl -n kube-system exec $KUBE_PROXY_POD_NAME -- cat /var/run/secrets/kubernetes.io/serviceaccount/ca.crt > /tmp/ca.crt
kubectl config set-cluster access-test --server=$API_SERVER_URL --certificate-authority=/tmp/ca.crt
kubectl config set-context access-test --cluster=access-test
kubectl config set-credentials user --token=$TOKEN
kubectl config set-context access-test --user=user
kubectl config use-context access-test
```

## Snippet: Retrieving Service Account for Kube-Proxy DaemonSet
Description: Command to retrieve the service account associated with the kube-proxy DaemonSet using a jsonpath query. This helps identify which service account is used by the kube-proxy component.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl -n kube-system get daemonset kube-proxy -o=jsonpath='{.spec.template.spec.serviceAccount}'
```

## Snippet: Installing Kyverno Admission Controller with Helm
Description: Helm commands to add the Kyverno repository and install both Kyverno and its default policies. This sets up Kyverno admission controller with a single replica in a dedicated namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day34.md#2025-04-17_snippet_7
Language: bash

```bash
helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo update
helm install kyverno kyverno/kyverno -n kyverno --create-namespace --set replicaCount=1
helm install kyverno-policies kyverno/kyverno-policies -n kyverno
```