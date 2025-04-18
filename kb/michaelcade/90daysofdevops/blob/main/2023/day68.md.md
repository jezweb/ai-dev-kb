# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md
Language: multiple

## Snippet: Querying Encrypted Data
Description: SQL queries showing how to select encrypted data and decrypt it using pgp_sym_decrypt function.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_11
Language: sql

```sql
SELECT first_name, last_name, pgp_sym_decrypt(passwd::bytea, 'ENCRYPTIONPWD') FROM test_table
```

## Snippet: Running PostgreSQL Docker Container
Description: Docker command to run a custom PostgreSQL container with specified port and password configurations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_6
Language: bash

```bash
docker run -d 
--publish 5432:5432 
--env POSTGRES_PASSWORD=Testing1122 
--name demo-container 
ghcr.io/dbafromthecold/demo-postgres:latest
```

## Snippet: Encrypting Password Data
Description: SQL commands to update the password column with encrypted values using pgp_sym_encrypt function.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_10
Language: sql

```sql
UPDATE test_table
SET passwd = (pgp_sym_encrypt('Testing1122', 'ENCRYPTIONPWD'))
WHERE first_name = 'Andrew';

UPDATE test_table
SET passwd = (pgp_sym_encrypt('Testing3344', 'ENCRYPTIONPWD'))
WHERE first_name = 'Taylor';
```

## Snippet: Viewing Default Roles in PostgreSQL
Description: This SQL query retrieves a list of default roles in PostgreSQL. It's used to examine the predefined roles available for assigning permissions to users.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_2
Language: SQL

```SQL
SELECT groname FROM pg_group;
```

## Snippet: Creating a Custom User in PostgreSQL
Description: This SQL command creates a new user named 'test_user' with a specified password in PostgreSQL. It demonstrates how to add a new user account to the database system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_1
Language: SQL

```SQL
CREATE USER test_user WITH PASSWORD 'Testing1122'
```

## Snippet: Testing Write Access in PostgreSQL
Description: This SQL command attempts to update data in the 'actor' table. It's used to verify that the user does not have write access, demonstrating the effectiveness of the assigned read-only permissions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_5
Language: SQL

```SQL
UPDATE actor SET last_name = 'TEST'
```

## Snippet: Creating Table with Sensitive Data Column
Description: SQL command to create a table structure with columns for storing personal information including an encrypted password field.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_8
Language: sql

```sql
CREATE TABLE test_table (
  id smallint,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  dob DATE,
  email VARCHAR(255),
  passwd VARCHAR(255),
  CONSTRAINT test_table_pkey PRIMARY KEY (id)
)
```

## Snippet: Testing Read Access in PostgreSQL
Description: This SQL query selects all data from the 'actor' table. It's used to verify that the newly created user has read access to the database tables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_4
Language: SQL

```SQL
SELECT * FROM actor
```

## Snippet: Creating pgcrypto Extension
Description: SQL command to enable the pgcrypto extension for encryption capabilities in PostgreSQL.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_7
Language: sql

```sql
CREATE EXTENSION pgcrypto;
```

## Snippet: Viewing Existing Users in PostgreSQL
Description: This SQL query retrieves a list of existing users in the PostgreSQL database. It's used to check the current user accounts before creating a new one.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_0
Language: SQL

```SQL
SELECT usename FROM pg_user;
```

## Snippet: Granting Read Permissions to a User in PostgreSQL
Description: This SQL command grants the 'pg_read_all_data' role to the 'test_user', giving them read access to all data in the database. It demonstrates how to assign permissions using predefined roles.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_3
Language: SQL

```SQL
GRANT pg_read_all_data TO test_user;
```

## Snippet: Importing Sample Data
Description: SQL command to import data from a CSV file into the newly created table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day68.md#2025-04-17_snippet_9
Language: sql

```sql
COPY test_table(id,first_name, last_name, dob, email)
FROM '/dvdrental/test_data.csv'
DELIMITER ','
CSV HEADER;
```