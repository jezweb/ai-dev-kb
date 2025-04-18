# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md
Language: multiple

## Snippet: Setting Up MySQL Connection Environment Variables
Description: Script to retrieve MySQL root password from Kubernetes secret and set up environment variables for connecting to the MySQL database.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_2
Language: bash

```bash
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${APP_NAME} mysql-store -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
MYSQL_HOST=mysql-store.${APP_NAME}.svc.cluster.local
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
```

## Snippet: Initializing and Populating MySQL Database with Sample Data
Description: Script to create a database, define a table schema for Accounts, and populate it with sample data for testing backup and restore operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_4
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

## Snippet: Installing Kanister with Helm in Kubernetes
Description: Command to install the Kanister operator in a Kubernetes cluster using Helm, creating a dedicated namespace and specifying the image version.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_0
Language: bash

```bash
helm install kanister --namespace kanister kanister/kanister-operator --set image.tag=0.75.0 --create-namespace
```

## Snippet: Create Kanister Backup ActionSet
Description: Command to create an ActionSet for backing up MySQL data using Kanister, specifying the blueprint, statefulset, and necessary credentials
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_9
Language: bash

```bash
kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store
```

## Snippet: Database Operations
Description: SQL commands to show databases and drop a specific database for testing restore functionality
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_11
Language: sql

```sql
echo "SHOW DATABASES;" |  ${MYSQL_EXEC}
echo "DROP DATABASE myImportantData;" |  ${MYSQL_EXEC}
```

## Snippet: Applying MySQL Blueprint to Kanister
Description: Command to create the MySQL Blueprint custom resource in the Kanister namespace, enabling backup and restore operations for MySQL databases.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_7
Language: bash

```bash
kubectl create -f mysql-blueprint.yml -n kanister
```

## Snippet: MySQL Backup and Restore Blueprint for Kanister
Description: YAML definition for a Kanister Blueprint that defines backup, restore, and delete operations for a MySQL database. This specifies how to dump data, push to S3, and restore from S3.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_6
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

## Snippet: Deploying MySQL Database with Helm
Description: Commands to create a namespace and deploy a MySQL database using the Bitnami Helm chart with specified configuration for persistence and volume permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_1
Language: bash

```bash
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

## Snippet: Create Restore ActionSet
Description: Command to create a restore ActionSet from a previous backup
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_12
Language: bash

```bash
kanctl create actionset -n kanister --action restore --from "backup-qpnqv"
```

## Snippet: Check Kanister Profile Status
Description: Command to view configured Kanister profiles in the namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl get profiles.cr.kanister.io -n my-production-app
```

## Snippet: Connect to MySQL Pod
Description: Script to create a temporary MySQL client pod for database operations
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_10
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Creating MySQL Client Pod in Kubernetes
Description: Command to run a temporary MySQL client pod in the same namespace as the MySQL database, passing necessary environment variables for database connection.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_3
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Creating Kanister S3 Profile
Description: Command to create a Kanister profile that configures the AWS S3 bucket as the storage location for database backups using the kanctl CLI tool.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day88.md#2025-04-17_snippet_5
Language: bash

```bash
kanctl create profile s3compliant --access-key $ACCESS_KEY --secret-key $SECRET_KEY --bucket $BUCKET --region eu-west-2 --namespace my-production-app
```