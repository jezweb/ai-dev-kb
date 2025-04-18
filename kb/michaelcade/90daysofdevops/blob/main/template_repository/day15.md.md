# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day15.md
Language: Go

## Snippet: Declaring Variables in Go Using var Keyword
Description: Demonstrates how to declare variables in Go using the 'var' keyword with explicit type declaration. Shows declaration for an integer, string, and boolean variable types.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day15.md#2025-04-17_snippet_0
Language: Go

```Go
var i int
var s string
var b bool
```

## Snippet: Using Short Variable Declaration in Go with Type Inference
Description: Demonstrates the short declaration syntax in Go using the := operator, which allows the compiler to infer variable types from the assigned values.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day15.md#2025-04-17_snippet_2
Language: Go

```Go
i := 10
s := "Canada"
b := true
```

## Snippet: Grouping Variable Declarations in Go with var Block
Description: Demonstrates how to group multiple variable declarations within a single var block in Go, making the code more organized. Shows declarations with and without initializations.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day15.md#2025-04-17_snippet_4
Language: Go

```Go
var (
  i int
  s string
  b bool
  k float64 = 0.9
)
```

## Snippet: Initializing Variables During Declaration in Go
Description: Shows how to declare and initialize variables in one line in Go, with explicit type specification. The variables are initialized with specific values for each type.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day15.md#2025-04-17_snippet_1
Language: Go

```Go
var i int = 10
var s string = "Canada"
var b bool = true
```

## Snippet: Reassigning Go Variables with Regular Assignment Operator
Description: Shows how to reassign values to already declared variables in Go using the standard assignment operator (=). Variables must be declared before they can be reassigned.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day15.md#2025-04-17_snippet_3
Language: Go

```Go
var i int
i = 10
```