# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md
Language: multiple

## Snippet: Switching WAL File in PostgreSQL
Description: Command to force PostgreSQL to switch to a new WAL file, which ensures the current WAL file is archived and available for the recovery process.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_15
Language: bash

```bash
psql -c "select pg_switch_wal();"
```

## Snippet: Importing Data from CSV into PostgreSQL
Description: SQL command to import data from a CSV file into the test_table using the COPY command, which specifies the delimiter and includes a header row.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_10
Language: sql

```sql
COPY test_table(id,first_name, last_name, dob, email)
FROM '/dvdrental/test_data.csv'
DELIMITER ','
CSV HEADER;
```

## Snippet: Creating Recovery Signal File for PostgreSQL
Description: Command to create a recovery.signal file in the base backup directory, which indicates to PostgreSQL that recovery should be performed when the server is started.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_13
Language: bash

```bash
touch /postgres/archive/base/recovery.signal
```

## Snippet: Simulating Data Loss in PostgreSQL
Description: SQL command to delete all records from the test_table, simulating a data loss scenario that will require point-in-time recovery.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_12
Language: sql

```sql
DELETE FROM test_table
```

## Snippet: Configuring WAL Archiving in PostgreSQL
Description: Configuration settings to enable Write-Ahead Log (WAL) archiving in PostgreSQL by adding parameters to the postgresql.conf file. This sets up the necessary archiving mode and commands for point-in-time recovery.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_6
Language: bash

```bash
archive_mode = on
archive_command = 'cp %p /postgres/archive/wal/%f'
```

## Snippet: Running PostgreSQL Container with Docker
Description: Docker command to run a PostgreSQL container with the required configuration for the demonstration, including setting the password and publishing the default PostgreSQL port.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_4
Language: bash

```bash
docker run -d \
    --publish 5432:5432 \
    --env POSTGRES_PASSWORD=Testing1122 \
    --name demo-container \
    ghcr.io/dbafromthecold/demo-postgres:latest
```

## Snippet: Configuring PostgreSQL for Recovery
Description: Configuration settings to add to postgresql.conf that specify recovery parameters including the WAL archive location, target recovery time, and recovery behavior options.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_14
Language: bash

```bash
restore_command = 'cp /postgres/archive/wal/%f %p'
recovery_target_time = '2023-02-13 10:20:00'
recovery_target_inclusive = false
data_directory = '/postgres/archive/base'
```

## Snippet: Viewing PostgreSQL Container Logs
Description: Docker command to view the logs of the PostgreSQL container, which shows the recovery process status and any errors that might occur.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_16
Language: bash

```bash
docker container logs demo-container
```

## Snippet: Terminating Database Connections
Description: SQL query to terminate all active connections to the dvdrental database before dropping it.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_2
Language: sql

```sql
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'dvdrental'
  AND pid <> pg_backend_pid();
```

## Snippet: Accessing PostgreSQL Container Shell
Description: Docker exec command to access the bash shell of the running PostgreSQL container as the postgres user.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_5
Language: bash

```bash
docker exec -it -u postgres demo-container bash
```

## Snippet: Creating New Database for Restore
Description: SQL command to create a new database for restoring the backup.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_3
Language: sql

```sql
CREATE DATABASE dvdrental_restore
```

## Snippet: Creating Test Table in PostgreSQL
Description: SQL commands to create a test table with a primary key constraint and several columns for demonstration purposes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_9
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
```

## Snippet: Running PostgreSQL Docker Container
Description: Docker command to start a custom PostgreSQL container with the dvdrental database pre-loaded.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d \
--publish 5432:5432 \
--env POSTGRES_PASSWORD=Testing1122 \
--name demo-container \
ghcr.io/dbafromthecold/demo-postgres:latest
```

## Snippet: Restarting PostgreSQL Container
Description: Docker command to restart the PostgreSQL container after configuration changes to enable the WAL archiving functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_7
Language: bash

```bash
docker container restart demo-container
```

## Snippet: Creating Base Backup of PostgreSQL Cluster
Description: Command to create a baseline backup of the entire PostgreSQL cluster using pg_basebackup. This backs up all files in the database cluster as a starting point for point-in-time recovery.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_8
Language: bash

```bash
pg_basebackup -D  /postgres/archive/base
```

## Snippet: Querying Test Table Data in PostgreSQL
Description: SQL query to retrieve all data from the test_table, used to verify data was successfully imported.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_11
Language: sql

```sql
SELECT * FROM test_table
```

## Snippet: Resuming WAL Replay for PostgreSQL Recovery
Description: PostgreSQL command to resume the replay of WAL files after the recovery process has paused at the target recovery point.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_17
Language: bash

```bash
psql -c "select pg_wal_replay_resume();"
```

## Snippet: Dropping PostgreSQL Database
Description: SQL command to drop the dvdrental database.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day65.md#2025-04-17_snippet_1
Language: sql

```sql
DROP DATABASE dvdrental
```