# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md
Language: multiple

## Snippet: Privileged SCC Configuration in OpenShift
Description: YAML configuration for the privileged SCC in OpenShift that allows full access to all privileged and host features. This configuration grants pods the ability to run as any user, use host resources, and have elevated privileges, intended for cluster administration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_3
Language: yaml

```yaml
allowHostDirVolumePlugin: true
allowHostIPC: true
allowHostNetwork: true
allowHostPID: true
allowHostPorts: true
allowPrivilegeEscalation: true
allowPrivilegedContainer: true
allowedCapabilities:
- '*'
allowedUnsafeSysctls:
- '*'
apiVersion: security.openshift.io/v1
defaultAddCapabilities: null
fsGroup:
  type: RunAsAny
groups:
- system:cluster-admins
- system:nodes
- system:masters
kind: SecurityContextConstraints
metadata:
  annotations:
    include.release.openshift.io/ibm-cloud-managed: "true"
    include.release.openshift.io/self-managed-high-availability: "true"
    include.release.openshift.io/single-node-developer: "true"
    kubernetes.io/description: 'privileged allows access to all privileged and host
      features and the ability to run as any user, any group, any fsGroup, and with
      any SELinux context.  WARNING: this is the most relaxed SCC and should be used
      only for cluster administration. Grant with caution.'
    release.openshift.io/create-only: "true"
  creationTimestamp: "2023-03-16T09:34:35Z"
  generation: 1
  name: privileged
  resourceVersion: "398"
  uid: 19a16cc2-ce1f-4037-b70e-49ba261cb599
priority: null
readOnlyRootFilesystem: false
requiredDropCapabilities: null
runAsUser:
  type: RunAsAny
seLinuxContext:
  type: RunAsAny
seccompProfiles:
- '*'
supplementalGroups:
  type: RunAsAny
users:
- system:admin
- system:serviceaccount:openshift-infra:build-controller
volumes:
- '*'
```

## Snippet: Configuring Pod Security Context with Additional Capabilities in YAML
Description: This YAML snippet demonstrates how to configure a pod with additional capabilities. It specifies a security context that adds NET_ADMIN and SYS_TIME capabilities to the container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo-4
spec:
  containers:
  - name: sec-ctx-4
    image: gcr.io/google-samples/node-hello:1.0
    securityContext:
      capabilities:
        add: ["NET_ADMIN", "SYS_TIME"]
```

## Snippet: Restricted SCC Configuration in OpenShift
Description: YAML configuration for the restricted-v2 SCC in OpenShift that denies access to host features and requires pods to run with specific security constraints. This configuration requires pods to run with allocated UIDs and SELinux contexts, preventing privileged execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_2
Language: yaml

```yaml
allowHostDirVolumePlugin: false
allowHostIPC: false
allowHostNetwork: false
allowHostPID: false
allowHostPorts: false
allowPrivilegeEscalation: true
allowPrivilegedContainer: false
allowedCapabilities: null
apiVersion: security.openshift.io/v1
defaultAddCapabilities: null
fsGroup:
  type: MustRunAs
groups: []
kind: SecurityContextConstraints
metadata:
  annotations:
    include.release.openshift.io/ibm-cloud-managed: "true"
    include.release.openshift.io/self-managed-high-availability: "true"
    include.release.openshift.io/single-node-developer: "true"
    kubernetes.io/description: restricted denies access to all host features and requires
      pods to be run with a UID, and SELinux context that are allocated to the namespace.
    release.openshift.io/create-only: "true"
  creationTimestamp: "2023-03-16T09:34:36Z"
  generation: 1
  name: restricted
  resourceVersion: "401"
  uid: 8ced4b4e-7fed-4369-a0b8-da40880f4a3d
priority: null
readOnlyRootFilesystem: false
requiredDropCapabilities:
- KILL
- MKNOD
- SETUID
- SETGID
runAsUser:
  type: MustRunAsRange
seLinuxContext:
  type: MustRunAs
supplementalGroups:
  type: RunAsAny
users: []
volumes:
- configMap
- downwardAPI
- emptyDir
- ephemeral
- persistentVolumeClaim
- projected
- secret
```

## Snippet: Applying Custom SCC and Granting Permissions in OpenShift CLI
Description: These shell commands apply the custom SCC to the OpenShift cluster and grant the necessary permissions to the service account used by the MongoDB deployment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_7
Language: sh

```sh
oc adm policy add-scc-to-user mongo-custom-scc system:serviceaccount:<namespace>:default

