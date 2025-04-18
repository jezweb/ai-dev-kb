# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day13.md
Language: go

## Snippet: Twitter Bot Implementation in Go
Description: Core implementation of Twitter bot functionality including credential management and tweet posting capabilities using the go-twitter library.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day13.md#2025-04-17_snippet_0
Language: go

```go
package main

import (
    "fmt"
    "log"
    "os"

    "github.com/dghubble/go-twitter/twitter"
    "github.com/dghubble/oauth1"
)

type Credentials struct {
    ConsumerKey       string
    ConsumerSecret    string
    AccessToken       string
    AccessTokenSecret string
}

func getClient(creds *Credentials) (*twitter.Client, error) {
    config := oauth1.NewConfig(creds.ConsumerKey, creds.ConsumerSecret)
    token := oauth1.NewToken(creds.AccessToken, creds.AccessTokenSecret)

    httpClient := config.Client(oauth1.NoContext, token)
    client := twitter.NewClient(httpClient)

    verifyParams := &twitter.AccountVerifyParams{
        SkipStatus:   twitter.Bool(true),
        IncludeEmail: twitter.Bool(true),
    }

    user, _, err := client.Accounts.VerifyCredentials(verifyParams)
    if err != nil {
        return nil, err
    }

    log.Printf("User's ACCOUNT:\n%+v\n", user)
    return client, nil
}
```

## Snippet: Combined Progress Tracker and Twitter Integration
Description: Main application combining progress tracking functionality with Twitter integration for posting updates.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ko/Days/day13.md#2025-04-17_snippet_1
Language: go

```go
func main() {
    creds := Credentials{
        AccessToken:       os.Getenv("ACCESS_TOKEN"),
        AccessTokenSecret: os.Getenv("ACCESS_TOKEN_SECRET"),
        ConsumerKey:       os.Getenv("CONSUMER_KEY"),
        ConsumerSecret:    os.Getenv("CONSUMER_SECRET"),
    }
    {
        const DaysTotal int = 90
        var remainingDays uint = 90
        challenge := "#90DaysOfDevOps"

        fmt.Printf("Welcome to the %v challenge.\nThis challenge consists of %v days\n", challenge, DaysTotal)

        var TwitterName string
        var DaysCompleted uint

        fmt.Println("Enter Your Twitter Handle: ")
        fmt.Scanln(&TwitterName)

        fmt.Println("How many days have you completed?: ")
        fmt.Scanln(&DaysCompleted)

        remainingDays = remainingDays - DaysCompleted

        client, err := getClient(&creds)
        if err != nil {
            log.Println("Error getting Twitter Client")
            log.Println(err)
        }

        message := fmt.Sprintf("Hey I am %v I have been doing the %v for %v days and I have %v Days left", TwitterName, challenge, DaysCompleted, remainingDays)
        tweet, resp, err := client.Statuses.Update(message, nil)
        if err != nil {
            log.Println(err)
        }
        log.Printf("%+v\n", resp)
        log.Printf("%+v\n", tweet)
    }
}
```