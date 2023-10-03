const Goal = require('../models/goalModel');
const User = require('../models/userModel');
const mongoose = require('mongoose')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res) => {
  const user_id = req.user._id
  const goals = await Goal.find({user_id}).sort({createdAt: -1})
  res.status(200).json(goals)
}

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = async (req, res, next) => {
    const {text} = req.body
    let emptyFields = []

    if(!text) {
      emptyFields.push('text')
    }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const user_id = req.user._id
      const goal = await Goal.create({text, user_id})
      res.status(200).json(goal)
    } catch (error) {
      res.status(400).json({error: error.message})
    }

};

// @desc    Get single goal
// @route   GET /api/goals/:id
// @access  Private
const getGoal = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such goal'})
  }

  const goal = await Goal.findById(id)

  if (!goal) {
    return res.status(404).json({error: 'No such goal'})
  }

  res.status(200).json(goal)
}

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such goal'})
  }

  const goal = await Goal.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!goal) {
    return res.status(400).json({error: 'No such goal'})
  }

  res.status(200).json(goal)
}


// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such goal'})
  }

  const goal = await Goal.findOneAndDelete({_id: id})

  if (!goal) {
    return res.status(400).json({error: 'No such goal'})
  }
  // console.log(goal);
  res.status(200).json(goal)
}

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoalWithErrorChecking = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such goal'})
  }

  // Check for user
  const user_id = req.user._id
  if (!user_id) {
    res.status(401).json({error: 'User not found'})
  }

  // Make sure the logged-in user matches the goal user
  const goal = await Goal.findById({_id: id});
  if (goal.user_id !== user_id.toString()) {
    res.status(401).json({error: 'User not authorized'})
  }

  await goal.remove();
  res.status(200).json(goal)
}

module.exports = {
  getGoals,
  setGoal,
  getGoal,
  updateGoal,
  deleteGoal,
  // deleteGoal:deleteGoalWithErrorChecking,
};
