import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"homeland1998@admin.com",
  database:"sociopedia"
})