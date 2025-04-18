# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day08.md
Language: multiple

## Snippet: Basic Go Hello World Program
Description: A simple Go program that prints 'Hello #90DaysOfDevOps' to the console. Demonstrates the basic structure of a Go program including package declaration, importing the fmt package, and defining the main function.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day08.md#2025-04-17_snippet_0
Language: go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello #90DaysOfDevOps")
}
```

## Snippet: Go Program Execution Command
Description: Command to run a Go program directly without creating a binary
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day08.md#2025-04-17_snippet_1
Language: bash

```bash
go run main.go
```

## Snippet: Go Program Build Command
Description: Command to compile the Go program into an executable binary
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day08.md#2025-04-17_snippet_2
Language: bash

```bash
go build main.go
```