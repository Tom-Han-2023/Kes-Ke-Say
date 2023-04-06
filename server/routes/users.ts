import express from 'express'
import { getAllProfiles, User, getUser } from '../db/functions/users'


const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users: User[] = await getAllProfiles()
    res.status(200).json({users: users})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

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
