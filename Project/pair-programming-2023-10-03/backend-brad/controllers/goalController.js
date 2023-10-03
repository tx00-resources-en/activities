const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
  } catch (error) {
    next(error);
  }
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = async (req, res, next) => {
  try {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add a text field');
    }

    const goal = await Goal.create({
      text: req.body.text,
      user: req.user.id,
    });

    res.status(200).json(goal);
  } catch (error) {
    next(error);
  }
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error('Goal not found');
    }

    // Check for user
    if (!req.user) {
      res.status(401);
      throw new Error('User not found');
    }

    // Make sure the logged-in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedGoal);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error('Goal not found');
    }

    // Check for user
    if (!req.user) {
      res.status(401);
      throw Error('User not found');
    }

    // Make sure the logged-in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }

    await goal.remove();

    // To work with net nija's front end either modify the handler in the frontend or modify the response from the backend as below:
    // res.status(200).json(goal);
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
