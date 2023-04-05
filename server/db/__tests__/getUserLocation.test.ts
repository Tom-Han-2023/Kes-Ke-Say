import { getUserLocation } from '../functions/users'

const knex = require('knex')
const config = require('../knexfile')
const testConnection = knex(config.test)

beforeAll(() => {
  return testConnection.migrate.latest()
})

beforeEach(() => {
  return testConnection.seed.run()
})

describe('getUserLocation', () => {
  it('should get the location of a user by id', async () => {
    const userId = 'auth0|123'
    const expected = 'Auckland'

    const [response] = await getUserLocation(userId, testConnection)

    expect(response.location).toBe(expected)
  })
})
