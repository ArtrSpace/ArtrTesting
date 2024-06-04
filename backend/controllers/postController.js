const Post = require('../models/postModel')
const mongoose = require('mongoose')

// get all posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({createdAt: -1}) // sort descending order

  res.status(200).json(posts)
}

// get a post
const getPost = async (req, res) => {
  // get :id from the get route 
  const { id } = req.params   

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const post = await Post.findById(id)

  // check if post exists
  if (!post) {
    return res.status(404).json({error: 'No such post'})
  }

  // return post
  res.status(200).json(post)
}

// create a new post
const createPost = async (req, res) => {
  const {title, desc} = req.body

  // add doc to db
  try {
    const post = await Post.create({title, desc})
    res.status(200).json(post)  // set response status to 200, and display newly created post
  } catch (error) {
    res.status(400).json({error: error.message})  // set response status to 400 (error), and display error message
  }
}

// delete a post
const deletePost = async (req, res) => {
  // get :id from the get route 
  const { id } = req.params   

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const post = await Post.findOneAndDelete({_id: id})   // look to see if mongo db's variable _id == id

  // check if post exists
  if (!post) {
    return res.status(404).json({error: 'No such post'})
  }

  // return post
  res.status(200).json(post)
}

// update a post   
const updatePost = async (req, res) => {
  // get :id from the get route 
  const { id } = req.params   

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const post = await Post.findOneAndUpdate({_id: id}, {
    ...req.body   // spread properties of object into new object
  })

    // check if post exists
    if (!post) {
      return res.status(404).json({error: 'No such post'})
    }
  
    // return post
    res.status(200).json(post)
}


module.exports = {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost
}