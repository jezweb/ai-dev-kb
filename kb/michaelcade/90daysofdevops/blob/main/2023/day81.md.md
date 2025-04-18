# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md
Language: bash

## Snippet: Deploying Istio Sample Addons in Kubernetes
Description: Command to deploy the observability tools (Prometheus, Grafana, Jaeger, Kiali) included in the Istio sample addons.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl apply -f samples/addons
```

## Snippet: Checking Istio System Pods in Kubernetes
Description: Command to verify that all observability pods are running correctly in the istio-system namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl get pods -n istio-system
```

## Snippet: Opening Prometheus Dashboard with Istioctl
Description: Command to open the Prometheus dashboard using the istioctl utility, which launches a browser window.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_7
Language: bash

```bash
istioctl dashboard prometheus
```

## Snippet: Opening Kiali Dashboard with Istioctl
Description: Command to open the Kiali dashboard using the istioctl utility for service mesh visualization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_15
Language: bash

```bash
istioctl dashboard kiali
```

## Snippet: Listing All Services in Istio System Namespace
Description: Command to list all services in the istio-system namespace, including the observability services.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl get svc -n istio-system
```

## Snippet: Opening Jaeger Dashboard with Istioctl
Description: Command to open the Jaeger dashboard using the istioctl utility for distributed tracing visualization.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_14
Language: bash

```bash
istioctl dashboard jaeger
```

## Snippet: Generating Load with Multiple Requests to Bookinfo
Description: Command to generate 100 sequential requests to the Bookinfo application to create measurable traffic.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_12
Language: bash

```bash
for i in $(seq 1 100); do curl -s -o /dev/null "http://bookinfo.io/productpage"; done
```

## Snippet: Prometheus Query for Istio Request Metrics
Description: Example Prometheus query to display total requests processed by Istio. This query is entered in the Prometheus UI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_8
Language: bash

```bash
istio_requests_total
```

## Snippet: Generating Heavier Load with 300 Requests to Bookinfo
Description: Command to generate 300 sequential requests to the Bookinfo application to create more significant traffic.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_13
Language: bash

```bash
for i in $(seq 1 300); do curl -s -o /dev/null "http://bookinfo.io/productpage"; done
```

## Snippet: Checking Prometheus Service in Kubernetes
Description: Command to verify the Prometheus service is correctly configured in the istio-system namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get svc prometheus -n istio-system
```

## Snippet: Opening Grafana Dashboard with Istioctl
Description: Command to open the Grafana dashboard using the istioctl utility, which launches a browser window.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_11
Language: bash

```bash
istioctl dashboard grafana
```

## Snippet: Generating Test Traffic to Bookinfo Application
Description: Command to send HTTP requests to the Bookinfo application to generate traffic for observation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_6
Language: bash

```bash
curl "http://bookinfo.io/productpage"
```

## Snippet: Changing to Istio Installation Directory in Bash
Description: Command to navigate to the Istio installation directory. This is a prerequisite step before deploying sample observability addons.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_0
Language: bash

```bash
cd istio-1.16.1
```

## Snippet: Prometheus Service Status Output
Description: Example output showing the Prometheus service details including its ClusterIP and port.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_5
Language: bash

```bash
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
prometheus   ClusterIP   10.43.234.212   <none>        9090/TCP   25h
```

## Snippet: Istio System Services Status Output
Description: Example output showing all services in the istio-system namespace with their types, IPs, and ports.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_10
Language: bash

```bash
NAME                   TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)                                                                      AGE
istiod                 ClusterIP      10.43.249.242   <none>         15010/TCP,15012/TCP,443/TCP,15014/TCP                                        7d
istio-egressgateway    ClusterIP      10.43.75.47     <none>         80/TCP,443/TCP                                                               7d
istio-ingressgateway   LoadBalancer   10.43.51.40     [HAHA.NO.NICE.TRY]   15021:31000/TCP,80:32697/TCP,443:30834/TCP,31400:30953/TCP,15443:30733/TCP   7d
grafana                ClusterIP      10.43.115.239   <none>         3000/TCP                                                                     32h
tracing                ClusterIP      10.43.237.214   <none>         80/TCP,16685/TCP                                                             32h
zipkin                 ClusterIP      10.43.241.104   <none>         9411/TCP                                                                     32h
jaeger-collector       ClusterIP      10.43.43.212    <none>         14268/TCP,14250/TCP,9411/TCP                                                 32h
kiali                  ClusterIP      10.43.51.161    <none>         20001/TCP,9090/TCP                                                           32h
prometheus             ClusterIP      10.43.234.212   <none>         9090/TCP                                                                     32h
```

## Snippet: Displaying Istio System Pods Status Output
Description: Example output showing the status of all pods in the istio-system namespace, including the observability components.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day81.md#2025-04-17_snippet_3
Language: bash

```bash
NAME                                    READY   STATUS    RESTARTS   AGE
istio-egressgateway-7475c75b68-mpxf7    1/1     Running   0          5d15h
istiod-885df7bc9-f9k7c                  1/1     Running   0          5d15h
istio-ingressgateway-6688c7f65d-szxf9   1/1     Running   0          5d15h
jaeger-54b7b57547-vsnhl                 1/1     Running   0          34s
prometheus-7b8b9dd44c-kd77d             2/2     Running   0          32s
grafana-b854c6c8-fhjlh                  1/1     Running   0          35s
kiali-5ff88f8595-fnk8t                  1/1     Running   0          33s
```