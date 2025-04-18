# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md
Language: multiple

## Snippet: Creating Restore ActionSet
Description: Command to create a restore ActionSet using kanctl, referencing a previous backup
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_8
Language: shell

```shell
kanctl create actionset -n kanister --action restore --from "backup-qpnqv"
```

## Snippet: Creating Kanister Backup ActionSet
Description: Command to create a backup ActionSet using kanctl, specifying the blueprint, statefulset, profile and secrets
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_6
Language: shell

```shell
kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store
```

## Snippet: Installing MySQL Database via Helm
Description: Commands to deploy MySQL database using Helm chart with specific configuration for persistence and volume permissions
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_0
Language: bash

```bash
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

## Snippet: Populating MySQL Database
Description: SQL commands to create and populate a sample database with account information
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_3
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

## Snippet: Kanister MySQL Backup Blueprint
Description: YAML configuration for Kanister blueprint defining backup, restore, and delete operations for MySQL database
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_4
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

## Snippet: Setting up MySQL Environment Variables
Description: Commands to retrieve MySQL root password and set up connection variables
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_1
Language: bash

```bash
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${APP_NAME} mysql-store -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
MYSQL_HOST=mysql-store.${APP_NAME}.svc.cluster.local
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
```

## Snippet: Connecting to MySQL Pod
Description: Shell script to create a temporary MySQL client pod for database operations
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_7
Language: shell

```shell
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Creating MySQL Client Pod
Description: Command to create a MySQL client pod for database operations
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_2
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Checking Kanister Profiles
Description: Command to list Kanister profiles in the my-production-app namespace
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day88.md#2025-04-17_snippet_5
Language: shell

```shell
kubectl get profiles.cr.kanister.io -n my-production-app
```