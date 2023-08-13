import mysql from "mysql"

export const db = mysql.createConnection({
  host:"ENTER YOUR HOST NAME HERE",
  user:"ENTER YOUR USER NAME HERE!",
  password:"ENTER YOUR PASSWORD HERE!",
  database:"ENTER YOUR DATABASE NAME HERE!"
})
