import express from 'express'
import { getAllPosts } from '../db/functions/posts'
import Post from '../../models/post'

const router = express.Router()

// GET /api/v1/posts
router.get('/', async (req, res) => {
  try {
    const posts: Post[] = await getAllPosts()
    return res.json({ posts: posts })
  } catch (error) {
    res.status(500)
  }
})

export default router
