# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day67.md
Language: multiple

## Snippet: Creating an Index on First Name in PostgreSQL
Description: SQL command to create an index on the first_name column of the actor table. This index improves query performance when filtering by first_name.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day67.md#2025-04-17_snippet_4
Language: SQL

```SQL
CREATE INDEX idx_actor_first_name ON public.actor (first_name)
```

## Snippet: Querying PostgreSQL Table with Full Table Scan
Description: SQL query to select all records from the actor table where the last_name is 'Cage'. This demonstrates a full table scan operation when executed in PostgreSQL.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day67.md#2025-04-17_snippet_1
Language: SQL

```SQL
SELECT * FROM actor WHERE last_name = 'Cage'
```

## Snippet: Running a PostgreSQL Docker Container for Performance Testing
Description: Command to run a PostgreSQL Docker container with the dvdrental sample database for performance testing and demonstration. The container is exposed on port 5432 with a specified password.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day67.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d \
    --publish 5432:5432 \
    --env POSTGRES_PASSWORD=Testing1122 \
    --name demo-container \
    ghcr.io/dbafromthecold/demo-postgres:latest
```

## Snippet: Querying PostgreSQL Table by First Name
Description: SQL query to select all records from the actor table where the first_name is 'Nick'. This demonstrates a query that may benefit from an index on the first_name column.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day67.md#2025-04-17_snippet_3
Language: SQL

```SQL
SELECT * FROM actor WHERE first_name = 'Nick'
```

## Snippet: Disabling Sequential Scan in PostgreSQL
Description: SQL command to disable sequential scans in PostgreSQL, forcing the query optimizer to use indexes instead. This setting is useful for testing index usage but should not be used in production.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day67.md#2025-04-17_snippet_2
Language: SQL

```SQL
SET enable_seqscan='false'
```