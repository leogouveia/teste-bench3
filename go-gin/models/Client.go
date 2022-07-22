package models

type Tabler interface {
	TableName() string
}

type Client struct {
	ID           string `gorm:"column:id;primaryKey;not null" json:"id"`
	UserName     string `gorm:"column:username;not null" json:"username"`
	Name         string `gorm:"column:name;not null" json:"name"`
	Email        string `gorm:"column:email;not null" json:"email"`
	Avatar       string `gorm:"column:avatar;not null" json:"avatar"`
	Password     string `gorm:"column:password;not null" json:"password"`
	Birthdate    string `gorm:"column:birthdate;not null" json:"birthdate"`
	RegisteredAt string `gorm:"column:registered_at;not null" json:"registered_at"`
}

func (Client) TableName() string {
	return "tb_clientes"
}
