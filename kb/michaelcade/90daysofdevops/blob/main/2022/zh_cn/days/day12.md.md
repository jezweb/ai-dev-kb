# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day12.md
Language: go

## Snippet: Using fmt.Scan() with Pointers for User Input in Go
Description: Demonstrates how to use the fmt.Scan() function to capture user input in a Go program. The ampersand (&) is used before the variable name to create a pointer that references the memory address where the input will be stored.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day12.md#2025-04-17_snippet_0
Language: go

```go
fmt.Scan(&TwitterName)
```

## Snippet: Calculating Remaining Days with User Input in Go
Description: Shows how to perform a simple calculation using variables in Go. The code subtracts the user-provided number of completed days from the total days to determine how many days remain in the challenge.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day12.md#2025-04-17_snippet_1
Language: go

```go
remainingDays = remainingDays - DaysCompleted
```