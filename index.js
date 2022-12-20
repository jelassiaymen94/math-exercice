const createExpressApp = require("./createExpressApp");

const port = 3000;
const app = createExpressApp();

app.listen(port, () => {
	console.log(`Express app listening on port ${port}`);
});
