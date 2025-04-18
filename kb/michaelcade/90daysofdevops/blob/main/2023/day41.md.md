# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md
Language: multiple

## Snippet: Creating TLS Secret in Kubernetes using kubectl
Description: This command creates a TLS secret named 'tls-secret' using certificate and key files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_3
Language: bash

```bash
kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key
```

## Snippet: Accessing Secrets in Kubernetes Pod YAML Configuration
Description: This YAML configuration defines a Pod that accesses the 'my-secret' secret and sets its values as environment variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secret-test
spec:
  containers:
  - name: mycontainer
    image: nginx
    env:
    - name: USERNAME
      valueFrom:
        secretKeyRef:
          name: my-secret
          key: username
    - name: PASSWORD
      valueFrom:
        secretKeyRef:
          name: my-secret
          key: password
  restartPolicy: Never
```

## Snippet: Creating Database Secret in Kubernetes using kubectl
Description: This command creates a generic secret named 'db-secret' with database username and password key-value pairs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl create secret generic db-secret --from-literal=db_username=dbuser --from-literal=db_password=dbpass
```

## Snippet: Configuring Kubernetes Pod to Use TLS Secret
Description: This YAML configuration defines a Pod that mounts the 'tls-secret' as a volume for use by an nginx container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_4
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: tls-pod
spec:
  containers:
  - name: mycontainer
    image: nginx
    volumeMounts:
    - name: tls-volume
      mountPath: "/etc/nginx/ssl"
      readOnly: true
  volumes:
  - name: tls-volume
    secret:
      secretName: tls-secret
  restartPolicy: Never
```

## Snippet: Deploying Kubernetes Pod with kubectl
Description: This command applies the Pod configuration from a YAML file named 'secret-pod.yaml'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_2
Language: bash

```bash
kubectl apply -f secret-pod.yaml
```

## Snippet: Creating Opaque Secret in Kubernetes using kubectl
Description: This command creates a generic secret named 'my-secret' with username and password key-value pairs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_0
Language: bash

```bash
kubectl create secret generic my-secret --from-literal=username=myuser --from-literal=password=mypassword
```

## Snippet: Using Secrets as Environment Variables in Kubernetes Pod
Description: This YAML configuration defines a Pod that sets environment variables for a MySQL container using values from the 'db-secret' secret.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day41.md#2025-04-17_snippet_6
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: env-pod
spec:
  containers:
  - name: mycontainer
    image: mysql
    env:
    - name: DB_USERNAME
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: db_username
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: db_password
  restartPolicy: Never
```