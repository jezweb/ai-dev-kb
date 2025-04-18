# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md
Language: bash

## Snippet: Authorizing GET Requests to Product Page in Istio
Description: This AuthorizationPolicy allows external clients to perform HTTP GET operations against the product page service. It uses a selector to target the productpage app and explicitly allows GET methods.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl apply -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: "get-productpage"
  namespace: default
spec:
  selector:
    matchLabels:
      app: productpage
  action: ALLOW
  rules:
  - to:
    - operation:
        methods: ["GET"]
EOF
```

## Snippet: Authorizing Reviews Service to Access Ratings in Istio
Description: This AuthorizationPolicy permits the reviews service to make GET requests to the ratings service. It uses service account identity for authentication and restricts HTTP methods to GET only.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_10
Language: bash

```bash
kubectl apply -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: "get-ratings"
  namespace: default
spec:
  selector:
    matchLabels:
      app: ratings
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/default/sa/bookinfo-reviews"]
    to:
    - operation:
        methods: ["GET"]
EOF
```

## Snippet: Authorizing Product Page to Access Details Service in Istio
Description: This policy allows the product page service to perform GET requests to the details service. It uses service account principals for authentication and only permits GET HTTP methods.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl apply -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: "get-details"
  namespace: default
spec:
  selector:
    matchLabels:
      app: details
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/default/sa/bookinfo-productpage"]
    to:
    - operation:
        methods: ["GET"]
EOF
```

## Snippet: Authorizing Product Page to Access Reviews in Istio
Description: This policy allows the product page service to make GET requests to the reviews service. It uses service account principals for authentication and limits the allowed HTTP methods to GET.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl apply -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: "get-reviews"
  namespace: default
spec:
  selector:
    matchLabels:
      app: reviews
  action: ALLOW
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/default/sa/bookinfo-productpage"]
    to:
    - operation:
        methods: ["GET"]
EOF
```

## Snippet: Denying All Traffic with Istio Authorization Policy in Kubernetes
Description: This snippet creates an empty AuthorizationPolicy that effectively denies all traffic in the default namespace. With no rules specified, the policy blocks all requests by default.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl apply -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: allow-nothing
  namespace: default
spec:
  {}
EOF
```

## Snippet: Testing Communication to Bookinfo App
Description: Executes a curl command from the sleep pod to the productpage service to verify connectivity before applying security policies.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl exec "$(kubectl get pod -l app=sleep -n sleep -o jsonpath={.items..metadata.name})" -c sleep -n sleep -- curl productpage.default.svc.cluster.local:9080 -s -o /dev/null -w "%{http_code}\n"
```

## Snippet: Deploying Sleep App from Istio Samples
Description: Deploys the sleep application from Istio samples to the sleep namespace to test inter-service communication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_2
Language: bash

```bash
cd istio-1.16.1
kubectl apply -f samples/sleep/sleep.yaml -n sleep
```

## Snippet: Applying Strict mTLS PeerAuthentication Policy
Description: Creates and applies an Istio PeerAuthentication policy with STRICT mTLS mode to the istio-system namespace, enforcing mTLS for all communication.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl apply -f - <<EOF
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: "default"
  namespace: "istio-system"
spec:
  mtls:
    mode: STRICT
EOF
```

## Snippet: Testing Authorization with curl from Sleep Pod in Kubernetes
Description: This command executes a curl request from a sleep pod to the product page service, showing the HTTP status code. It's used to verify if authorization policies are working correctly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl exec "$(kubectl get pod -l app=sleep -o jsonpath={.items..metadata.name})" -c sleep  -- curl productpage.default.svc.cluster.local:9080 -s -o /dev/null -w "%{http_code}\n"
```

## Snippet: Example of Successful Response Code
Description: Shows the expected successful response code (200) from the curl request to the productpage service.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_4
Language: bash

```bash
200
```

## Snippet: Creating a Sleep Namespace in Kubernetes
Description: Creates a new namespace called 'sleep' in the Kubernetes cluster to test authentication policies.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create ns sleep
```

## Snippet: Listing Kubernetes Namespaces
Description: Lists all available namespaces in the Kubernetes cluster to verify the creation of the sleep namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day82.md#2025-04-17_snippet_1
Language: bash

```bash
kubectl get ns
```