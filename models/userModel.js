import database from "../db/database.js";

export const allUsersModel = async () => {
	try {
		// requête à la base de donnée.
		const users = await database.query("select * from users");
		// récupération de la liste des users de notre base de données
		return users;
	} catch (error) {
		// si on est pas rentré dans le try pourquoi
		console.log(`il y a une erreur par ici : ${error}`);
	}
};
