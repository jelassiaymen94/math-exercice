const express = require("express");

function createExpressApp() {
	const app = express();

	app.get("*", (req, res) => {
		// Get the mathematical expression from the request path
		const expression = req.path.substring(1);

		// Check if the expression is valid by using a regular expression
		const regex = /^[0-9+*-/]+$/;
		if (!regex.test(expression)) {
			res.status(500).json({ error: "VALIDATION_ERROR" });
			return;
		}

		// Evaluate the expression and send the result in the response
		try {
			const result = eval(expression);
			res.json({ result });
		} catch (error) {
			// In case of error, send a 500 response with the error message
			res.status(500).json({ error: error.message });
		}
	});

	return app;
}

module.exports = createExpressApp;
