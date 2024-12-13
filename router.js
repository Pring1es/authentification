import express from "express";
import { userController } from "./controller/userController.js";

const router = express.Router();
//crée un nouvel objet routeur capable de gérer les requêtes de manière modulaire et organisée

//route définies pour les méthodes GET avec un chemin pour connaitre l'etat (la santé) de l'app
router.get("/heath", (req, res) => {
	try {
		res.status(200).json({
			status: 200,
			message: "Hello !",
		});
		// try > pas de probleme
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message,
		});
		// catch > un probleme est survenue
	}
});

// obtenir tout les utilisateurs de la base de données
router.get("/users", userController.allUsers);

// permettre à un utilisateur de créer son compte qui va s'enregistrer dans la base de données
router.post("/signin", userController.createUser);

//affichage des erreur avec status
export default router;
