import express from 'express'
import { getAllPosts } from '../db/functions/posts'

const router = express.Router()

// GET /api/v1/posts
router.get('/', async (req, res) => {
  try {
    await getAllPosts().then((response) => {
      return res.json({ response })
    })
  } catch (error) {
    res.status(500)
  }
})

export default router
