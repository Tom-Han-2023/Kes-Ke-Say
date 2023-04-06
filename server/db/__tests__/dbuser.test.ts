const knex = require('knex')
const config = require('../knexfile')
const testConnection = knex(config.test)
import { getUser } from '../functions/users'

beforeAll(() => {
  return testConnection.migrate.latest()
})

beforeEach(() => {
  return testConnection.seed.run()
})

describe('getUser', () => {
  it('should return a user', () => {
    const username = 'ida'
    return getUser(username, testConnection).then((user) => {
      expect(user.username).toBe('ida')
      expect(user.id).toBe(2)
      expect(user.fullName).toBe('Ida Dapizza')
      expect(user.location).toBe('Auckland')
    })
  })
})
