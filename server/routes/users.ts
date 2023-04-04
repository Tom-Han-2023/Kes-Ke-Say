import express from 'express'
import { getUser } from '../db/functions/users'

const router = express.Router()

// GET /api/v1/users
router.get('/', (req, res) => {
  res.status(200).send('Hello from the users route!')
})

router.get('/:username', async (req, res) => {
  try {
    const user = await getUser(req.params.username)
    res.status(200).json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: 'there was an error trying to get the user',
    })
  }
})

export default router
