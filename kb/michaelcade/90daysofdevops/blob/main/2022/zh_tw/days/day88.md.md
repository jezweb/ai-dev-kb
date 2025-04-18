# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md
Language: multiple

## Snippet: Kanister MySQL Backup Blueprint
Description: YAML configuration defining the Kanister Blueprint for MySQL backup, restore, and delete operations
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_3
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

## Snippet: Describing a Kanister ActionSet
Description: Command to view the details of a specific ActionSet including its status and progress.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_6
Language: bash

```bash
kubectl --namespace kanister describe actionset backup-qpnqv
```

## Snippet: Retrieving Kanister Profiles in Kubernetes
Description: Command to list Kanister profiles in the my-production-app namespace. Profiles contain connection information for backup destinations like S3.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl get profiles.cr.kanister.io -n my-production-app
```

## Snippet: Creating a MySQL Client Pod for Database Operations
Description: Command to run a temporary MySQL client pod with necessary environment variables to connect to the MySQL database in the application namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_7
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Creating a Kanister Backup ActionSet
Description: Command using kanctl to create an ActionSet that triggers a MySQL database backup. It references the blueprint, statefulset, profile, and necessary secrets.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_5
Language: bash

```bash
kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store
```

## Snippet: Creating a Kanister Restore ActionSet
Description: Command to create a restore ActionSet referencing a previously created backup ActionSet to recover the deleted database.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_10
Language: bash

```bash
kanctl create actionset -n kanister --action restore --from "backup-qpnqv"
```

## Snippet: MySQL Database Population Script
Description: Bash script to populate MySQL database with initial account data
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_2
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
```

## Snippet: Verifying Database Restoration
Description: Commands to verify that the database and its data have been successfully restored after the restore operation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_11
Language: bash

```bash
echo "select * from Accounts;" |  ${MYSQL_EXEC}
```

## Snippet: MySQL Commands for Database Management
Description: SQL commands to show databases and deliberately drop a database to simulate data loss before restoration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_8
Language: bash

```bash
echo "DROP DATABASE myImportantData;" |  ${MYSQL_EXEC}
```

## Snippet: Deploying MySQL Database
Description: Commands to deploy MySQL using Helm and setup initial environment variables
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_1
Language: bash

```bash
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

## Snippet: Installing Kanister via Helm
Description: Helm command to install Kanister operator into a Kubernetes cluster with version 0.75.0
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_0
Language: bash

```bash
helm install kanister --namespace kanister kanister/kanister-operator --set image.tag=0.75.0 --create-namespace
```

## Snippet: Listing Kanister ActionSets
Description: Command to retrieve all ActionSets in the Kanister namespace to identify the backup ActionSet for restoration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day88.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl get actionset -n kanister
```