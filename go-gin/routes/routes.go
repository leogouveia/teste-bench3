package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/leogouveia/go-gingonic-bench3/controllers"
)

func HandleRequests() {
	r := gin.Default()
	r.GET("/", controllers.GetClients)
	r.GET("/alunos", controllers.ExibeTodosAlunos)

	r.Run("0.0.0.0:8080") // listen and serve on 0.0.0.0:8080
}
