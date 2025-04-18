# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md
Language: multiple

## Snippet: Configuring LDAP Identity Provider in OpenShift
Description: This YAML configuration sets up an LDAP identity provider in OpenShift. It specifies the LDAP server details, bind credentials, and attribute mappings. This configuration allows OpenShift to authenticate users against an LDAP server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_1
Language: yaml

```yaml
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: ldapidp 
    mappingMethod: claim 
    type: LDAP
    ldap:
      attributes:
        id: 
        - name
        name: 
        - cn
        preferredUsername: 
        - sAMAccountName
      bindDN: "CN=svc_openshift,OU=Services,OU=Accounts,DC=simon,DC=local" 
      bindPassword: 
        name: ldap-secret
      insecure: true
      url: "ldap://sc-step-01.simon.local:389/CN=Users,DC=simon,DC=local?sAMAccountName"
```

## Snippet: Defining RoleBinding for User in OpenShift
Description: YAML definition for a RoleBinding that associates the 'app-mgr' role with a user named 'test' in the 'rbac-test-ns' namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_5
Language: yaml

```yaml
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: app-mgr-binding
  namespace: rbac-test-ns
subjects:
- kind: User
  name: test
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: app-mgr
  apiGroup: rbac.authorization.k8s.io
```

## Snippet: Creating LDAP Secret in OpenShift
Description: This command creates a secret in OpenShift containing the LDAP bind password. It's used to securely store the password for the domain account that OpenShift uses to connect to the LDAP server for user lookups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_0
Language: sh

```sh
$ oc create secret generic ldap-secret --from-literal=bindPassword=<secret> -n openshift-config 

# my example
oc create secret generic ldap-secret --from-literal=bindPassword=VMware1! -n openshift-config
```

## Snippet: Creating a New Project in OpenShift
Description: Command to create a new project named 'rbac-test-ns' in OpenShift.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_2
Language: sh

```sh
$ oc new-project rbac-test-ns
```

## Snippet: Viewing Specific OAuth Server Audit Log
Description: Demonstrates how to view a specific OAuth server audit log using the 'oc adm node-logs' command with node name and log file path.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_17
Language: sh

```sh
$ oc adm node-logs <node_name> --path=oauth-server/<log_name>
```

## Snippet: Applying Custom Role in OpenShift
Description: Command to apply the custom role definition from a YAML file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_4
Language: sh

```sh
$ oc apply -f app-mgr-role.yaml
```

## Snippet: Querying User Permissions in OpenShift
Description: Command to check who can perform specific actions on resources in a namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_7
Language: sh

```sh
oc adm policy who-can {verb} {resource}

# for example
oc adm policy who-can create pods -n rbac-test-ns
```

## Snippet: Sample OpenShift Audit Log Entry
Description: This JSON object represents a typical audit log entry in OpenShift, showing details such as API version, user information, and request details.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_20
Language: json

```json
{
  "kind": "Event",
  "apiVersion": "audit.k8s.io/v1",
  "level": "Metadata",
  "auditID": "97ce5c38-4e0c-447b-8e9f-a2c8c84ebc19",
  "stage": "ResponseComplete",
  "requestURI": "/apis/project.openshift.io/v1/projectrequests",
  "verb": "list",
  "user": {
    "username": "test",
    "groups": [
      "system:authenticated:oauth",
      "system:authenticated"
    ],
    "extra": {
      "scopes.authorization.openshift.io": [
        "user:full"
      ]
    }
  },
  "sourceIPs": [
    "10.129.0.35",
    "10.129.0.2"
  ],
  "objectRef": {
    "resource": "projectrequests",
    "apiGroup": "project.openshift.io",
    "apiVersion": "v1"
  },
  "responseStatus": {
    "metadata": {},
    "status": "Success",
    "code": 200
  },
  "requestReceivedTimestamp": "2023-03-30T14:42:37.237408Z",
  "stageTimestamp": "2023-03-30T14:42:37.250606Z",
  "annotations": {
    "authorization.k8s.io/decision": "allow",
    "authorization.k8s.io/reason": "RBAC: allowed by ClusterRoleBinding \"basic-users\" of ClusterRole \"basic-user\" to Group \"system:authenticated\""
  }
}
```

## Snippet: Accessing OpenShift Node Logs
Description: This command demonstrates how to access the oauth-server audit log for a specific OpenShift node using the oc adm node-logs command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_18
Language: bash

