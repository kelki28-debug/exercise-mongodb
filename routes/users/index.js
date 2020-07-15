const express = require('express');
const router = express.Router();

const { registerUser, getUser, deleteUser, updateUser, filterUser } = require('./controller');

router.post('/upload',registerUser);
router.get('/all', getUser);
router.delete('/delete/:name', deleteUser);
router.put('/update/:id', updateUser);
router.get('/filter/:id', filterUser)

module.exports = router