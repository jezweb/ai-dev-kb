# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day12.md
Language: go

## Snippet: Obtaining User Input for Twitter Name in Go
Description: This snippet demonstrates how to use fmt.Scan() to get user input for a Twitter name variable. It introduces the concept of using & for pointers when scanning input.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day12.md#2025-04-17_snippet_0
Language: go

```go
fmt.Scan(&TwitterName)
```

## Snippet: Demonstrating Pointer Usage in Go
Description: This snippet shows how to print a variable's value and its memory address using pointers. It illustrates the difference between using a variable directly and using its pointer.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day12.md#2025-04-17_snippet_2
Language: go

```go
fmt.Println("Memory Address:", &TwitterName)
fmt.Println("Value:", TwitterName)
```

## Snippet: Calculating Remaining Days in Go Challenge
Description: This code calculates the remaining days in a 90-day challenge based on user input. It demonstrates variable manipulation and basic arithmetic operations in Go.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day12.md#2025-04-17_snippet_1
Language: go

```go
remainingDays = remainingDays - DaysCompleted
```