```bash
$ oc adm node-logs 90days-ocp-72ptq-master-2 --path=oauth-server/audit.log
```

## Snippet: Listing OAuth Server Audit Logs
Description: Lists the available OAuth server audit logs on the control-plane nodes using the 'oc adm node-logs' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_16
Language: sh

```sh
oc adm node-logs --role=master --path=oauth-server/
```

## Snippet: Example OpenShift API Server Audit Log Output
Description: Shows an example of the JSON-formatted output from an OpenShift API server audit log, including event details and user information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_12
Language: json

```json
{"kind":"Event","apiVersion":"audit.k8s.io/v1","level":"Metadata","auditID":"5d08341a-8fa2-4fab-8e4a-4fb1c01d2d6e","stage":"ResponseStarted","requestURI":"/apis/template.openshift.io/v1/namespaces/openshift/templates?allowWatchBookmarks=true\u0026resourceVersion=9537849\u0026timeout=5m44s\u0026timeoutSeconds=344\u0026watch=true","verb":"watch","user":{"username":"system:serviceaccount:openshift-cluster-samples-operator:cluster-samples-operator","groups":["system:serviceaccounts","system:serviceaccounts:openshift-cluster-samples-operator","system:authenticated"],"extra":{"authentication.kubernetes.io/pod-name":["cluster-samples-operator-7f8d575897-s7566"],"authentication.kubernetes.io/pod-uid":["8a96caaf-1de9-4cef-915f-ace02c764e52"]}},"sourceIPs":["192.168.200.181","10.130.0.2"],"userAgent":"cluster-samples-operator/v0.0.0 (linux/amd64) kubernetes/$Format","objectRef":{"resource":"templates","namespace":"openshift","apiGroup":"template.openshift.io","apiVersion":"v1"},"responseStatus":{"metadata":{},"code":200},"requestReceivedTimestamp":"2023-03-27T09:44:50.239076Z","stageTimestamp":"2023-03-27T09:44:50.242747Z","annotations":{"authorization.k8s.io/decision":"allow","authorization.k8s.io/reason":"RBAC: allowed by RoleBinding \"shared-resource-viewers/openshift\" of Role \"shared-resource-viewer\" to Group \"system:authenticated\""}}
```

## Snippet: Viewing Audit Logs in OpenShift
Description: Command to list available audit logs on the control-plane nodes in OpenShift.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_9
Language: sh

```sh
$ oc adm node-logs --role=master --path=openshift-apiserver/
```

## Snippet: Sample Kubernetes API Server Audit Log
Description: Example of an audit log entry from the Kubernetes API Server, showing various fields such as user information, request details, and authorization decisions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_8
Language: json

```json
{"kind":"Event","apiVersion":"audit.k8s.io/v1","level":"Metadata","auditID":"ad209ce1-fec7-4130-8192-c4cc63f1d8cd","stage":"ResponseComplete","requestURI":"/api/v1/namespaces/openshift-kube-controller-manager/configmaps/cert-recovery-controller-lock?timeout=35s","verb":"update","user":{"username":"system:serviceaccount:openshift-kube-controller-manager:localhost-recovery-client","uid":"dd4997e3-d565-4e37-80f8-7fc122ccd785","groups":["system:serviceaccounts","system:serviceaccounts:openshift-kube-controller-manager","system:authenticated"]},"sourceIPs":["::1"],"userAgent":"cluster-kube-controller-manager-operator/v0.0.0 (linux/amd64) kubernetes/$Format","objectRef":{"resource":"configmaps","namespace":"openshift-kube-controller-manager","name":"cert-recovery-controller-lock","uid":"5c57190b-6993-425d-8101-8337e48c7548","apiVersion":"v1","resourceVersion":"574307"},"responseStatus":{"metadata":{},"code":200},"requestReceivedTimestamp":"2020-04-02T08:27:20.200962Z","stageTimestamp":"2020-04-02T08:27:20.206710Z","annotations":{"authorization.k8s.io/decision":"allow","authorization.k8s.io/reason":"RBAC: allowed by ClusterRoleBinding \"system:openshift:operator:kube-controller-manager-recovery\" of ClusterRole \"cluster-admin\" to ServiceAccount \"localhost-recovery-client/openshift-kube-controller-manager\""}}
```

## Snippet: Adding User to Role in OpenShift
Description: Command to add a user to an existing role in a specific project namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_6
Language: sh

