const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const PORT = 4000;
const app = express();

//Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

//Parses text as json
app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`Server is listening at port: ${PORT}`);
});

const users = [];

app.get('/users', (req, res) => {
	res.json(users);
});

app.post('/users', async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		console.log(hashedPassword);
		const user = { name: req.body.name, password: hashedPassword };
		users.push(user);
		res.status(201).send();
	} catch (error) {
		res.status(500).send();
		console.log(error.message);
	}
});

app.post('/users/login', async (req, res) => {
	const user = users.find((user) => user.name === req.body.name);
	if (user == null) {
		return res.status(400).send('Cannot find users');
	}
	try {
		if (await bcrypt.compare(req.body.password, user.password)) {
			res.send('Success');
		} else res.send('Not Allowed');
	} catch (error) {
		res.status(500).send();
	}
});
