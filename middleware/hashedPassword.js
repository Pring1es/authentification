import argon2 from "argon2";

export const hashed_mdp = async (req, res, next) => {
	try {
		const { mdp } = req.body;
		const hashed_mdp = await argon2.hash(mdp, {
			type: argon2.argon2d,
			memoryCost: 2 ** 16,
			hashLength: 50,
		});

		delete req.body(mdp);
		req.body.hashed_mdp = hashed_mdp;
		next();
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message,
		});
	}
};