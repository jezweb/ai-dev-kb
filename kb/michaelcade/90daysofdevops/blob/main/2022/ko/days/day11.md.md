# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md
Language: go

## Snippet: Declaring Variables in Go
Description: A simple Go program that declares a variable to store the challenge name and prints a welcome message using the fmt package.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md#2025-04-17_snippet_0
Language: go

```go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    fmt.Println("Welcome to", challenge, "")
}
```

## Snippet: Adding Multiple Variables to Go Program
Description: A Go program that tracks challenge progress by adding a variable for completed days alongside existing challenge name and total days variables.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md#2025-04-17_snippet_2
Language: go

```go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    const daystotal = 90
    var dayscomplete = 11

    fmt.Println("Welcome to", challenge, "")
    fmt.Println("This is a", daystotal, "challenge and you have completed", dayscomplete, "days")
    fmt.Println("Great work")
}
```

## Snippet: Shorthand Variable Declarations in Go
Description: An alternative method for declaring variables in Go using the shorthand := syntax, which is more concise and allows Go to infer the variable type.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md#2025-04-17_snippet_3
Language: go

```go
func main() {
    challenge := "#90DaysOfDevOps"
    const daystotal = 90
```

## Snippet: Defining Variable Types in Go
Description: Examples of explicitly declaring variable types in Go, specifying string for text data and uint for non-negative integers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md#2025-04-17_snippet_4
Language: go

```go
var TwitterHandle string
var DaysCompleted uint
```

## Snippet: Using Constants and Variables in Go
Description: An expanded Go program that incorporates both variables and constants to track challenge information, showing how to declare and use different types of values.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md#2025-04-17_snippet_1
Language: go

```go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    const daystotal = 90

    fmt.Println("Welcome to", challenge, "")
    fmt.Println("This is a", daystotal, "challenge")
}
```

## Snippet: Identifying Variable Types in Go
Description: Using the fmt.Printf function with %T format specifier to display the data types of variables during program execution.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day11.md#2025-04-17_snippet_5
Language: go

```go
fmt.Printf("challenge is %T, daystotal is %T, dayscomplete is %T\n", conference, daystotal, dayscomplete)
```