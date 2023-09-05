// Sample user data array
const users = [];

// Controller methods
const createUser = (req, res) => {
  const { name, bio } = req.body;

  // Check if name and bio properties are present in the request body
  if (!name || !bio) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Create a new user object
  const newUser = {
    id: Date.now().toString(), // Generate a unique ID (in a real app, use a library like uuid)
    name,
    bio,
  };

  // Add the new user to the users array
  users.push(newUser);

  // Respond with the newly created user and HTTP status 201 (Created)
  res.status(201).json(newUser);
};

const getAllUsers = (req, res) => {
  // Respond with the array of users
  res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;

  // Find the user with the specified ID
  const user = users.find(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (!user) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Respond with the user object
  res.json(user);
};

const deleteUserById = (req, res) => {
  const { id } = req.params;

  // Find the index of the user with the specified ID
  const index = users.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Remove the user from the array and store the deleted user
  const deletedUser = users.splice(index, 1)[0];

  // Respond with the deleted user
  res.json(deletedUser);
};

const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;

  // Find the index of the user with the specified ID
  const index = users.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Check if name and bio properties are present in the request body
  if (!name || !bio) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Update the user's name and bio
  users[index].name = name;
  users[index].bio = bio;

  // Respond with the updated user
  res.json(users[index]);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};