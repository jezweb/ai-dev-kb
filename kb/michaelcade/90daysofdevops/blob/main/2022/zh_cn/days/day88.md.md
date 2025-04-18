# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md
Language: multiple

## Snippet: Installing Kanister Operator with Helm in Kubernetes
Description: This command installs the Kanister operator into a Kubernetes cluster using Helm, creating a dedicated namespace and specifying the image version 0.75.0.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_0
Language: bash

```bash
helm install kanister --namespace kanister kanister/kanister-operator --set image.tag=0.75.0 --create-namespace
```

## Snippet: Deploying MySQL Database via Helm in Kubernetes
Description: This script creates a namespace for a production application and deploys MySQL using the Bitnami Helm chart with specified persistence size and volume permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_1
Language: bash

```bash
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

## Snippet: Creating Kanister ActionSet for MySQL Backup
Description: Command to create an ActionSet using kanctl for backing up MySQL data. It specifies the action, namespace, blueprint, statefulset, profile, and secrets required for the backup operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_10
Language: bash

```bash
kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store
```

## Snippet: Checking Kanister ActionSet Status
Description: Command to describe and check the status of a specific ActionSet in the Kanister namespace. Replace 'backup-qpnqv' with the actual ActionSet name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl --namespace kanister describe actionset backup-qpnqv
```

## Snippet: Creating Kanister S3 Profile for Backup Storage
Description: This command creates a Kanister profile that configures an S3-compatible object storage location for storing and retrieving database backups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_6
Language: bash

```bash
kanctl create profile s3compliant --access-key $ACCESS_KEY --secret-key $SECRET_KEY --bucket $BUCKET --region eu-west-2 --namespace my-production-app
```

## Snippet: Deleting an Existing MySQL Client Pod
Description: This command removes an existing MySQL client pod if one is already running in the application namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl delete pod -n ${APP_NAME} mysql-client
```

## Snippet: Applying MySQL Blueprint to Kanister
Description: This command creates the Kanister Blueprint in the Kubernetes cluster, which defines the operations for MySQL backup and restoration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl create -f mysql-blueprint.yml -n kanister
```

## Snippet: Connecting to MySQL Pod in Kubernetes
Description: Bash script to create a temporary MySQL client pod and connect to the MySQL database in the Kubernetes cluster. It sets environment variables for the database connection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_12
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Setting Up MySQL Connection Variables in Kubernetes
Description: This script extracts the MySQL root password from Kubernetes secrets and defines connection variables for interacting with the database.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_2
Language: bash

```bash
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${APP_NAME} mysql-store -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
MYSQL_HOST=mysql-store.${APP_NAME}.svc.cluster.local
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
```

## Snippet: Querying MySQL Table After Restore
Description: SQL command to select all records from the 'Accounts' table. This is used to verify that the data has been successfully restored after the backup operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_16
Language: sql

```sql
select * from Accounts;
```

## Snippet: Retrieving Kanister Profiles in Kubernetes Namespace
Description: Command to list Kanister profiles in the 'my-production-app' namespace. This is used to identify available profiles for configuring ActionSets.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl get profiles.cr.kanister.io -n my-production-app
```

## Snippet: Populating MySQL Database with Sample Data
Description: This script creates a database, defines an Accounts table, and populates it with sample data to demonstrate backup and restore functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_5
Language: bash

```bash
echo "create database myImportantData;" | mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD}
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo "drop table Accounts" | ${MYSQL_EXEC}
echo "create table if not exists Accounts(name text, balance integer); insert into Accounts values('nick', 0);" |  ${MYSQL_EXEC}
echo "insert into Accounts values('albert', 112);" | ${MYSQL_EXEC}
echo "insert into Accounts values('alfred', 358);" | ${MYSQL_EXEC}
echo "insert into Accounts values('beatrice', 1321);" | ${MYSQL_EXEC}
echo "insert into Accounts values('bartholomew', 34);" | ${MYSQL_EXEC}
echo "insert into Accounts values('edward', 5589);" | ${MYSQL_EXEC}
echo "insert into Accounts values('edwin', 144);" | ${MYSQL_EXEC}
echo "insert into Accounts values('edwina', 233);" | ${MYSQL_EXEC}
echo "insert into Accounts values('rastapopoulos', 377);" | ${MYSQL_EXEC}
echo "select * from Accounts;" |  ${MYSQL_EXEC}
exit
```

## Snippet: Dropping MySQL Database
Description: SQL command to drop the 'myImportantData' database. This is used to simulate data loss before performing a restore operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_14
Language: sql

```sql
DROP DATABASE myImportantData;
```

## Snippet: Listing MySQL Databases
Description: SQL command to show all databases in the MySQL instance. This is used to verify the presence of the database before and after backup/restore operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_13
Language: sql

```sql
SHOW DATABASES;
```

## Snippet: MySQL Backup and Restore Blueprint for Kanister
Description: This YAML defines a Kanister Blueprint that contains the actions for backing up, restoring, and deleting MySQL database backups using S3 storage, including commands for database dumps and restores.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_7
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
  restore:
    inputArtifactNames:
    - mysqlCloudDump
    phases:
    - func: KubeTask
      name: restoreFromBlobStore
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
          s3_path="{{ .ArtifactsIn.mysqlCloudDump.KeyValue.s3path }}"
          root_password="{{ index .Phases.restoreFromBlobStore.Secrets.mysqlSecret.Data "mysql-root-password" | toString }}"
          kando location pull --profile '{{ toJson .Profile }}' --path ${s3_path} - | gunzip | mysql -u root --password=${root_password} -h {{ index .Object.metadata.labels "app.kubernetes.io/instance" }}
  delete:
    inputArtifactNames:
    - mysqlCloudDump
    phases:
    - func: KubeTask
      name: deleteFromBlobStore
      args:
        image: ghcr.io/kanisterio/mysql-sidecar:0.75.0
        namespace: "{{ .Namespace.Name }}"
        command:
        - bash
        - -o
        - errexit
        - -o
        - pipefail
        - -c
        - |
          s3_path="{{ .ArtifactsIn.mysqlCloudDump.KeyValue.s3path }}"
          kando location delete --profile '{{ toJson .Profile }}' --path ${s3_path}
```

## Snippet: Creating Kanister Restore ActionSet
Description: Command to create a restore ActionSet using kanctl. It references the previous backup ActionSet to restore data from.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_15
Language: bash

```bash
kanctl create actionset -n kanister --action restore --from "backup-qpnqv"
```

## Snippet: Creating a MySQL Client Pod in Kubernetes
Description: This command runs a temporary MySQL client pod in the application namespace with environment variables set for connecting to the MySQL server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day88.md#2025-04-17_snippet_3
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```