# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day12.md
Language: Go

## Snippet: Calculating Remaining Days Based on User Input in Go
Description: This code snippet shows how to perform a calculation based on user input. It subtracts the user-provided DaysCompleted from a predefined remainingDays variable to calculate the number of days left in a challenge.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day12.md#2025-04-17_snippet_1
Language: Go

```Go
remainingDays = remainingDays - DaysCompleted
```

## Snippet: Getting User Input for Twitter Name in Go
Description: This snippet demonstrates how to use fmt.Scan() to get user input for a variable named TwitterName. It introduces the use of the & operator to create a pointer to the variable.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day12.md#2025-04-17_snippet_0
Language: Go

```Go
fmt.Scan(&TwitterName)
```

## Snippet: Demonstrating Pointer Usage in Go
Description: This snippet demonstrates the difference between printing a variable with and without the & operator. It shows how using & returns the memory address of the variable instead of its value.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day12.md#2025-04-17_snippet_2
Language: Go

```Go
fmt.Println(TwitterName)
fmt.Println(&TwitterName)
```