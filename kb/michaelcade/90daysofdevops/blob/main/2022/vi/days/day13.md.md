# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day13.md
Language: go

## Snippet: Implementing Twitter API Authentication and Tweet Posting in Go
Description: Complete code example showing how to authenticate with Twitter API using OAuth credentials and post tweets using the go-twitter library. The code handles Twitter API authentication setup, credential management through environment variables, and tweet posting functionality.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/vi/Days/day13.md#2025-04-17_snippet_0
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

func main() {
    fmt.Println("Go-Twitter Bot v0.01")
    creds := Credentials{
        AccessToken:       os.Getenv("ACCESS_TOKEN"),
        AccessTokenSecret: os.Getenv("ACCESS_TOKEN_SECRET"),
        ConsumerKey:       os.Getenv("CONSUMER_KEY"),
        ConsumerSecret:    os.Getenv("CONSUMER_SECRET"),
    }

    client, err := getClient(&creds)
    if err != nil {
        log.Println("Error getting Twitter Client")
        log.Println(err)
    }

    tweet, resp, err := client.Statuses.Update("A Test Tweet from the future, testing a #90DaysOfDevOps Program that tweets, tweet tweet", nil)
    if err != nil {
        log.Println(err)
    }
    log.Printf("%+v\n", resp)
    log.Printf("%+v\n", tweet)
}
```