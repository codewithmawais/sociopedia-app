import 'dotenv/config'
import mysql2 from "mysql2"

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`

export const db = mysql2.createConnection(urlDB);