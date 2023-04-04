import request from 'supertest'
import server from '../../server'

import * as db from '../../db/functions/users'

jest.mock('../db/functions/users')
beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET /api/v1/externalApi', () => {
  it("returns the weather data for a user's location by id", async () => {
    jest
      .mocked(db.getUserLocation)
      .mockResolvedValue([{ location: 'Auckland' }])

    const response = await request(server).get('/api/v1/externalApi')

    expect(response.body.location.name).toBe('Auckland')
  })
})
