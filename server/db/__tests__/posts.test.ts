const knex = require('knex')
const config = require('../knexfile')
const testConnection = knex(config.test)
import Post from '../../../models/post'

const db = require('../functions/posts')

beforeAll(() => {
  return testConnection.migrate.latest()
})

beforeEach(() => {
  return testConnection.seed.run()
})

afterAll(() => {
  return testConnection.destroy()
})

describe('get all posts', () => {
  test('it should return all of the posts in the database', async () => {
    const posts = await db.getAllPosts(testConnection)
    expect(posts).toHaveLength(4)
    posts.forEach((post: Post) => {
      expect(post).toHaveProperty('id')
      expect(post).toHaveProperty('user_id')
      expect(post).toHaveProperty('body')
      expect(post).toHaveProperty('image')
      expect(post).toHaveProperty('created_at')
    })
  })
})
