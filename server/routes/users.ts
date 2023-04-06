import express from 'express'
import { getAllProfiles, User } from '../db/functions/users'

const router = express.Router()

// GET /api/v1/users
router.get('/', async (req, res) => {
  try {
    const users: User[] = await getAllProfiles()
    res.status(200).json({users: users})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export default router
