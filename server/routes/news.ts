import express from 'express'
const router = express.Router()
import { getTopHeadlines } from '../externalApi/newsApi'

// GET /api/v1/newsapi
router.get('/', async (req, res) => {
  try {
    const response = await getTopHeadlines()
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get news:(',
    })
  }
})

export default router
