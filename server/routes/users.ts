import express from 'express'
import { getUser } from '../db/functions/users'

const router = express.Router()

// GET /api/v1/users

router.get('/:username', async (req, res) => {
  try {
    const user = await getUser(req.params.username)
    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: 'There was an error trying to get the user',
    })
  }
})

export default router
