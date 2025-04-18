# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md
Language: go

## Snippet: Complete Go Program with Multiple Variables
Description: Program showing multiple variables for tracking progress in the challenge. It demonstrates using variables of different types (string and integers) together in output statements.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_3
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

## Snippet: Go Program with Variables and Constants
Description: Extended program that uses both a variable for the challenge name and a constant for the total number of days. This demonstrates the difference between variables and constants in Go.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_2
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

## Snippet: Explicit Type Declaration for Variables in Go
Description: Example showing how to explicitly declare variable types in Go when not assigning an initial value. This is necessary when you want to define a variable without initializing it.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_5
Language: go

```go
var TwitterHandle string
var DaysCompleted uint
```

## Snippet: Shorthand Variable Declaration in Go
Description: Example of using the shorthand declaration syntax for variables in Go. This cleaner syntax can only be used for variables, not constants.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_4
Language: go

```go
func main() {
    challenge := "#90DaysOfDevOps"
    const daystotal = 90
```

## Snippet: Declaring Variables in Go
Description: Simple example of declaring and using a variable in Go to store the challenge name. This demonstrates basic variable declaration syntax and using the variable in string output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_0
Language: go

```go
var challenge = "#90DaysOfDevOps"
```

## Snippet: Printing Variable Types in Go
Description: Code snippet showing how to use the fmt.Printf function to print the data types of variables using the %T format specifier. This is useful for debugging or understanding type inference.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_6
Language: go

```go
fmt.Printf("challenge is %T, daystotal is %T, dayscomplete is %T\n", conference, daystotal, dayscomplete)
```

## Snippet: Basic Go Program with a Single Variable
Description: A complete Go program that declares a variable to store the challenge name and prints a welcome message using that variable. Shows the basic structure of a Go program with imports and the main function.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day11.md#2025-04-17_snippet_1
Language: go

```go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    fmt.Println("Welcome to", challenge, "")
}
```