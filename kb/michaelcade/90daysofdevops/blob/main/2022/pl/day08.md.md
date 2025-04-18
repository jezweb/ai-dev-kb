# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day08.md
Language: multiple

## Snippet: Building Go Program into Executable Binary
Description: Command to compile a Go program into an executable binary. This creates a standalone executable that can be run on systems without Go installed.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day08.md#2025-04-17_snippet_2
Language: Shell

```Shell
go build main.go
```

## Snippet: Running Go Program from Command Line
Description: Command to run a Go program directly from the source file without compiling it first. This is useful for quick testing and development.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day08.md#2025-04-17_snippet_1
Language: Shell

```Shell
go run main.go
```

## Snippet: Running Compiled Go Executable
Description: Command to run the compiled Go executable on a Windows system. This demonstrates how to execute the binary created by the 'go build' command.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day08.md#2025-04-17_snippet_3
Language: Shell

```Shell
./main.exe
```

## Snippet: Creating Hello World Program in Go
Description: A simple Go program that prints 'Hello #90DaysOfDevOps' to the console. It demonstrates the basic structure of a Go program, including package declaration, importing the fmt package, and defining the main function.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day08.md#2025-04-17_snippet_0
Language: Go

```Go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```