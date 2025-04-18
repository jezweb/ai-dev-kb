# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md
Language: Go

## Snippet: Using Constants and Variables in Go
Description: This example shows how to use both constants and variables in a Go program. It defines the challenge name as a variable and the total number of days as a constant.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md#2025-04-17_snippet_1
Language: Go

```Go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    const daystotal = 90

    fmt.Println("Welcome to", challenge)
    fmt.Println("This is a", daystotal, "challenge")
}
```

## Snippet: Simplified Variable Declaration in Go
Description: This example shows a simplified way to declare variables in Go using the := operator. It also demonstrates how to use Printf for formatted output.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md#2025-04-17_snippet_3
Language: Go

```Go
func main() {
    challenge := "#90DaysOfDevOps"
    const daystotal = 90
```

## Snippet: Printing Variable Types in Go
Description: This example shows how to print the types of variables using the %T format specifier in Printf.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md#2025-04-17_snippet_5
Language: Go

```Go
fmt.Printf("challenge is %T, daystotal is %T, dayscomplete is %T\n", conference, daystotal, dayscomplete)
```

## Snippet: Tracking Progress with Variables in Go
Description: This snippet expands on the previous examples by adding a variable to track the number of completed days in the challenge. It demonstrates using multiple variables and constants together.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md#2025-04-17_snippet_2
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

## Snippet: Declaring Variables with Specific Types in Go
Description: This snippet demonstrates how to declare variables with specific types in Go. It shows declarations for a string and an unsigned integer.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md#2025-04-17_snippet_4
Language: Go

```Go
var TwitterHandle string 
var DaysCompleted uint
```

## Snippet: Declaring and Using Variables in Go
Description: This snippet demonstrates how to declare and use a variable in a Go program. It creates a variable for the challenge name and prints a welcome message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_tw/Days/day11.md#2025-04-17_snippet_0
Language: Go

```Go
package main

import "fmt"

func main() {
    var challenge = "#90DaysOfDevOps"
    fmt.Println("Welcome to", challenge "")
}
```