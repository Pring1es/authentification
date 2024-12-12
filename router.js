import express from "express";
//importer express

const router = express.Router();
//crée un nouvel objet routeur capable de gérer les requêtes de manière modulaire et organisée

//route définies pour les méthodes GET avec un chemin pour connetre l'etat (la santé) de l'app
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

router.get("/allUsers", allUsers);

//affichage des erreur avec status
export default router;
