package main

import (
	"github.com/leogouveia/go-gingonic-bench3/database"
	"github.com/leogouveia/go-gingonic-bench3/routes"
)

func main() {
	database.ConnectDatabase()
	routes.HandleRequests()
}
