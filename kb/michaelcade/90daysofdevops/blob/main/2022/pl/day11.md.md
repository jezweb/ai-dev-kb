# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md
Language: Go

## Snippet: Using Short Variable Declaration in Go
Description: Demonstrates the short variable declaration syntax (:=) which is a more concise way to declare variables in Go. This syntax can only be used for variables, not constants.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_4
Language: Go

```Go
func main() {
    challenge := "#90DaysOfDevOps"
    const daystotal = 90
```

## Snippet: Declaring and Using Constants in Go
Description: Demonstrates how to use both variables and constants in a Go program. Constants are values that cannot change during program execution, making them ideal for fixed values like the challenge duration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_2
Language: Go

```Go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    const daystotal = 90

    fmt.Println("Welcome to", challenge, "")
    fmt.Println("This is a", daystotal, "challenge")
}
```

## Snippet: Checking Variable Types with fmt.Printf in Go
Description: Demonstrates how to use fmt.Printf with the %T verb to print the type of variables. This is useful for debugging and understanding type inference in Go.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_6
Language: Go

```Go
fmt.Printf("challenge is %T, daystotal is %T, dayscomplete is %T\n", conference, daystotal, dayscomplete)
```

## Snippet: Working with Multiple Variables in Go
Description: Shows how to track progress in the challenge by adding a variable for completed days. This example uses three different values (a string, a constant integer, and a variable integer) in the output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_3
Language: Go

```Go
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

## Snippet: Declaring a Basic Variable in Go
Description: Demonstrates how to declare a simple string variable in Go using the var keyword. This snippet shows the most basic form of variable declaration.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_0
Language: Go

```Go
var challenge = "#90DaysOfDevOps"
```

## Snippet: Explicitly Declaring Variable Types in Go
Description: Shows how to explicitly declare the type of variables in Go. This is useful when you need to specify the exact data type, particularly for user input or when a specific numeric type is required.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_5
Language: Go

```Go
var TwitterHandle string 
var DaysCompleted uint
```

## Snippet: Using Variables in a Simple Go Program
Description: Shows how to use a declared variable within a Go program. This example demonstrates importing the fmt package and using Println to display the variable value.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day11.md#2025-04-17_snippet_1
Language: Go

```Go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    fmt.Println("Welcome to", challenge, "")
}
```