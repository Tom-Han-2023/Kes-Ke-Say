import { getAllProfiles } from '../functions/users'

const knex = require('knex')
const config = require('../knexfile')
const testConnection = knex(config.test)

beforeAll(() => {
  return testConnection.migrate.latest()
})

beforeEach(() => {
  return testConnection.seed.run()
})

describe('getAllProfiles', () => {
  it('should return all profiles', async () => {
    const response = await getAllProfiles(testConnection)
    expect(response).toHaveLength(4)
    expect(response[0]).toMatchInlineSnapshot(`
      {
        "auth0Id": "auth0|123",
        "fullName": "Paige Turner",
        "id": 1,
        "image": "ava-03.png",
        "location": "Auckland",
        "username": "paige",
      }
    `)
  })
})
