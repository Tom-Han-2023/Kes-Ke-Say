import express from 'express'
import { getUserLocation } from '../db/functions/users'
import { getTopHeadlines } from '../externalApi/newsApi'
import { getWeatherData } from '../externalApi/weatherApi'

const router = express.Router()

// GET /api/v1/externalapi
router.get('/weather', async (req, res) => {
  try {
    const userId = 'auth0|123'
    const [{ location }] = await getUserLocation(userId)

    const response = await getWeatherData(location)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the weather :(',
    })
  }
})

router.get('/news', async (req, res) => {
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
