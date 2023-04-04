import request from 'supertest'
import server from '../../server'

import * as testDb from '../../db/functions/posts'

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
      },
      {
        id: 2,
        user_id: 2,
        body: 'I found this really cool Italian place, they have the best food',
        image: '',
        created_at: 1680564029673,
      },
    ])

    const response = await request(server).get('/api/v1/posts')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      response: [
        {
          body: 'I found this really interesting book, you should check it out',
          created_at: 1680564029673,
          id: 1,
          image: '',
          user_id: 1,
        },
        {
          body: 'I found this really cool Italian place, they have the best food',
          created_at: 1680564029673,
          id: 2,
          image: '',
          user_id: 2,
        },
      ],
    })
  })
})