```sh
$ oc adm policy add-role-to-user <role> <user> -n <project>

# For my example above, once I created the "app-mgr" role in the rbac-test-ns namespace I can run the following to create the roleBinding
oc adm policy add-role-to-user app-mgr test -n rbac-test-ns
```

## Snippet: Viewing Specific OAuth API Server Audit Log
Description: Demonstrates how to view a specific OAuth API server audit log using the 'oc adm node-logs' command with node name and log file path.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_14
Language: sh

```sh
$ oc adm node-logs <node_name> --path=oauth-apiserver/<log_name>

# Example command
$ oc adm node-logs 90days-ocp-72ptq-master-2 --path=oauth-apiserver/audit-2023-03-29T08-10-51.942.log
```

## Snippet: Viewing Specific OpenShift API Server Audit Log
Description: Demonstrates how to view a specific OpenShift API server audit log using the 'oc adm node-logs' command with node name and log file path.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_11
Language: sh

```sh
$ oc adm node-logs <node_name> --path=openshift-apiserver/<log_name>

# Example command
$ oc adm node-logs 90days-ocp-72ptq-master-2 --path=openshift-apiserver/audit-2023-03-29T14-39-01.789.log
```

## Snippet: Listing OpenShift API Server Audit Logs
Description: Lists the available OpenShift API server audit logs on the control-plane nodes using the 'oc adm node-logs' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_10
Language: sh

```sh
oc adm node-logs --role=master --path=openshift-apiserver/
```

## Snippet: Filtering OpenShift Audit Logs with jq
Description: This command shows how to use jq to filter OpenShift audit logs, specifically selecting entries where the username is 'test'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_19
Language: bash

```bash
$ oc adm node-logs 90days-ocp-72ptq-master-2 --path=openshift-apiserver/audit.log | jq 'select(.user.username == "test")'
```

## Snippet: Listing OAuth API Server Audit Logs
Description: Lists the available OAuth API server audit logs on the control-plane nodes using the 'oc adm node-logs' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_13
Language: sh

```sh
oc adm node-logs --role=master --path=oauth-apiserver/
```

## Snippet: Defining Custom Role for Application Management in OpenShift
Description: YAML definition for a custom role 'app-mgr' that grants permissions for deploying and managing applications in the 'rbac-test-ns' namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_3
Language: yaml

```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: app-mgr
  namespace: rbac-test-ns
rules:
- apiGroups: ["project.openshift.io"]
  resources: ["projects"]
  verbs: ["get"]
- apiGroups: [""]
  resources: ["pods", "services", "endpoints", "persistentvolumeclaims", "configmaps", "secrets"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets", "statefulsets"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
```

## Snippet: Example OAuth API Server Audit Log Output
Description: Shows an example of the JSON-formatted output from an OAuth API server audit log, including event details and user information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day61.md#2025-04-17_snippet_15
Language: json

```json
{"kind":"Event","apiVersion":"audit.k8s.io/v1","level":"Metadata","auditID":"6472c130-436a-4454-9bf9-77b6066d8ce2","stage":"ResponseComplete","requestURI":"/apis/oauth.openshift.io/v1/oauthclients/console","verb":"get","user":{"username":"system:serviceaccount:openshift-console-operator:console-operator","groups":["system:serviceaccounts","system:serviceaccounts:openshift-console-operator","system:authenticated"],"extra":{"authentication.kubernetes.io/pod-name":["console-operator-7cc8457b5b-rpz7f"],"authentication.kubernetes.io/pod-uid":["4b73b593-9cde-4ae4-a8f7-00e7f7ee7902"]}},"sourceIPs":["192.168.200.181","10.129.0.2"],"userAgent":"console/v0.0.0 (linux/amd64) kubernetes/$Format","objectRef":{"resource":"oauthclients","name":"console","apiGroup":"oauth.openshift.io","apiVersion":"v1"},"responseStatus":{"metadata":{},"code":200},"requestReceivedTimestamp":"2023-03-22T23:35:00.970020Z","stageTimestamp":"2023-03-22T23:35:00.972703Z","annotations":{"authorization.k8s.io/decision":"allow","authorization.k8s.io/reason":"RBAC: allowed by ClusterRoleBinding \"console-operator\" of ClusterRole \"console-operator\" to ServiceAccount \"console-operator/openshift-console-operator\""}}
```