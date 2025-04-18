# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md
Language: multiple

## Snippet: Applying Virtual Service Configuration in Kubernetes
Description: This snippet applies a virtual service configuration for the Bookinfo application using kubectl. It sets up routing rules for all microservices to use their v1 versions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml
```

## Snippet: Istio Virtual Service with Conditional Routing
Description: This YAML configuration sets up a virtual service for the reviews microservice with conditional routing based on the 'end-user' header.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_6
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
    - reviews
  http:
  - match:
    - headers:
        end-user:
          exact: jason
    route:
    - destination:
        host: reviews
        subset: v2
  - route:
    - destination:
        host: reviews
        subset: v1
```

## Snippet: Applying Traffic Shifting Configuration in Kubernetes
Description: This command applies the traffic shifting configuration for the reviews service using kubectl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl apply -f samples/bookinfo/networking/virtual-service-reviews-50-v3.yaml
```

## Snippet: Configuring Destination Rules for Reviews Service in Istio
Description: This YAML snippet defines a Destination Rule for the Reviews service in Istio. It specifies three subsets (v1, v2, v3) corresponding to different versions of the service, using labels to distinguish between them.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_2
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: reviews
spec:
  host: reviews
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
  - name: v3
    labels:
      version: v3
```

## Snippet: Defining Virtual Services for Microservices in Istio
Description: This YAML configuration defines Virtual Services for multiple microservices (productpage, reviews, ratings, details) in Istio. Each Virtual Service specifies routing rules for its respective service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: productpage
spec:
  hosts:
  - productpage
  http:
  - route:
    - destination:
        host: productpage
        subset: v1
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
  - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings
spec:
  hosts:
  - ratings
  http:
  - route:
    - destination:
        host: ratings
        subset: v1
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: details
spec:
  hosts:
  - details
  http:
  - route:
    - destination:
        host: details
        subset: v1
---
```

## Snippet: Configuring Istio Ingress Gateway in YAML
Description: This YAML snippet defines an Istio Gateway resource that listens for HTTP traffic on port 80 for any host. It selects the default Istio ingress gateway controller.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: bookinfo-gateway
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"
```

## Snippet: Istio Virtual Service with Traffic Shifting
Description: This YAML configuration defines a virtual service for the reviews microservice that splits traffic between v1 (70%) and v3 (30%) subsets.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_9
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
    - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1
      weight: 70
    - destination:
        host: reviews
        subset: v3
      weight: 30
```

## Snippet: Applying Conditional Routing Configuration in Kubernetes
Description: This command applies the conditional routing configuration for the reviews service using kubectl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl apply -f samples/bookinfo/networking/virtual-service-reviews-test-v2.yaml
```

## Snippet: Verifying Istio Virtual Services and Destination Rules
Description: This command checks the status of virtual services (vs) and destination rules (dr) in the Kubernetes cluster using kubectl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get vs && kubectl get dr
```

## Snippet: Istio Virtual Service Configuration for Reviews Service
Description: This YAML configuration defines a virtual service for the reviews microservice, routing all traffic to the v1 subset.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_5
Language: yaml

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
  - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1
---
```

## Snippet: Deleting Previous Virtual Service Configuration
Description: This command removes the previously applied virtual service configuration for the reviews service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl delete -f samples/bookinfo/networking/virtual-service-reviews-test-v2.yaml
```

## Snippet: Testing Traffic Shifting with Curl
Description: This bash script uses a for loop to make 10 requests to the product page and grep for the reviews version to demonstrate the traffic split.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day80.md#2025-04-17_snippet_11
Language: bash

```bash
for i in {1..10}; do curl -s http://bookinfo.io/productpage | grep "reviews-v"; done
```