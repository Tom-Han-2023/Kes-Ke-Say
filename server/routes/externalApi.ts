import express from 'express'
import { getUserLocation } from '../db/functions/users'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/externalapi
router.get('/weather', async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY
    const userId = 'auth0|123'
    const [{ location }] = await getUserLocation(userId)

    const response = await request.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    )
    res.json(response.body)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the users location :(',
    })
  }
})

router.get('/news', async (req, res) => {
  try {
    const NEWS_API_KEY = process.env.NEWS_API_KEY
    const response = await request.get(
      `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${NEWS_API_KEY}`
    )
    res.json(response.body.articles)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get news:(',
    })
  }
})

export default router
