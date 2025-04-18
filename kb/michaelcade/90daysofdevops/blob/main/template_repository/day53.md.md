# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md
Language: multiple

## Snippet: Setting Up a Go API Project Structure
Description: Initializes a new Go project and creates the necessary file structure for a RESTful API implementation, including main.go and other supporting files.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md#2025-04-17_snippet_0
Language: Bash

```Bash
mkdir -p goAPI/pkg/handlers
cd goAPI
go mod init github.com/michaelcade/goapi
touch main.go
touch pkg/handlers/handlers.go
```

## Snippet: Testing API Endpoints with curl Commands
Description: A series of curl commands for testing the REST API endpoints, demonstrating how to get all items, create a new item, get a specific item, update an item, and delete an item.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md#2025-04-17_snippet_4
Language: Bash

```Bash
curl http://localhost:4000/items

curl -X POST -H "Content-Type: application/json" -d '{"name": "My First Task", "completed": false}' http://localhost:4000/items

curl -X POST -H "Content-Type: application/json" -d '{"name": "My Second Task", "completed": false}' http://localhost:4000/items

curl -X GET http://localhost:4000/items

curl -X POST -H "Content-Type: application/json" -d '{"name": "My First Updated Task", "completed": true}' http://localhost:4000/items/<id from get request>

curl -X GET http://localhost:4000/items/<id from get request>

curl -X DELETE http://localhost:4000/items/<id from get request>

curl -X GET http://localhost:4000/items
```

## Snippet: Implementing Main Function with Gorilla Mux Router in Go
Description: Creates the main function for a RESTful API application using Gorilla Mux to set up routes for item operations (get, create, update, delete) and starts an HTTP server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md#2025-04-17_snippet_3
Language: Go

```Go
package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/michaelcade/goapi/pkg/handlers"
)

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/items", handlers.GetItems).Methods(http.MethodGet)
	router.HandleFunc("/items/{id}", handlers.GetItem).Methods(http.MethodGet)
	router.HandleFunc("/items", handlers.CreateItem).Methods(http.MethodPost)
	router.HandleFunc("/items/{id}", handlers.UpdateItem).Methods(http.MethodPut)
	router.HandleFunc("/items/{id}", handlers.DeleteItem).Methods(http.MethodDelete)

	log.Println("API is running!")
	http.ListenAndServe(":4000", router)
}
```

## Snippet: Setting Up HTTP Handlers with Gorilla Mux in Go
Description: Implements HTTP request handlers for a RESTful API including getItems, getItem, createItem, updateItem, and deleteItem functions, using Gorilla Mux for routing.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md#2025-04-17_snippet_2
Language: Go

```Go
package handlers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gorilla/mux"
)

type Item struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	CreatedAt time.Time `json:"createdAt"`
}

type Items []Item

var items Items

func GetItems(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(items)
}

func GetItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	itemID := params["id"]

	for _, item := range items {
		if item.ID == itemID {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Item{})
}

func CreateItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var item Item
	_ = json.NewDecoder(r.Body).Decode(&item)
	item.ID = strconv.Itoa(rand.Intn(1000000))
	item.CreatedAt = time.Now()
	items = append(items, item)
	json.NewEncoder(w).Encode(item)
}

func UpdateItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	itemID := params["id"]

	for i, item := range items {
		if item.ID == itemID {
			items = append(items[:i], items[i+1:]...)
			var updatedItem Item
			_ = json.NewDecoder(r.Body).Decode(&updatedItem)
			updatedItem.ID = itemID
			updatedItem.CreatedAt = time.Now()
			items = append(items, updatedItem)
			json.NewEncoder(w).Encode(updatedItem)
			return
		}
	}
}

func DeleteItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	itemID := params["id"]

	for i, item := range items {
		if item.ID == itemID {
			items = append(items[:i], items[i+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(items)
}
```

## Snippet: Creating Structs for API Data Model in Go
Description: Defines structs for the Item data model including ID, Name, Completed status and creation date, plus a struct for the Items slice to store multiple items.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md#2025-04-17_snippet_1
Language: Go

```Go
type Item struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	CreatedAt time.Time `json:"createdAt"`
}

type Items []Item
```

## Snippet: Installing Gorilla Mux Dependency in Go
Description: Command to install the Gorilla Mux router package which is a popular HTTP router for building RESTful APIs in Go.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/template_repository/day53.md#2025-04-17_snippet_5
Language: Bash

```Bash
go get github.com/gorilla/mux
```