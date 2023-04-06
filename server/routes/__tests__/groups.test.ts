import request from 'supertest'
import server from '../../server'

import * as db from '../../db/functions/groups'

jest.mock('../../db/functions/groups')

beforeEach(() => {
  jest.resetAllMocks()
})

describe('GET api/v1/groups', () => {
  it('should get all the groups', async () => {
    jest.mocked(db.getAllGroups).mockResolvedValue([
      { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
      { id: 2, name: 'The fast and the curious', image: 'car-darkgray.png' },
      { id: 3, name: 'Taco bout it', image: 'taco-darkgray.png' },
    ])

    const res = await request(server).get('/api/v1/groups')

    expect(res.body.groups).toHaveLength(3)
    expect(res.body.groups).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "image": "fries-darkgray.png",
          "name": "friendChips",
        },
        {
          "id": 2,
          "image": "car-darkgray.png",
          "name": "The fast and the curious",
        },
        {
          "id": 3,
          "image": "taco-darkgray.png",
          "name": "Taco bout it",
        },
      ]
    `)
  })
  it('returns 500 when the database fails', async () => {
    jest.mocked(db.getAllGroups).mockRejectedValue(new Error())

    const response = await request(server).get('/api/v1/groups')

    expect(response.status).toBe(500)
    expect(response.body.message).toBe('Something went wrong')
  })
})
