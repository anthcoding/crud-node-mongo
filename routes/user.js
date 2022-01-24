const { Router } = require('express');
const {
	getUser,
	postUser,
	putUser,
	deleteUser,
	patchUser,
} = require('../controllers/user');

const router = Router();

router.get('/', getUser);

router.put('/:id', putUser);

router.post('/', postUser);

router.delete('/', deleteUser);

router.patch('/', patchUser);

module.exports = router;
