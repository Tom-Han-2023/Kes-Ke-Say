import request from 'supertest'
import server from "../../server"


import * as db from "../../db/functions/users"

jest.mock('../db/db')

beforeEach(() => {
  jest.resetAllMocks()
})

describe ('GET /api/v1/profiles/:username', () => {

  it('returns a user', async () => {jest.mocked(db.getUser).mockResolvedValue(
    {id: 2, username: 'ida', auth0Id:'auth0|234', fullName: 'Ida_Dapizza', location: 'Auckland', image:'ava-02.png'})

  


const response = await request(server).get("/api/v1/profiles/ida")

expect(response.body.username).toHaveLength(1)
expect(response.body.username).toMatchInlineSnapshot (`{
  id: 2, username: 'ida', auth0Id:'auth0|234', fullName: 'Ida_Dapizza', location: 'Auckland', image:'ava-02.png'
}`)

})

})

