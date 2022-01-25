const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_ATLAS);

		console.log('DataBase online!');
	} catch (error) {
		console.log(error);
		throw new Error('Error in db');
	}
};

module.exports = {
	dbConnection,
};
