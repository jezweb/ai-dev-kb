# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md
Language: multiple

## Snippet: Joining Tables with INNER JOIN in SQL
Description: SQL query demonstrating an INNER JOIN between the staff and address tables using the address_id column. This retrieves all staff members with their corresponding address information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_5
Language: sql

```sql
SELECT *
FROM staff s
INNER JOIN address a ON s.address_id = a.address_id
```

## Snippet: Updating Email Address in PostgreSQL
Description: SQL UPDATE statement that changes the email address for a staff member named 'Andrew'. This demonstrates how to update existing data in a table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_13
Language: sql

```sql
UPDATE staff
SET email = 'apruski@90daysofdevops.com'
WHERE first_name = 'Andrew'
```

## Snippet: Creating a New Table in PostgreSQL
Description: Complete SQL statement for creating a new table with various column types and a primary key constraint. The table includes columns for ID, names, date of birth, and email.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_20
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

## Snippet: Using LEFT OUTER JOIN in SQL
Description: SQL query demonstrating a LEFT OUTER JOIN which retrieves all rows from the staff table even if there is no matching row in the address table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_8
Language: sql

```sql
SELECT *
FROM staff s
LEFT OUTER JOIN address a ON s.address_id = a.address_id
```

## Snippet: Basic DELETE Statement Structure in SQL
Description: The fundamental structure of a DELETE statement in SQL, showing the syntax for removing rows from a table with filtering conditions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_14
Language: sql

```sql
DELETE FROM table
WHERE some_condition
```

## Snippet: Running PostgreSQL in Docker Container
Description: Command to run a custom PostgreSQL Docker container with a demo database (dvdrental). The container exposes port 5432 and sets the PostgreSQL password to 'Testing1122'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d \
--publish 5432:5432 \
--env POSTGRES_PASSWORD=Testing1122 \
--name demo-container \
ghcr.io/dbafromthecold/demo-postgres:latest
```

## Snippet: Selecting Specific Columns with JOIN and WHERE Clause
Description: SQL query that selects specific columns from both staff and address tables, joining them and filtering for staff with first_name 'Mike'. This demonstrates column selection and table aliasing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_6
Language: sql

```sql
SELECT s.first_name, s.last_name, a.address, a.district, a.phone
FROM staff s
INNER JOIN address a ON s.address_id = a.address_id
WHERE first_name = 'Mike'
```

## Snippet: SELECT All Data from a Table in PostgreSQL
Description: SQL query to retrieve all columns and rows from the staff table in the PostgreSQL database. The asterisk (*) indicates that all columns should be returned.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_3
Language: sql

```sql
SELECT *
FROM staff
```

## Snippet: Filtering Data with WHERE Clause in SQL
Description: SQL query that filters data from the staff table to only return rows where the first_name column has the value 'Mike'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_4
Language: sql

```sql
SELECT *
FROM  staff
WHERE first_name = 'Mike'
```

## Snippet: Importing Data from CSV File in PostgreSQL
Description: SQL command to import data from a CSV file into a PostgreSQL table using the COPY command. The command specifies the delimiter and indicates that the CSV file includes a header row.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_21
Language: sql

```sql
COPY test_table(id,first_name, last_name, dob, email)
FROM '/dvdrental/test_data.csv'
DELIMITER ','
CSV HEADER;
```

## Snippet: Defining a Foreign Key Constraint in PostgreSQL
Description: Shows how to create a foreign key constraint in PostgreSQL with update and delete rules. This constraint links the address_id column in the staff table to the address table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_19
Language: sql

```sql
CONSTRAINT staff_address_id_fkey FOREIGN KEY (address_id)
        	REFERENCES public.address (address_id) MATCH SIMPLE
        	ON UPDATE CASCADE
        	ON DELETE RESTRICT
```

## Snippet: Defining a Primary Key Constraint in PostgreSQL
Description: Shows the syntax for defining a primary key constraint in PostgreSQL. This constraint ensures each row has a unique identifier using the staff_id column.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_18
Language: sql

```sql
CONSTRAINT staff_pkey PRIMARY KEY (staff_id)
```

## Snippet: Selecting All Data from a PostgreSQL Table
Description: A simple SELECT statement to retrieve all columns and rows from a table in PostgreSQL. This query is used to verify that data was successfully imported into the table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_22
Language: sql

```sql
SELECT * FROM test_table
```

## Snippet: Verifying Inserted Data with SELECT
Description: SQL query to verify that a new row has been inserted by selecting specific columns from the staff and address tables for a staff member named 'Andrew'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_10
Language: sql

```sql
SELECT s.first_name, s.last_name, a.address, a.district, a.phone
FROM staff s
INNER JOIN address a ON s.address_id = a.address_id
WHERE first_name = 'Andrew'
```

## Snippet: Basic SQL SELECT Statement Structure
Description: The fundamental structure of a SELECT statement in SQL, showing the syntax for retrieving data with filtering conditions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_2
Language: sql

```sql
SELECT data_we_want_to_retrieve
FROM table
WHERE some_condition
```

## Snippet: Deleting a Staff Member from PostgreSQL
Description: SQL DELETE statement that removes a staff member named 'Andrew' from the staff table. This demonstrates how to delete data from a table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_15
Language: sql

```sql
DELETE FROM staff
WHERE first_name = 'Andrew'
```

## Snippet: Examining a PostgreSQL Column Definition with Constraints
Description: Shows how a column is defined in PostgreSQL with name, data type and NOT NULL constraint. This example demonstrates the address_id column which is used as a foreign key.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_16
Language: sql

```sql
address_id smallint NOT NULL
```

## Snippet: Inserting Data into PostgreSQL Table
Description: SQL INSERT statement that adds a new staff member to the staff table. The statement specifies values for all columns in the table, including a foreign key reference to the address table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_9
Language: sql

```sql
INSERT INTO staff(
staff_id, first_name, last_name, address_id, 
email, store_id, active, username, password, last_update, picture)
VALUES
(999, 'Andrew', 'Pruski', 1, 'andrew.pruski@90daysofdevops.com', 
'2', 'T', 'apruski', 'Testing1122', CURRENT_DATE, '');
```

## Snippet: Retrieving Email Address Before Update
Description: SQL query to view a staff member's current email address before updating it, filtering for staff with first_name 'Andrew'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_12
Language: sql

```sql
SELECT s.first_name, s.last_name, s.email
FROM staff s
WHERE first_name = 'Andrew'
```

## Snippet: PostgreSQL Column Definition with Default Value
Description: Shows how to define a timestamp column with a default value in PostgreSQL. The last_update column will automatically use the current time if no value is provided during insertion.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_17
Language: sql

```sql
last_update timestamp without time zone NOT NULL DEFAULT 'now()'
```

## Snippet: Checking Running Docker Containers
Description: Command to list all running Docker containers, used to verify that the PostgreSQL container is running properly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_1
Language: bash

```bash
docker container ls
```

## Snippet: Using RIGHT OUTER JOIN in SQL
Description: SQL query demonstrating a RIGHT OUTER JOIN which retrieves all rows from the address table even if there is no matching row in the staff table.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_7
Language: sql

```sql
SELECT *
FROM staff s
RIGHT OUTER JOIN address a ON s.address_id = a.address_id
```

## Snippet: Basic UPDATE Statement Structure in SQL
Description: The fundamental structure of an UPDATE statement in SQL, showing the syntax for modifying data with filtering conditions.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day64.md#2025-04-17_snippet_11
Language: sql

```sql
UPDATE table
SET column = new_value
WHERE some_condition
```