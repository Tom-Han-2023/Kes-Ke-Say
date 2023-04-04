import express from 'express'
import { getAllGroups } from '../db/functions/groups'

const router = express.Router()

// GET /api/v1/groups
router.get('/', (req, res) => {
  getAllGroups()
    .then((groups) => {
      res.json({ groups })
      // { groups: [{}, {}]}
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

export default router
