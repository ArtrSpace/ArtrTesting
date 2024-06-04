const express = require('express')
// import controller functions 
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost
} = require('../controllers/postController')


// creates instance of router
const router = express.Router()


// GET all posts
router.get('/', getPosts)


// GET a post
router.get('/:id', getPost)


// POST a new post
router.post('/', createPost)


// DELETE a post
router.delete('/:id', deletePost)


// UPDATE a post
router.patch('/:id', updatePost)


// export routes
module.exports = router