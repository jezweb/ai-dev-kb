# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md
Language: multiple

## Snippet: Creating a New OpenShift Project using CLI
Description: This command creates a new OpenShift project with a specified name, description, and display name using the 'oc new-project' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_0
Language: sh

```sh
$ oc new-project my-sample-project --description="My Sample OpenShift Project" --display-name="Sample Project"
```

## Snippet: Granting Developer Role to User in OpenShift Project using CLI
Description: This command grants the developer role to a specific user in the specified OpenShift project using the 'oc policy add-role-to-user' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_6
Language: sh

```sh
$ oc policy add-role-to-user developer my-user -n my-sample-project
```

## Snippet: Defining Developer Role for OpenShift Project
Description: This YAML configuration defines a Role object for a developer, specifying the allowed API groups, resources, and verbs for role-based access control (RBAC).
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_4
Language: yaml

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: developer
rules:
- apiGroups: [""]
  resources: ["pods", "services", "configmaps", "persistentvolumeclaims"]
  verbs: ["create", "get", "list", "watch", "update", "delete"]
```

## Snippet: Defining Resource Quota for OpenShift Project
Description: This YAML configuration defines a ResourceQuota object to limit CPU and memory consumption for a project. It sets both requests and limits for these resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_2
Language: yaml

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: my-resource-quota
spec:
  hard:
    requests.cpu: "2"
    requests.memory: 2Gi
    limits.cpu: "4"
    limits.memory: 4Gi
```

## Snippet: Creating OpenShift Project and Context
Description: Commands to create a new OpenShift project and switch to its context
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_7
Language: sh

```sh
$ oc new-project scc-ns-test

$ oc project ssc-ns-test
```

## Snippet: Applying Developer Role to OpenShift Project using CLI
Description: This command applies the developer role defined in a YAML file to a specific OpenShift project using the 'oc apply' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_5
Language: sh

```sh
$ oc apply -f developer-role.yaml -n my-sample-project
```

## Snippet: Project Configuration JSON
Description: JSON output showing the project's configuration including security labels and annotations
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_10
Language: json

```json
{
    "apiVersion": "project.openshift.io/v1",
    "kind": "Project",
    "metadata": {
        "annotations": {
            "openshift.io/description": "",
            "openshift.io/display-name": "",
            "openshift.io/requester": "system:admin",
            "openshift.io/sa.scc.mcs": "s0:c27,c4",
            "openshift.io/sa.scc.supplemental-groups": "1000710000/10000",
            "openshift.io/sa.scc.uid-range": "1000710000/10000"
        },
        "creationTimestamp": "2023-03-29T09:23:18Z",
        "labels": {
            "kubernetes.io/metadata.name": "scc-ns-test",
            "pod-security.kubernetes.io/audit": "restricted",
            "pod-security.kubernetes.io/audit-version": "v1.24",
            "pod-security.kubernetes.io/warn": "restricted",
            "pod-security.kubernetes.io/warn-version": "v1.24"
        },
        "name": "scc-ns-test",
        "resourceVersion": "11247602",
        "uid": "3f720113-1e30-4a3f-b97e-48f88735e510"
    },
    "spec": {
        "finalizers": [
            "kubernetes"
        ]
    },
    "status": {
        "phase": "Active"
    }
}
```

## Snippet: Nginx Deployment Configuration
Description: YAML configuration for deploying an Nginx application with 2 replicas
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_8
Language: yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2 # tells deployment to run 2 pods matching the template
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

## Snippet: Patch Command for Security Configuration
Description: Command to modify project security settings using oc patch
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_11
Language: sh

```sh
$ oc patch namespace/scc-ns-test -p '{"metadata":{"labels":{"pod-security.kubernetes.io/audit":"privileged","pod-security.kubernetes.io/enforce":"privileged","pod-security.kubernetes.io/warn":"privileged","security.openshift.io/scc.podSecurityLabelSync":"false"}}}'
```

## Snippet: Applying Nginx Deployment
Description: Command to apply the Nginx deployment configuration with security warning output
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_9
Language: sh

```sh
$ oc apply -f ngnix.yaml

Warning: would violate PodSecurity "restricted:v1.24": allowPrivilegeEscalation != false (container "nginx" must set securityContext.allowPrivilegeEscalation=false), unrestricted capabilities (container "nginx" must set securityContext.capabilities.drop=["ALL"]), runAsNonRoot != true (pod or container "nginx" must set securityContext.runAsNonRoot=true), seccompProfile (pod or container "nginx" must set securityContext.seccompProfile.type to "RuntimeDefault" or "Localhost")
deployment.apps/nginx-deployment created
```

## Snippet: Updated Project Configuration JSON
Description: JSON output showing the updated project configuration with privileged security settings
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_13
Language: json

```json
{
    "apiVersion": "project.openshift.io/v1",
    "kind": "Project",
    "metadata": {
        "annotations": {
            "openshift.io/description": "",
            "openshift.io/display-name": "",
            "openshift.io/requester": "system:admin",
            "openshift.io/sa.scc.mcs": "s0:c27,c4",
            "openshift.io/sa.scc.supplemental-groups": "1000710000/10000",
            "openshift.io/sa.scc.uid-range": "1000710000/10000"
        },
        "creationTimestamp": "2023-03-29T09:23:18Z",
        "labels": {
            "kubernetes.io/metadata.name": "scc-ns-test",
            "pod-security.kubernetes.io/audit": "privileged",
            "pod-security.kubernetes.io/audit-version": "v1.24",
            "pod-security.kubernetes.io/enforce": "privileged",
            "pod-security.kubernetes.io/warn": "privileged",
            "pod-security.kubernetes.io/warn-version": "v1.24",
            "security.openshift.io/scc.podSecurityLabelSync": "false"
        },
        "name": "scc-ns-test",
        "resourceVersion": "11479286",
        "uid": "3f720113-1e30-4a3f-b97e-48f88735e510"
    },
    "spec": {
        "finalizers": [
            "kubernetes"
        ]
    },
    "status": {
        "phase": "Active"
    }
}
```

## Snippet: Switching Between OpenShift Projects using CLI
Description: This command switches the active project to the specified project name using the 'oc project' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_1
Language: sh

```sh
$ oc project my-sample-project
```

## Snippet: Applying Resource Quota to OpenShift Project using CLI
Description: This command applies the resource quota defined in a YAML file to a specific OpenShift project using the 'oc apply' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_3
Language: sh

```sh
$ oc apply -f resource-quota.yaml -n my-sample-project
```

## Snippet: Security Configuration YAML Patch
Description: YAML configuration for modifying project security labels
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day60.md#2025-04-17_snippet_12
Language: yaml

```yaml
metadata:
  labels:
    pod-security.kubernetes.io/audit: privileged
    pod-security.kubernetes.io/enforce: privileged
    pod-security.kubernetes.io/warn: privileged
    security.openshift.io/scc.podSecurityLabelSync: false
```