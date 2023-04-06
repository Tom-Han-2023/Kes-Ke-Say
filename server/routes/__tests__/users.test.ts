import request from 'supertest'
import server from '../../server'

import * as testDb from '../../db/functions/users'

jest.mock('../../db/functions/users')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('// GET /api/v1/users', () => {
  it('Should return all users', async () => {
    jest.mocked(testDb.getAllProfiles).mockResolvedValue([
      {
        id: 1,
        auth0Id: 'auth0|123',
        username: 'paige',
        fullName: 'Paige Turner',
        location: 'Auckland',
        image: 'ava-03.png',
      },
      {
        id: 2,
        auth0Id: 'auth0|234',
        username: 'ida',
        fullName: 'Ida Dapizza',
        location: 'Auckland',
        image: 'ava-02.png',
      },
    ])
    const response = await request(server).get('/api/v1/users')
    expect(response.status).toBe(200)
    expect(response.body.users[1]).toMatchInlineSnapshot(`
      {
        "auth0Id": "auth0|234",
        "fullName": "Ida Dapizza",
        "id": 2,
        "image": "ava-02.png",
        "location": "Auckland",
        "username": "ida",
      }
    `)
  })
  it('should return a 500 when the database fails', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.mocked(testDb.getAllProfiles).mockRejectedValue(new Error("No users for you"))
    const response = await request(server).get('/api/v1/users')
    expect(response.status).toBe(500)
    expect(response.body.error).toBe("Internal Server Error")
  })

})
