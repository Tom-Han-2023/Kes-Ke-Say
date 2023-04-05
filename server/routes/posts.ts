import express from 'express'
import { createPost, getAllPosts } from '../db/functions/posts'
import Post from '../../models/post'

const router = express.Router()

// GET /api/v1/posts
router.get('/', async (req, res) => {
  try {
    const posts: Post[] = await getAllPosts()
    return res.json({ posts: posts })
  } catch (error) {
    res.status(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const { user_id, body, image, created_at } = req.body
    if (!user_id) {
      res.status(400).send('The user id was missing')
    }
    if (!created_at) {
      res.status(400).send('The created date is missing')
    }
    if (!body) {
      res.status(400).send('the post body is missing')
    }

    const newPost: NewPost = {
      user_id: user_id,
      body: body,
      image: image,
      created_at: created_at,
    }

    const [id] = await createPost(newPost)

    res.json({
      post: {
        id: id,
        user_id: user_id,
        body: body,
        image: image,
        created_at: created_at,
      },
    })
  } catch (error) {
    res.status(500)
  }
})


export default router
