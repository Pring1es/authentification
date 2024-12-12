import { allUsersModel } from "../models/userModel";

//exporter les données users pour voir si elle est fonctionnel
export const allUsers = async (req, res) => {
	try {
		const users = await getAllUsersModel();
		res.status(200).json({
			status: 200,
			message: "la liste des utilisateurs",
			users,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "nous rencontrons un probleme",
		});
	}
};
