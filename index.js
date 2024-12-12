import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
//importer les fichiers dotenv et router

dotenv.config();
//pour gérer les variables d'environnement

const app = express();
//Appeler express dans l'application

const port = process.env.APP_PORT;
//Appeler le PORT dans l'application

app.use(express.json());
//utiliser express.json() comme middleware pour analyser les requêtes entrantes
app.use("/api", router);
//utiliser l'api dans router

//lecture du PORT, test console.log
app.listen(port, () => {
	console.log(`server is listenning on port http://localhost:${port}/api`);
});
