# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md
Language: multiple

## Snippet: BookInfo Gateway Configuration
Description: YAML configuration for the Istio Gateway and VirtualService resources that expose the BookInfo application through the Istio Ingress Gateway. The Gateway listens on port 80 for any host, and the VirtualService routes traffic based on URI paths.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_10
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: bookinfo-gateway
spec:
  # The selector matches the ingress gateway pod labels.
  # If you installed Istio using Helm following the standard documentation, this would be "istio=ingress"
  selector:
    istio: ingressgateway # use istio default controller
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: bookinfo
spec:
  hosts:
  - "*"
  gateways:
  - bookinfo-gateway
  http:
  - match:
    - uri:
        exact: /productpage
    - uri:
        prefix: /static
    - uri:
        exact: /login
    - uri:
        exact: /logout
    - uri:
        prefix: /api/v1/products
    route:
    - destination:
        host: productpage
        port:
          number: 9080
```

## Snippet: Verifying Istio System Pods
Description: Command to check that all Istio components are running correctly in the istio-system namespace, including ztunnel pods which are essential for Ambient Mesh.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl get pods -n istio-system
```

## Snippet: Creating KinD Cluster for Ambient Mesh
Description: Command to create a KinD (Kubernetes in Docker) cluster with one control plane and two worker nodes. This configuration is suitable for testing Ambient Mesh.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_4
Language: bash

```bash
kind create cluster --config=- <<EOF
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: ambient
nodes:
- role: control-plane
- role: worker
- role: worker
EOF
```

## Snippet: Installing Istio with Ambient Profile
Description: Command to install Istio with the ambient profile using istioctl. The --skip-confirmation flag allows installation without manual confirmation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_6
Language: bash

```bash
istioctl install --set profile=ambient --skip-confirmation
```

## Snippet: Deploying BookInfo Sample Application
Description: Command to deploy the BookInfo sample application which consists of multiple microservices that will be used to demonstrate Ambient Mesh functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
```

## Snippet: Changing to Istio Directory
Description: Command to navigate into the extracted Istio directory to access the binaries and sample files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_2
Language: bash

```bash
cd istio-1.18.0-alpha.0/
```

## Snippet: Deploying Sleep and NotSleep Test Pods
Description: Commands to deploy the Sleep and NotSleep pods, which are utility pods used for testing connectivity to services within the mesh.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl apply -f samples/sleep/sleep.yaml
kubectl apply -f samples/sleep/notsleep.yaml
```

## Snippet: Testing Direct Service Connectivity from Sleep Pod
Description: Command to test direct connectivity to the ProductPage service from the Sleep pod without going through the Ingress Gateway.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_13
Language: bash

```bash
kubectl exec deploy/sleep -- curl -s http://productpage:9080/ | grep -o "<title>.*</title>"
```

## Snippet: Extracting Istio Archive
Description: Command to extract the downloaded Istio tarball to access the installation files and binary tools.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_1
Language: bash

```bash
tar -xf istio-1.18.0-alpha.0-linux-amd64.tar.gz istio-1.18.0-alpha.0/
```

## Snippet: Running Repeated Curl Test to Generate Traffic
Description: Loop command to repeatedly test connectivity to the ProductPage service from the NotSleep pod, generating traffic in the mesh for monitoring purposes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_16
Language: bash

```bash
for i in {1..10}; do   kubectl exec deploy/notsleep -- curl -s http://productpage:9080/ | grep -o "<title>.*</title>";   sleep 1; done
```

## Snippet: Checking ZTunnel Logs
Description: Command to view the logs from ztunnel pods to observe the HBONE protocol traffic handling between services in the Ambient Mesh.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_17
Language: bash

```bash
kubectl logs -n istio-system -l app=ztunnel
```

## Snippet: Enabling Ambient Mesh for Default Namespace
Description: Command to enable Ambient Mesh for the default namespace by applying the 'istio.io/dataplane-mode=ambient' label, which instructs ztunnel to handle mTLS and traffic routing for workloads in the namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_15
Language: bash

```bash
kubectl label namespace default istio.io/dataplane-mode=ambient
```

## Snippet: Applying BookInfo Gateway Configuration
Description: Command to apply the Gateway and VirtualService configuration, exposing the BookInfo application through the Istio Ingress Gateway.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
```

## Snippet: Downloading Istio Ambient Mesh Binary
Description: Command to download the Istio Alpha release that supports the Ambient Mesh profile. This uses wget to retrieve the Linux/AMD64 version of Istio 1.18.0-alpha.0.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_0
Language: bash

```bash
wget https://github.com/istio/istio/releases/download/1.18.0-alpha.0/istio-1.18.0-alpha.0-linux-amd64.tar.gz
```

## Snippet: Setting PATH Environment Variable for Istio CLI
Description: Command to add the Istio binary directory to the PATH environment variable, making the istioctl command available without specifying the full path.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_3
Language: bash

```bash
export PATH=$PWD/bin:$PATH
```

## Snippet: Testing Direct Service Connectivity from NotSleep Pod
Description: Command to test direct connectivity to the ProductPage service from the NotSleep pod without going through the Ingress Gateway.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_14
Language: bash

```bash
kubectl exec deploy/notsleep -- curl -s http://productpage:9080/ | grep -o "<title>.*</title>"
```

## Snippet: Testing Connectivity via Ingress Gateway
Description: Command to test connectivity to the BookInfo application through the Istio Ingress Gateway using the Sleep pod, verifying that the page title is returned correctly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_12
Language: bash

```bash
kubectl exec deploy/sleep -- curl -s http://istio-ingressgateway.istio-system/productpage | grep -o "<title>.*</title>"
```

## Snippet: Checking KinD Cluster Nodes
Description: Command to verify that the Kubernetes cluster was created successfully by displaying node information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day83.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get nodes -o wide
```