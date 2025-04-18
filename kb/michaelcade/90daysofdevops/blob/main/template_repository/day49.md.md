# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md
Language: bash

## Snippet: Using chmod with Octal Notation in Linux
Description: Example showing how to change file permissions using chmod with octal notation. The command sets permissions for the file 'new_file.txt' to read/write/execute for the owner, read/write for the group, and read-only for others.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_1
Language: bash

```bash
chmod 764 new_file.txt
```

## Snippet: Using chmod with Symbolic Notation in Linux
Description: This command demonstrates how to change file permissions using symbolic notation with chmod. It grants execute permissions to the user while removing read permissions from others for 'script.sh'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_2
Language: bash

```bash
chmod u+x,o-r script.sh
```

## Snippet: Changing File Group Ownership with chgrp in Linux
Description: This command changes only the group ownership of a file. In this example, the group of 'project_file.txt' is changed to 'developers'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_4
Language: bash

```bash
chgrp developers project_file.txt
```

## Snippet: Making a Script Executable with chmod in Linux
Description: This command adds execute permission for the user (owner) of the shell script 'hello.sh', making it possible to run the script directly.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_6
Language: bash

```bash
chmod u+x hello.sh
```

## Snippet: Creating a Script File in Linux
Description: This command creates a shell script file named 'hello.sh' containing a simple command to print 'Hello, World!' to the console.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_5
Language: bash

```bash
echo '#!/bin/bash\necho "Hello, World!"' > hello.sh
```

## Snippet: Executing a Shell Script in Linux
Description: This command executes the shell script 'hello.sh' from the current directory. The script must have executable permissions for this to work.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_7
Language: bash

```bash
./hello.sh
```

## Snippet: Changing File Ownership with chown in Linux
Description: This command changes both the owner and group of a file. Here, 'file.txt' ownership is transferred to user 'michael' and group 'devops'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_3
Language: bash

```bash
chown michael:devops file.txt
```

## Snippet: Viewing File Permissions with ls -l Command in Linux
Description: This command shows detailed file information including permissions, ownership, size, and modification date. The '-l' flag enables the long listing format that reveals the permission string and other metadata.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day49.md#2025-04-17_snippet_0
Language: bash

```bash
ls -l
```