const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

// get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({createdAt: -1})

  res.status(200).json(blogs)
}

// get a single blog
const getBlog = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog'})
  }

  const blog = await Blog.findById(id)

  if (!blog) {
    return res.status(404).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

// create a new blog
const createBlog = async (req, res) => {
  const {title, body, author} = req.body

  // add to the database
  try {
    const blog = await Blog.create({ title, body, author })
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params

  // try {} catch{}

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such blog'})
  }

    // try {} catch{}

  const blog = await Blog.findOneAndDelete({_id: id})

  if(!blog) {
    return res.status(400).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

// Update blog using PATCH 
const patchBlog = async (req, res) => {
  const { id } = req.params


  // try {} catch{}


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such blog'})
  }

  const blog = await Blog.findOneAndUpdate({_id: id}, {...req.body }, { 
      new: true, // To return the updated document
  })

  if (!blog) {
    return res.status(400).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

// Update blog using PUT 
const putBlog = async (req, res) => {
  const { id } = req.params

  // try {} catch{}

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such blog'})
  }

  const blog = await Blog.findOneAndUpdate({_id: id}, req.body , {
    new: true, // To return the updated document
    overwrite: true, // This will replace the entire document
  })

  if (!blog) {
    return res.status(400).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}


module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  putBlog,
  patchBlog
}