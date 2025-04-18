# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md
Language: multiple

## Snippet: Creating a Custom httpfuzz Plugin in Go
Description: A Go implementation of the httpfuzz Listener interface that logs response codes from HTTP requests. This plugin provides feedback about the results of the fuzzing requests by capturing and displaying response status codes.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_4
Language: go

```go
package main

import (
    "bytes"
    "io/ioutil"
    "log"

    "github.com/joncooperworks/httpfuzz"
)

type logResponseCodePlugin struct {
    logger *log.Logger
}

func (b *logResponseCodePlugin) Listen(results <-chan *httpfuzz.Result) {
    for result := range results {
        b.logger.Printf("Got %d response from the server\n", result.Response.StatusCode)
    }
}

// New returns a logResponseCodePlugin plugin that simple logs the response code of the response.
func New(logger *log.Logger) (httpfuzz.Listener, error) {
    return &logResponseCodePlugin{logger: logger}, nil
}
```

## Snippet: Running httpfuzz with Configuration Options
Description: Command to run httpfuzz with various configuration options including wordlist, request template, target headers, parameters, delay, and proxy settings. This command generates and sends fuzzy HTTP requests to the target server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_3
Language: shell

```shell
./httpfuzz \
   --wordlist data.txt \
   --seed-request request.txt \
   --target-header User-Agent \
   --target-param fuzz \
   --delay-ms 50 \
   --skip-cert-verify \
   --proxy-url http://localhost:8080 \
```

## Snippet: Building httpfuzz from Source
Description: Command to build the httpfuzz binary from source code. This is necessary since the tool is not distributed as a pre-built binary.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_2
Language: shell

```shell
go build -o httpfuzz cmd/httpfuzz.go
```

## Snippet: Running httpfuzz with a Custom Plugin
Description: Command to run httpfuzz with the custom logging plugin attached. The --post-request flag specifies the plugin to use for processing responses from the fuzzing requests.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_6
Language: shell

```shell
./httpfuzz \
   --wordlist data.txt \
   --seed-request request.txt \
   --target-header User-Agent \
   --target-param fuzz \
   --delay-ms 50 \
   --skip-cert-verify \
   --proxy-url http://localhost:8080 \
   --post-request log
```

## Snippet: Creating HTTP Request Template for Fuzzing
Description: A template for HTTP POST requests with a placeholder for fuzzy data in the JSON body. The placeholder is marked with backtick symbols (`) and will be substituted with values from the wordlist.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_0
Language: text

```text
POST / HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.26.3
Accept: */*
Cache-Control: no-cache
Host: localhost:8000
Accept-Encoding: gzip, deflate
Connection: close
Content-Length: 35

{
    "name": "`S9`",
}
```

## Snippet: Building a Go Plugin for httpfuzz
Description: Command to build a Go plugin with the buildmode=plugin flag. This creates a shared object file that can be loaded by httpfuzz at runtime to extend its functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_5
Language: shell

```shell
go build -buildmode=plugin -o log exampleplugins/log/log.go
```

## Snippet: Creating a Wordlist for Fuzzing
Description: A sample wordlist containing data that will be substituted into the request template. Each line represents a different input value that will be used in the fuzzing process.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day17.md#2025-04-17_snippet_1
Language: text

```text
SOME_NAME
Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36
```