# In my environment, I run:
oc adm policy add-scc-to-user mongo-custom-scc system:serviceaccount:pacman:default
```

## Snippet: MongoDB Deployment with PVC and Secret in OpenShift
Description: YAML configuration for deploying MongoDB in OpenShift with a PersistentVolumeClaim and Secret. The deployment uses an init container to set up permissions, but fails to meet the restricted SCC requirements due to security context configuration issues.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_4
Language: yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    name: mongo
  name: mongo
  namespace: pacman
  annotations:
    source: "https://github.com/saintdle/pacman-tanzu"
spec:
  replicas: 1
  selector:
    matchLabels:
      name: mongo
  template:
    metadata:
      labels:
        name: mongo
    spec:
      initContainers:
      - args:
        - |
          mkdir -p /bitnami/mongodb
          chown -R "1001:1001" "/bitnami/mongodb"
        command:
        - /bin/bash
        - -ec
        image: docker.io/bitnami/bitnami-shell:10-debian-10-r158
        imagePullPolicy: Always
        name: volume-permissions
        resources: {}
        securityContext:
          runAsUser: 0
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /bitnami/mongodb
          name: mongo-db
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext:
        fsGroup: 1001
      serviceAccountName: default
      terminationGracePeriodSeconds: 30
      volumes:
      - name: mongo-db
        persistentVolumeClaim:
          claimName: mongo-storage
      containers:
      - image: bitnami/mongodb:4.4.8
        name: mongo
        env:
        - name: MONGODB_ROOT_PASSWORD
          valueFrom:
            secretKeyRef:
              key: database-admin-password
              name: mongodb-users-secret
        - name: MONGODB_DATABASE
          valueFrom:
            secretKeyRef:
              key: database-name
              name: mongodb-users-secret
        - name: MONGODB_PASSWORD
          valueFrom:
            secretKeyRef:
              key: database-password
              name: mongodb-users-secret
        - name: MONGODB_USERNAME
          valueFrom:
            secretKeyRef:
              key: database-user
              name: mongodb-users-secret
        ports:
        - name: mongo
          containerPort: 27017
        volumeMounts:
          - name: mongo-db
            mountPath: /bitnami/mongodb/
---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: mongo-storage
  namespace: pacman
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
---
apiVersion: v1
kind: Secret
metadata:
  name: mongodb-users-secret
  namespace: pacman
type: Opaque 
data:
  database-admin-name: Y2x5ZGU=
  database-admin-password: Y2x5ZGU=
  database-name: cGFjbWFu
  database-password: cGlua3k=
  database-user: Ymxpbmt5
```

## Snippet: Creating Custom SecurityContextConstraints in OpenShift YAML
Description: This YAML defines a custom SecurityContextConstraints (SCC) named 'mongo-custom-scc' that allows containers to run as any user, including root. It sets various security parameters to maintain a level of control while allowing necessary privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_6
Language: yaml

```yaml
apiVersion: security.openshift.io/v1
kind: SecurityContextConstraints
metadata:
  name: mongo-custom-scc
allowPrivilegedContainer: false
allowHostNetwork: false
allowHostPorts: false
allowHostPID: false
allowHostIPC: false
runAsUser:
  type: RunAsAny
seLinuxContext:
  type: MustRunAs
fsGroup:
  type: RunAsAny
supplementalGroups:
  type: RunAsAny
```

## Snippet: Defining Security Context for Root User in Kubernetes YAML
Description: This YAML snippet shows the security context configuration that attempts to run an initContainer as the root user, which conflicts with OpenShift's default security policies.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_5
Language: yaml

```yaml
securityContext:
  runAsUser: 0
```

## Snippet: Redeploying MongoDB in OpenShift CLI
Description: These shell commands demonstrate how to redeploy the MongoDB application by scaling the deployment to 0 and then back to 1 replica.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_8
Language: sh

```sh
# oc scale deploy mongo -n pacman --replicas=0

deployment.apps/mongo scaled

# oc scale deploy mongo -n pacman --replicas=1

deployment.apps/mongo scaled
```

## Snippet: Listing Default CRI-O Container Capabilities in OpenShift
Description: This snippet shows the default list of capabilities allowed by CRI-O for each container in a pod. These capabilities control various security aspects of the container runtime.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day59.md#2025-04-17_snippet_0
Language: yaml

```yaml
default_capabilities = [
  "CHOWN",
  "DAC_OVERRIDE",
  "FSETID",
  "FOWNER",
  "SETGID",
  "SETUID",
  "SETPCAP",
  "NET_BIND_SERVICE",
  "KILL",
]
```