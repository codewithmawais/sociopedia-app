require("dotenv").config();
import mysql from "mysql"

const urlDB = process.env.urlDB;

export const db = mysql.createConnection(urlDB);