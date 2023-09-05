const express = require('express');
const router = express.Router();

// Import user controller
const UserController = require('../controllers/userController');

// Define routes
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.delete('/:id', UserController.deleteUserById);
router.put('/:id', UserController.updateUserById);

module.exports = router;