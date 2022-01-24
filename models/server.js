const express = require('express');
require('dotenv').config();

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT;

		//Middlewares
		this.middlewares();

		//Routes
		this.routes();
	}

	middlewares() {
		//Public Directory
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.get('/', (req, res) => {
			res.send('Hey there!');
		});
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running on port: ${this.PORT}`);
		});
	}
}

module.exports = Server;
