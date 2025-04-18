# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md
Language: multiple

## Snippet: Defining MySQL Backup Blueprint in Kanister
Description: This YAML file defines a Kanister Blueprint that specifies how to backup, restore, and delete MySQL database backups, including the commands for mysqldump and restore operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_7
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

## Snippet: Creating Kanister S3 Profile for Backup Storage
Description: This command creates a Kanister profile that specifies AWS S3 as the storage location for database backups, using environment variables for AWS credentials.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_6
Language: bash

```bash
kanctl create profile s3compliant --access-key $ACCESS_KEY --secret-key $SECRET_KEY --bucket $BUCKET --region eu-west-2 --namespace my-production-app
```

## Snippet: Installing Kanister Operator in Kubernetes using Helm
Description: This command installs the Kanister operator in a Kubernetes cluster using Helm, creating a dedicated namespace and specifying the image version 0.75.0.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_0
Language: bash

```bash
helm install kanister --namespace kanister kanister/kanister-operator --set image.tag=0.75.0 --create-namespace
```

## Snippet: Initializing MySQL Database with Sample Data
Description: This script creates a new database named 'myImportantData', creates an Accounts table and populates it with sample data for testing backup and restore operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_5
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

## Snippet: Deploying MySQL Database in Kubernetes with Helm
Description: This bash script sets up a MySQL database deployment in Kubernetes using the Bitnami Helm chart with persistent storage and appropriate permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_1
Language: bash

```bash
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

## Snippet: Creating ActionSet to Execute MySQL Backup
Description: This command creates a Kanister ActionSet that triggers the backup action defined in the blueprint, targeting the MySQL StatefulSet and using the S3 profile for storage.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_10
Language: bash

```bash
kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store
```

## Snippet: Applying MySQL Backup Blueprint to Kubernetes Cluster
Description: This command applies the MySQL Blueprint YAML definition to the Kanister namespace in the Kubernetes cluster.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_8
Language: bash

```bash
kubectl create -f mysql-blueprint.yml -n kanister
```

## Snippet: Checking Backup ActionSet Status
Description: This command inspects the status of the backup ActionSet to confirm if the backup operation was successful or if there were any errors.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_11
Language: bash

```bash
kubectl --namespace kanister describe actionset backup-qpnqv
```

## Snippet: Setting Up MySQL Connection Variables
Description: These commands retrieve the MySQL root password from Kubernetes secrets and set up environment variables needed for connecting to the MySQL instance.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_2
Language: bash

```bash
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${APP_NAME} mysql-store -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
MYSQL_HOST=mysql-store.${APP_NAME}.svc.cluster.local
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
```

## Snippet: Retrieving Kanister Profiles for Backup Configuration
Description: This command retrieves the available Kanister profiles in the application namespace which will be used for defining where backups should be stored.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_9
Language: bash

```bash
kubectl get profiles.cr.kanister.io -n my-production-app
```

## Snippet: Creating MySQL Client Container for Database Operations
Description: This command creates a temporary MySQL client pod in the same namespace as the database, passing necessary environment variables for database operations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_3
Language: bash

```bash
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

## Snippet: Removing Existing MySQL Client Pod
Description: This command deletes an existing MySQL client pod if one is already running in the namespace.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day88.md#2025-04-17_snippet_4
Language: bash

```bash
kubectl delete pod -n ${APP_NAME} mysql-client
```