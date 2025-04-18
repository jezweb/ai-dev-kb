# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day22.md
Language: yaml

## Snippet: Creating Azure Files PersistentVolumeClaim with YAML
Description: This YAML manifest defines a PersistentVolumeClaim for Azure Files with ReadWriteMany access mode, requesting 5GB of storage with the default storage class.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day22.md#2025-04-17_snippet_2
Language: yaml

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: azurefile
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: my-azurefile
  resources:
    requests:
      storage: 5Gi
```

## Snippet: Creating Custom Azure Files Storage Class with YAML
Description: This YAML manifest defines a custom storage class for Azure Files, specifying parameters like storage account type and kind. It's set to dynamically provision storage with a reclaim policy of Delete.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day22.md#2025-04-17_snippet_4
Language: yaml

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: my-azurefile
provisioner: kubernetes.io/azure-file
mountOptions:
  - dir_mode=0777
  - file_mode=0777
  - uid=0
  - gid=0
  - mfsymlinks
  - cache=strict
  - actimeo=30
parameters:
  skuName: Standard_LRS
```

## Snippet: Creating Azure Disk PersistentVolumeClaim with YAML
Description: This YAML manifest defines a PersistentVolumeClaim for Azure Disk with ReadWriteOnce access mode, requesting 5GB of storage with the standard storage class.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day22.md#2025-04-17_snippet_0
Language: yaml

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: azure-managed-disk
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: managed-premium
  resources:
    requests:
      storage: 5Gi
```

## Snippet: Deploying Nginx Pod with Azure Files Volume
Description: This YAML manifest defines a Pod that uses the previously created Azure Files PersistentVolumeClaim to mount a volume at the /mnt/azure path.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day22.md#2025-04-17_snippet_3
Language: yaml

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: mypod
spec:
  containers:
  - name: mypod
    image: nginx
    resources:
      requests:
        cpu: 100m
        memory: 128Mi
      limits:
        cpu: 250m
        memory: 256Mi
    volumeMounts:
    - mountPath: "/mnt/azure"
      name: volume
  volumes:
  - name: volume
    persistentVolumeClaim:
      claimName: azurefile
```

## Snippet: Deploying Nginx Pod with Azure Disk Volume
Description: This YAML manifest defines a Pod that uses the previously created PersistentVolumeClaim to mount an Azure Disk as a volume at the /mnt/azure path.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day22.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: mypod
    image: nginx
    resources:
      requests:
        cpu: 100m
        memory: 128Mi
      limits:
        cpu: 250m
        memory: 256Mi
    volumeMounts:
    - mountPath: "/mnt/azure"
      name: volume
  volumes:
  - name: volume
    persistentVolumeClaim:
      claimName: azure-managed-disk
```