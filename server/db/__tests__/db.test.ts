import knex from 'knex'
import config from '../knexfile'
const testConnection = knex(config.test)

import { getAllGroups } from '../functions/groups'

beforeAll(() => {
  return testConnection.migrate.latest()
})

beforeEach(() => {
  return testConnection.seed.run()
})

describe('getAllGroups', () => {
  it('should return all the groups', async () => {
    const groups = await getAllGroups(testConnection)
    expect(groups).toHaveLength(3)
  })
})
