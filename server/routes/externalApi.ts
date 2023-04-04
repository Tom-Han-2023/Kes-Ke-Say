import express from 'express'
import { getUserLocation } from '../db/functions/users'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/externalapi
router.get('/', async (req, res) => {
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
    res.sendStatus(500)
  }
})

export default router

//http://api.weatherapi.com/v1/current.json?key=067a3bb5825e446cbb0230739230304&q=wellington
//http://api.weatherapi.com/v1/current.json?key=APIKEY&q=location
//{q: location}
