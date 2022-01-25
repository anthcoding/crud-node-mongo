const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

require('dotenv').config();

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT;
		this.usersPath = '/api/users';

		//Connect to DB
		this.connectDB();

		//Middlewares
		this.middlewares();

		//Routes
		this.routes();
	}

	async connectDB() {
		await dbConnection();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Parsing and reading
		this.app.use(express.json());

		//Public Directory
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/user'));
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running on port: ${this.PORT}`);
		});
	}
}

module.exports = Server;
