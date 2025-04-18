# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day08.md
Language: multiple

## Snippet: Building Go Program Binary
Description: Command to compile the Go program into an executable binary file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day08.md#2025-04-17_snippet_2
Language: bash

```bash
go build main.go
```

## Snippet: Go Hello World Program Implementation
Description: Basic Go program that prints 'Hello #90DaysOfDevOps' to the console. Demonstrates the main package, importing fmt package, and a simple print statement.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day08.md#2025-04-17_snippet_0
Language: go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```

## Snippet: Running Compiled Go Binary
Description: Commands to execute the compiled Go binary on different operating systems.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day08.md#2025-04-17_snippet_3
Language: bash

```bash
# Windows
$ ./main.exe
Hello #90DaysOfDevOps

# Mac - 올긴이
$ ./main
Hello #90DaysOfDevOps
```

## Snippet: Running Go Program from Terminal
Description: Command to execute the Go program directly without creating a binary.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day08.md#2025-04-17_snippet_1
Language: bash

```bash
go run main.go
```