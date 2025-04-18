# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md
Language: multiple

## Snippet: Creating Kanister ActionSet for MySQL Backup
Description: This command creates an ActionSet using kanctl to perform a backup of the MySQL database. It specifies the blueprint, statefulset, profile, and secrets needed for the backup operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_6
Language: bash

```bash
kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store
```

## Snippet: Checking Kanister Profiles in Kubernetes Namespace
Description: This command lists the Kanister profiles in the my-production-app namespace, which are used to configure backups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_5
Language: bash

```bash
kubectl get profiles.cr.kanister.io -n my-production-app
```

## Snippet: Checking Kanister ActionSet Status
Description: This command describes the status of a specific ActionSet in the kanister namespace, used to monitor the progress of backup operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl --namespace kanister describe actionset backup-qpnqv
```

## Snippet: Installing Kanister via Helm
Description: Helm command to install Kanister operator in a Kubernetes cluster with specific version tag.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_0
Language: bash

```bash
helm install kanister --namespace kanister kanister/kanister-operator --set image.tag=0.75.0 --create-namespace
```

## Snippet: Deploying MySQL Database
Description: Commands to deploy MySQL using Helm with specific storage configuration and namespace settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_1
Language: bash

```bash
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

## Snippet: Creating MySQL Client Pod
Description: Command to create a MySQL client pod for database operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_3
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Creating Kanister Restore ActionSet
Description: This command creates a restore ActionSet using kanctl, specifying the previous backup ActionSet to restore from.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_11
Language: bash

```bash
kanctl create actionset -n kanister --action restore --from "backup-qpnqv"
```

## Snippet: Verifying Restored MySQL Data
Description: This SQL command selects all data from the 'Accounts' table, used to verify that the data has been successfully restored.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_12
Language: sql

```sql
echo "select * from Accounts;" |  ${MYSQL_EXEC}
```

## Snippet: Connecting to MySQL Pod in Kubernetes
Description: This bash script creates a temporary pod to connect to the MySQL database, setting environment variables for the connection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_8
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Showing MySQL Databases
Description: This SQL command lists all databases in the MySQL instance, used to verify the presence of the database before and after backup/restore operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_9
Language: sql

```sql
echo "SHOW DATABASES;" |  ${MYSQL_EXEC}
```

## Snippet: MySQL Connection Setup
Description: Commands to set up MySQL connection parameters and environment variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_2
Language: bash

```bash
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${APP_NAME} mysql-store -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
MYSQL_HOST=mysql-store.${APP_NAME}.svc.cluster.local
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
```

## Snippet: Kanister MySQL Backup Blueprint
Description: YAML configuration defining the Kanister blueprint for MySQL backup, restore, and delete operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_4
Language: yaml

```yaml
apiVersion: cr.kanister.io/v1alpha1
kind: Blueprint
metadata:
  name: mysql-blueprint
actions:
  backup:
    outputArtifacts:
      mysqlCloudDump:
        keyValue:
          s3path: "{{ .Phases.dumpToObjectStore.Output.s3path }}"
    phases:
    - func: KubeTask
      name: dumpToObjectStore
      objects:
        mysqlSecret:
          kind: Secret
          name: '{{ index .Object.metadata.labels "app.kubernetes.io/instance" }}'
          namespace: '{{ .StatefulSet.Namespace }}'
      args:
        image: ghcr.io/kanisterio/mysql-sidecar:0.75.0
        namespace: "{{ .StatefulSet.Namespace }}"
        command:
        - bash
        - -o
        - errexit
        - -o
        - pipefail
        - -c
        - |
          s3_path="/mysql-backups/{{ .StatefulSet.Namespace }}/{{ index .Object.metadata.labels "app.kubernetes.io/instance" }}/{{ toDate "2006-01-02T15:04:05.999999999Z07:00" .Time  | date "2006-01-02T15-04-05" }}/dump.sql.gz"
          root_password="{{ index .Phases.dumpToObjectStore.Secrets.mysqlSecret.Data "mysql-root-password" | toString }}"
          mysqldump --column-statistics=0 -u root --password=${root_password} -h {{ index .Object.metadata.labels "app.kubernetes.io/instance" }} --single-transaction --all-databases | gzip - | kando location push --profile '{{ toJson .Profile }}' --path ${s3_path} -
          kando output s3path ${s3_path}
```

## Snippet: Dropping MySQL Database
Description: This SQL command drops the 'myImportantData' database, simulating data loss to test the restore process.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day88.md#2025-04-17_snippet_10
Language: sql

```sql
echo "DROP DATABASE myImportantData;" |  ${MYSQL_EXEC}
```