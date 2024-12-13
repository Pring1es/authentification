import { allUsersModel, userModel } from "../models/userModel.js";
import argon2 from "argon2";

//exporter les données users pour voir si elle est fonctionnel
export const userController = {
	allUsers: async (req, res) => {
		try {
			const users = await allUsersModel();
			res.status(200).json({
				status: 200,
				message: "la liste des utilisateurs",
				users,
			});
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: `nous rencontrons un probleme ${error}`,
			});
		}
	},

	createUser: async (req, res) => {
		try {
			//on récupère l'email dans le req.body
			const { email } = req.body;

			//on vérifie avec notre méthode créer dans le userModel qu'elle n'existe pas déjà dans la base de donnée en prenant l'email en paramètre.
			const userExist = await userModel.readByEmail(email);
			// si le user n'est pas false c'àd qu'il retourne un utilisateur le compte ne peut être créé

			if (userExist) {
				res.status(401).json({
					status: 401,
					message: "J'ai bien peur que vous y soyez déjà.",
				});
			} else {
				// sinon alors on met les données du req.body en paramètre de notre méthode creteUser créé dans notre userModel pour que la requête à la bdd d'insérer un nouvelle utilisateur se fasse.

				const newUser = await userModel.createUser(req.body);

				if (newUser) {
					res.status(200).json({
						status: 200,
						message: "Hey, hey, bienvenue chez nous!",
					});
				} else {
					res.status(401).json({
						status: 401,
						message: "ah non! On a un petit problème d'enregistrement.",
					});
				}
			}
		} catch (error) {
			res.status(500).json({
				status: 500,
				messsage: `On a ce problème : ${error} et on fait tout pour le résoudre.`,
			});
		}
	},

	//connexion
	logIn: async (req, res) => {
		//verification de l'email et le mot de passe
		try {
			const { email, password } = req.body;
			//verifier si l'utilisateur utilise bien le  mail qui correspond au mot de passe
			const user = await userModel.readByEmail(email);

			//si on récupère bien l'utilisateur alors
			if (user) {
				// alors on vérifie que le mot de passe correspond bien à celui hashé qui a été enregistrer dans la bdd grâce à la méthode d'argon2
				const isMatch = await argon2.verify(user.hashed_mdp, password);
				//si cela correspond bien, alors envoie le message bonjour à utilisateurs
				if (isMatch) {
					return res.status(200).json({
						status: 200,
						message: `Welcome ${user.username}`,
					});
					//sinon,  envoie le message d'erreur
				} else {
					return res.status(401).json({
						status: 401,
						message: "Euh... Pas sûr-e que ce soit cela.",
					});
				}
			}
			// si on ne trouve pas d'utilisateur avec cet email.
			else {
				return res.status(404).json({
					status: 404,
					message: "On a cherché, et on a pas trouvé.",
				});
			}
		} catch (error) {
			res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	},
};
