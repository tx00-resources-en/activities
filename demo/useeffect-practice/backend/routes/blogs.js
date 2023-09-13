const express = require('express')
const {
  getBlogs, 
  getBlog, 
  createBlog, 
  deleteBlog, 
  putBlog,
  patchBlog
} = require('../controllers/blogController')

const router = express.Router()

// GET all blogs
router.get('/', getBlogs)

// GET a single blog
router.get('/:id', getBlog)

// POST a new blog
router.post('/', createBlog)

// DELETE a blog
router.delete('/:id', deleteBlog)

// Update blog using PATCH 
router.patch('/:id', patchBlog)

// Update blog using PUT 
router.put('/:id', putBlog)

module.exports = router