# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md
Language: multiple

## Snippet: Running PostgreSQL Container for Database Monitoring Demo
Description: Docker command to create and run a PostgreSQL container for demonstration purposes. The container is exposed on port 5432 and includes a predefined password.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d \
    --publish 5432:5432 \
    --env POSTGRES_PASSWORD=Testing1122 \
    --name demo-container \
    ghcr.io/dbafromthecold/demo-postgres
```

## Snippet: Viewing PostgreSQL Error Log
Description: Command to display the contents of a PostgreSQL log file, showing the captured errors. The filename includes a timestamp based on the log_filename configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_7
Language: bash

```bash
cat postgresql-2023-02-24_110854.log
```

## Snippet: Opening PostgreSQL Configuration File
Description: Command to open the PostgreSQL configuration file (postgresql.conf) using vim editor. This file contains the database's settings including logging configuration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_2
Language: bash

```bash
vim $PGDATA/postgresql.conf
```

## Snippet: Navigating to PostgreSQL Log Directory
Description: Command to change directory to the PostgreSQL log location, where the error logs are stored according to the configuration settings.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_6
Language: bash

```bash
cd $PGDATA/log
```

## Snippet: Restarting PostgreSQL Container
Description: Docker command to restart the PostgreSQL container after configuration changes, allowing the new logging settings to take effect.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_4
Language: bash

```bash
docker restart container demo-container
```

## Snippet: Accessing PostgreSQL Container as postgres User
Description: Docker command to execute an interactive bash shell inside the PostgreSQL container as the postgres user, allowing for configuration changes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_1
Language: bash

```bash
docker exec -it -u postgres demo-container bash
```

## Snippet: Executing SQL Query to Generate Error
Description: SQL query that deliberately causes a division by zero error, used to demonstrate how errors are captured in the PostgreSQL logs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_5
Language: SQL

```SQL
SELECT 1/0
```

## Snippet: Configuring PostgreSQL Logging
Description: Configuration parameters to enable logging in PostgreSQL. These settings turn on the logging collector, specify the log directory, and define the log filename format with timestamps.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day69.md#2025-04-17_snippet_3
Language: bash

```bash
logging_collector = on
log_directory = log
log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'
```