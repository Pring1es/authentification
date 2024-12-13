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
	// lire un utilisateur à partir de son email (verifier)
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
			// un problème dans la requête ou la base de données 
			throw new Error("error!");
		}
	},
	//creer un utilisateur (inscription)
	createUser: async ({
		email, mdp, nom, prenom, numero_telephone, date_naissance,
	}) => {
		try{
				//recuperer les données de users et ajouter des nouvelles données
			const user = await database.query(
				"insert into users (email, mdp, nom, prenom, numero_telephone, date_naissance) values (?,?,?,?,?,?)",
				[email, mdp, nom, prenom, numero_telephone, date_naissance]
			);
			//La méthode AffectedRows() renvoie le nombre de lignes affectées par la dernière instruction SQL
			if (user.affectedRows) {
				return user;
			}
		} catch (error) {
			throw new Error(error.message);
		}
	},
};



export default allUsersModel, userModel;