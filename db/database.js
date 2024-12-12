import database from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const database = mysql.createpool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	name: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

database
	.getconnection()
	.then(() => {
		console.log("Yeah! Vous êtes dans la base de données");
	})
	.catch((err) => {
		console.log(
			`On n'as malheureusement pas atteint la base de données car : ${err}`,
		);
	});

export default database;
