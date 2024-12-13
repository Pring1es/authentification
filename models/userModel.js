import database from "../db/database.js";

const allUsersModel = async () => {
	try {
		// requête à la base de donnée.
		const [users] = await database.query("select * from users");
		// récupération de la liste des users de notre base de données
		return users;
	} catch (error) {
		// si on est pas rentré dans le try pourquoi
		console.log(`il y a une erreur par ici : ${error}`);
	}
};

const userModel = {
	// lire un utilisateur à partir de son email
	readByEmail : async (email) => {
		try {
			// Exécute une requête SQL pour sélectionner l'utilisateur avec l'email donné
			const [user] = await database.query(
				`select * from users where email =?`, // Requête SQL pour rechercher l'email
				[email] //importe email
			);

			// Vérifie si un utilisateur a été trouvé
			if (user.length > 0) { 
				return user; // Retourne l'utilisateur si trouvé
			} else {
				return false; // Retourne false si aucun utilisateur n'est trouvé
			}
		} catch (error) {
			// un problème dans la requête ou la base de données ggg
			throw new Error("error!");
		}
	},
};



export default allUsersModel, userModel;