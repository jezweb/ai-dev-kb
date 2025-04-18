# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md
Language: bash

## Snippet: Suppressing All Output in Bash
Description: Shows how to discard both standard output and standard error by redirecting them to /dev/null. This effectively runs the command silently without displaying any output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_5
Language: bash

```bash
some_command > /dev/null 2>&1
```

## Snippet: Saving Command Output to a File in Bash
Description: Demonstrates redirecting the standard output (stdout) of a command to a file. This command lists all files in the current directory using 'ls -la' and saves the output to 'output.txt' instead of displaying it on the terminal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_0
Language: bash

```bash
ls -la > output.txt
```

## Snippet: Appending Command Output to a File in Bash
Description: Shows how to append output to a file rather than overwriting it. This uses the '>>' operator to add the results of 'ls -la' to the end of an existing file named 'output.txt'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_1
Language: bash

```bash
ls -la >> output.txt
```

## Snippet: Redirecting Standard Error to a File in Bash
Description: Demonstrates redirecting standard error (stderr) to a file. This command will send any error messages from 'some_command' to 'error.txt' while normal output still displays to the terminal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_2
Language: bash

```bash
some_command 2> error.txt
```

## Snippet: Suppressing Error Messages in Bash
Description: Demonstrates how to suppress error messages by redirecting stderr to /dev/null (the null device). This is useful when you want to hide expected errors or warnings from command output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_4
Language: bash

```bash
some_command 2> /dev/null
```

## Snippet: Using Here Documents in Bash
Description: Shows using a here document ('heredoc') to provide input to a command. This example sends a multi-line text block directly to the 'cat' command, which then outputs it to the terminal.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_7
Language: bash

```bash
cat << EOF
This is a multi-line
text block
EOF
```

## Snippet: Using Command Piping in Bash
Description: Demonstrates piping output from one command to another. This example uses 'grep' to filter the output of the 'ls -la' command, showing only lines containing the pattern 'example'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_6
Language: bash

```bash
ls -la | grep "example"
```

## Snippet: Redirecting Both Standard Output and Error to a File in Bash
Description: Shows how to redirect both standard output and standard error to the same file. This command captures all output types from 'some_command' and saves them to 'output.txt'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day44.md#2025-04-17_snippet_3
Language: bash

```bash
some_command > output.txt 2>&1
```