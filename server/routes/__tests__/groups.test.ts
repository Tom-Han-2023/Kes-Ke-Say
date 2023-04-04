import request from 'supertest'
import server from '../../server'

import * as db from '../../db/functions/groups'

jest.mock('../../db/functions/groups') // pretends to run the db function
// - gives us fake data that we define

beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET api/v1/groups', () => {
  it('should get all the groups', async () => {
    // ARRANGE the data + function
    // giving it fake resolved value ()
    jest.mocked(db.getAllGroups).mockResolvedValue([
      { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
      { id: 2, name: 'The fast and the curious', image: 'car-darkgray.png' },
      { id: 3, name: 'Taco bout it', image: 'taco-darkgray.png' },
    ])

    // Act - call the function (server request)
    const res = await request(server).get('/api/v1/groups')

    // Assert with expect statements
    expect(res.body.groups).toHaveLength(3)
  })
  it('returns 500 when the database fails', async () => {
    // arrange
    // jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.mocked(db.getAllGroups).mockRejectedValue(new Error())

    // act
    const response = await request(server).get('/api/v1/groups')

    expect(response.status).toBe(500)
    expect(response.body.message).toBe('Something went wrong')
  })
})
