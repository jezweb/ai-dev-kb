# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md
Language: multiple

## Snippet: Running Primary PostgreSQL Container
Description: Launches the primary PostgreSQL container with network configuration and volume mounting for base backup storage.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_1
Language: bash

```bash
docker run -d 
--publish 5432:5432 
--network=postgres 
--volume C:\temp\base:/postgres/archive/base 
--env POSTGRES_PASSWORD=Testing1122 
--name demo-container 
ghcr.io/dbafromthecold/demo-postgres
```

## Snippet: Running Secondary PostgreSQL Container
Description: Launches the secondary PostgreSQL container using the base backup from the primary.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_5
Language: bash

```bash
docker run -d 
--publish 5433:5432 
--network=postgres 
--volume C:\temp\base:/var/lib/postgresql/data 
--env POSTGRES_PASSWORD=Testing1122 
--name demo-container2 
ghcr.io/dbafromthecold/demo-postgres
```

## Snippet: Creating Replication Slot
Description: Creates a physical replication slot for WAL file management.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_3
Language: sql

```sql
SELECT * FROM pg_create_physical_replication_slot('replication_slot_slave1');
```

## Snippet: Creating Docker Network for PostgreSQL
Description: Creates a custom bridge network for Docker containers to communicate using container names.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_0
Language: bash

```bash
docker network create postgres
```

## Snippet: Creating Test Table and Data
Description: Creates a test table and imports data to verify replication functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_6
Language: sql

```sql
CREATE TABLE test_table (
  id smallint,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  dob DATE,
  email VARCHAR(255),
  CONSTRAINT test_table_pkey PRIMARY KEY (id)
)

COPY test_table(id,first_name, last_name, dob, email)
FROM '/dvdrental/test_data.csv'
DELIMITER ','
CSV HEADER;
```

## Snippet: Creating Replication User
Description: Creates a PostgreSQL user with replication privileges.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_2
Language: sql

```sql
CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'Testing1122';
```

## Snippet: Taking Base Backup
Description: Creates a base backup for the secondary instance including WAL files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day66.md#2025-04-17_snippet_4
Language: bash

```bash
pg_basebackup -D /postgres/archive/base -S replication_slot_slave1 -X stream -U replicator -Fp -R
```