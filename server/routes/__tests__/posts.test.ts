import request from 'supertest'
import server from '../../server'

import * as testDb from '../../db/functions/posts'
import { NewPost } from '../../../models/post'

jest.mock('../../db/functions/posts')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('// GET /api/v1/posts', () => {
  test('Should return all the posts', async () => {
    jest.mocked(testDb.getAllPosts).mockResolvedValue([
      {
        id: 1,
        user_id: 1,
        body: 'I found this really interesting book, you should check it out',
        image: '',
        created_at: 1680564029673,
        users_username: 'brie',
      },
      {
        id: 2,
        user_id: 2,
        body: 'I found this really cool Italian place, they have the best food',
        image: '',
        created_at: 1680564029673,
        users_username: 'brie',
      },
    ])

    const response = await request(server).get('/api/v1/posts')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      posts: [
        {
          body: 'I found this really interesting book, you should check it out',
          created_at: 1680564029673,
          id: 1,
          image: '',
          user_id: 1,
          users_username: 'brie',
        },
        {
          body: 'I found this really cool Italian place, they have the best food',
          created_at: 1680564029673,
          id: 2,
          image: '',
          user_id: 2,
          users_username: 'brie',
        },
      ],
    })
  })
})

describe('/ POST /api/v1/posts', () => {
  test('Should create a Post', async () => {
    jest.mocked(testDb.createPost).mockResolvedValue([1])

    const requestBody: NewPost = {
      id: 1,
      user_id: 1,
      body: 'New Task',
      image: 'image.jpg',
      created_at: 123456789,
    }

    const response = await request(server)
      .post('/api/v1/posts')
      .send(requestBody)

    expect(response.status).toBe(200)
    expect(response.body.post).toEqual({
      body: 'New Task',
      created_at: 123456789,
      id: 1,
      image: 'image.jpg',
      user_id: 1,
    })
  })

  test('Should return an error when the user id is missing', async () => {
    const requestBody = [
      {
        id: 1,
        body: 'New Task',
        image: 'image.jpg',
        created_at: 123456789,
      },
    ]

    const response = await request(server)
      .post('/api/v1/posts')
      .send(requestBody)

    expect(response.status).toBe(400)
    expect(response.text).toBe('The user id was missing')
  })
})
