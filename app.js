require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

//Static Content
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hey There Anthony!!');
});

app.get('/generic', (req, res) => {
	res.sendFile(__dirname + '/public/template/generic.html');
});

app.get('/elements', (req, res) => {
	res.sendFile(__dirname + '/public/template/elements.html');
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(4000, () => {
	console.log(`Listening to port: ${PORT}`);
});
