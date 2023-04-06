import request from 'supertest'
import server from '../../server'

import * as db from '../../db/functions/users'

jest.mock('../../db/functions/users')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET /api/v1/profiles/:username', () => {
  it('returns a user', async () => {
    jest.mocked(db.getUser).mockResolvedValue({
      id: 2,
      username: 'ida',
      auth0Id: 'auth0|234',
      fullName: 'Ida_Dapizza',
      location: 'Auckland',
      image: 'ava-02.png',
    })

    const response = await request(server).get('/api/v1/users/ida')
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toMatchInlineSnapshot(`
      {
        "auth0Id": "auth0|234",
        "fullName": "Ida_Dapizza",
        "id": 2,
        "image": "ava-02.png",
        "location": "Auckland",
        "username": "ida",
      }
    `)
  })
})
it('returns 500 when the database fails', async () => {
  
  jest.mocked(db.getUser).mockRejectedValue(new Error('it did not work'))
  jest.spyOn(console, 'error').mockImplementation(() => {})

  const response = await request(server).get('/api/v1/users/ida')

  expect(response.status).toBe(500)
  expect(response.body.error).not.toBe('it did not work')
  expect(response.body.error).toBe(
    'There was an error trying to get the user'
  )
})
