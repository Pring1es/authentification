import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const database = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

database
	.getConnection()
	.then(() => {
		console.log("Yeah! Vous êtes dans la base de données");
	})
	.catch((err) => {
		console.log(
			`On n'as malheureusement pas atteint la base de données car : ${err}`,
		);
	});

export default database;
