# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day16.md
Language: go

## Snippet: Implementing a Simple Function for Fuzzing Demonstration in Go
Description: This Go function demonstrates a simple case where fuzzing can be effective. It panics when the input string is exactly 'fuzz', making it a good candidate for fuzz testing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day16.md#2025-04-17_snippet_0
Language: go

```go
func DontPanic(s string) {
    if len(s) == 4 {
        if s[0] == 'f' {
            if s[1] == 'u' {
                if s[2] == 'z' {
                    if s[3] == 'z' {
                        panic("error: wrong input")
                    }
                }
            }
        }
    }
}
```

## Snippet: Implementing a Function Less Suitable for Fuzzing in Go
Description: This Go function demonstrates a case where fuzzing might be less effective. It panics only when the input is exactly 'fuzz', without providing intermediate clues for the fuzzing library.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day16.md#2025-04-17_snippet_1
Language: go

```go
func DontPanic(s input) {
    if s == "fuzz" {
        panic("error")
    }
}
```