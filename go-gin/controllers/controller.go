package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/leogouveia/go-gingonic-bench3/database"
	"github.com/leogouveia/go-gingonic-bench3/models"
)

func GetClients(c *gin.Context) {
	var clients []models.Client
	database.DB.Limit(10).Find(&clients)

	c.JSON(200, clients)
}

func ExibeTodosAlunos(c *gin.Context) {
	c.JSON(200, gin.H{
		"id":   "1",
		"nome": "Leo Gouveia",
	})
}
