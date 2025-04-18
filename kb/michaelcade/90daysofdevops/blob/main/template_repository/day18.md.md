# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day18.md
Language: yaml

## Snippet: Creating a Pod with Persistent Volume in Kubernetes
Description: This YAML configuration defines a Pod that uses a Persistent Volume Claim. The pod runs an nginx container and mounts the claimed persistent volume at /usr/share/nginx/html. This demonstrates how to use persistent storage in a Kubernetes deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day18.md#2025-04-17_snippet_2
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: task-pv-pod
spec:
  volumes:
    - name: task-pv-storage
      persistentVolumeClaim:
        claimName: task-pv-claim
  containers:
    - name: task-pv-container
      image: nginx
      ports:
        - containerPort: 80
          name: "http-server"
      volumeMounts:
        - mountPath: "/usr/share/nginx/html"
          name: task-pv-storage
```

## Snippet: Creating a Persistent Volume in Kubernetes
Description: This YAML configuration defines a Persistent Volume (PV) in Kubernetes. It specifies a 10Gi capacity volume with ReadWriteOnce access mode, using the local storage class. The volume is associated with a specific path on the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day18.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: task-pv-volume
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
```

## Snippet: Creating a Persistent Volume Claim in Kubernetes
Description: This YAML configuration defines a Persistent Volume Claim (PVC) in Kubernetes. It requests a 3Gi volume with ReadWriteOnce access mode from the manual storage class. This claim can be used by pods to request persistent storage.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day18.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: task-pv-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
```