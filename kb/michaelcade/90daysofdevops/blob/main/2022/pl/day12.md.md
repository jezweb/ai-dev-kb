# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day12.md
Language: go

## Snippet: Complete User Input Program in Go
Description: Full example of a Go program that takes user input for Twitter handle and days completed, then calculates remaining days
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day12.md#2025-04-17_snippet_2
Language: go

```go
var TwitterName string
var DaysCompleted int
fmt.Println("Enter your Twitter Handle: ")
fmt.Scan(&TwitterName)
fmt.Println("Enter the number of days completed: ")
fmt.Scan(&DaysCompleted)
remainingDays = remainingDays - DaysCompleted
```

## Snippet: Simple Variable Calculation in Go
Description: Shows how to perform basic arithmetic with variables in Go to calculate remaining days
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day12.md#2025-04-17_snippet_1
Language: go

```go
remainingDays = remainingDays - DaysCompleted
```

## Snippet: Basic Pointer Usage in Go
Description: Demonstrates how to use fmt.Scan to get user input with pointers in Go
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day12.md#2025-04-17_snippet_0
Language: go

```go
fmt.Scan(&TwitterName)
```