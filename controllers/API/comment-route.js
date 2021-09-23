const router = require("express").Router();
const { Comment } = require("../../models");


router.post("/", async (req, res) => {
	let responseBasket;

	try {
		const newComment = await Comment.create(req.body);
		if (!newComment) {
			responseBasket = {
				status: res.status,
				error: true,
				message: "Unable to comment",
			};
			return res.status(200).json(responseBasket);
		}

		responseBasket = {
			error: false,
			message: "Comment successful",
		};
		return res.status(201).json(responseBasket);
	} catch (error) {
		responseBasket = {
			error: true,
			message:
				"Try posting this comment agian.",
		};

		return res.status(408).json(responseBasket);
	}
});

module.exports = router;