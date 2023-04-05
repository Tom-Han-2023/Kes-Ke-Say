// import request from 'supertest'
// import server from '../../server'

// import * as db from '../../db/functions/users'

// jest.mock('../../db/functions/users')
// beforeEach(() => {
//   jest.resetAllMocks()
// })

describe('GET /api/v1/externalApi/weather', () => {
  it.todo("returns the weather data for a user's location by id")
})

// describe('GET /api/v1/externalApi/weather', () => {
//   it("returns the weather data for a user's location by id", async () => {
//     const name = 'Auckland'
//     jest.mocked(db.getUserLocation).mockResolvedValue([{ location: name }])

//     const response = await request(server).get('/api/v1/externalApi/weather')

//     expect(response.body.location.name).toBe('Auckland')
//   })
//   it('returns 500 when fail to get data from database', async () => {
//     jest.spyOn(console, 'error').mockImplementation(() => {})
//     jest
//       .mocked(db.getUserLocation)
//       .mockRejectedValue(new Error('it did not work :('))
//     const response = await request(server).get('/api/v1/externalApi/weather')
//     expect(response.status).toBe(500)
//     expect(response.body.error).not.toBe('it did not work :(')
//     expect(response.body.error).toBe(
//       'There was an error trying to get the users location :('
//     )
//   })
// })
