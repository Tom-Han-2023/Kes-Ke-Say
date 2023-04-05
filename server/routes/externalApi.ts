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

export default router
