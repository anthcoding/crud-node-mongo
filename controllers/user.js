const { response } = require('express');

const getUser = (req, res) => {
	const { message } = req.query;

	res.json({
		msg: 'get API',
		message,
	});
};

const deleteUser = (req, res) => {
	res.json({
		msg: 'get API',
	});
};

const putUser = (req, res) => {
	const id = req.params.id;

	res.json({
		msg: 'get API',
		id,
	});
};

const postUser = (req, res) => {
	const body = req.body;

	res.json({
		msg: 'get API',
		body,
	});
};

const patchUser = (req, res) => {
	res.json({
		msg: 'get API',
	});
};

module.exports = {
	getUser,
	deleteUser,
	putUser,
	postUser,
	patchUser,
};
