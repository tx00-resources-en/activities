const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

// create a new blog
const createBlog = async (req, res) => {
  console.log('CREATE a blog');
  res.send('createBlog')
}

// get all blogz
const getBlogs = async (req, res) => {
  console.log('GET blogs');
  res.send('getBlogs')
}

// get a single blog
const getBlog = async (req, res) => {
  // Your code here
}

// delete a blog
const deleteBlog = async (req, res) => {
  // Your code here
}

// Update blog using PATCH 
const patchBlog = async (req, res) => {
  // Your code here
}

// Update blog using PUT 
const putBlog = async (req, res) => {
  // Your code here
}


module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  putBlog,
  patchBlog
}