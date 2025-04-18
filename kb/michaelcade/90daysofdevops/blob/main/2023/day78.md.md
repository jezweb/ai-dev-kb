# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md
Language: multiple

## Snippet: Downloading and Installing Istio
Description: Commands to download the latest version of Istio, add it to the PATH, and verify the installation prerequisites.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_1
Language: bash

```bash
curl -L https://istio.io/downloadIstio | sh -
cd istio-1.16.1
export PATH=$PWD/bin:$PATH
istioctl x precheck
```

## Snippet: Verifying Istio Component Deployment
Description: Command to check the status of all Istio components in the istio-system namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl get all -n istio-system
```

## Snippet: Deploying Bookinfo Application
Description: Commands to deploy the Bookinfo sample application and verify its deployment status.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
kubectl get all
```

## Snippet: Deploying Istio Ingress Gateway Configuration
Description: Applies the Istio ingress gateway and virtual service configuration for the bookinfo application, which defines how external traffic should be routed to the application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
```

## Snippet: Enabling Sidecar Injection for Default Namespace
Description: Commands to label the default namespace for automatic sidecar injection and verify the label.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl label namespace default istio-injection=enabled
kubectl get ns --show-labels
```

## Snippet: Verifying Kubernetes Cluster Status
Description: Commands to check the status of Kubernetes nodes and pods across all namespaces.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl get nodes -o wide
kubectl get pods -A
```

## Snippet: Testing Connectivity to Product Page Service
Description: Uses the sleep pod to execute a curl command to test connectivity to the productpage service running on port 9080, verifying the service mesh is functioning correctly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl exec sleep-75bbc86479-xw5lw -c sleep -- curl -sS productpage:9080
```

## Snippet: Retrieving Istio Gateway Information
Description: Gets the service information for the Istio system namespace to identify the external IP and port for accessing the application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_13
Language: bash

```bash
kubectl get svc -n istio-system
```

## Snippet: Installing Istio with Demo Profile
Description: Command to install Istio using the demo profile, which provides a minimal configuration for demonstration purposes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_2
Language: bash

```bash
istioctl install --set profile=demo -y
```

## Snippet: Deploying a Sleep Pod for Testing in Istio
Description: Deploys a sleep container from the Istio samples directory to test connectivity within the service mesh.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl apply -f samples/sleep/sleep.yaml
```

## Snippet: Checking Pod Deployment Status
Description: Verifies that the sleep pod has been deployed to the default namespace and has the Istio sidecar injected, indicated by 2/2 containers running.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl get pods
```

## Snippet: Testing External Access to the Application
Description: Uses curl to test external access to the product page through the Istio ingress gateway using the previously exported environment variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_15
Language: bash

```bash
curl INGRESS_HOST:INGRESS_PORT/productpage
```

## Snippet: Product Page Connection Test Output
Description: Shows the output of the curl command, displaying the HTML response from the productpage service which confirms connectivity through the service mesh.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_10
Language: html

```html
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1683  100  1683    0     0  69202      0 --:--:-- --:--:-- --:--:-- 70125
<!DOCTYPE html>
<html>
<head>
    <title>Simple Bookstore App</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="static/bootstrap/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="static/bootstrap/css/bootstrap-theme.min.css">

</head>
<body>
    
    
<p>
    <h3>Hello! This is a simple bookstore application consisting of three services as shown below</h3>
</p>
```

## Snippet: Gateway Deployment Confirmation
Description: Shows the output confirming successful creation of both the gateway and virtual service objects needed for external access to the application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_12
Language: bash

```bash
gateway.networking.istio.io/bookinfo-gateway created
virtualservice.networking.istio.io/bookinfo created
```

## Snippet: Setting Environment Variables for Gateway Access
Description: Exports environment variables with the Istio ingress gateway's external IP address and HTTP port for convenient access to the exposed application.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_14
Language: bash

```bash
export INGRESS_HOST=[IP_from_Istio_ingress_gateway]
export INGRESS_PORT=80
```

## Snippet: Pod Deployment Status Output
Description: Shows the output of the kubectl get pods command, confirming the sleep pod is running with the Istio sidecar injected (2/2 containers).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_8
Language: bash

```bash
sleep-75bbc86479-xw5lw           2/2     Running   0          36s
```

## Snippet: External Access Test Result
Description: Shows the beginning of the HTML response from the external access test, confirming that the application is accessible through the Istio ingress gateway.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day78.md#2025-04-17_snippet_16
Language: html

```html
!DOCTYPE html>
<html>
<head>
    <title>Simple Bookstore App</title>
```