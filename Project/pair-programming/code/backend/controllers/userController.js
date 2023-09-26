const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res, next) => {
 
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res, next) => {

};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res, next) => {
 
};


module.exports = {
  registerUser,
  loginUser,
  getMe,
};
