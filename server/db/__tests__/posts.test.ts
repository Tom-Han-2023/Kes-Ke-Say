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

describe('create a post', () => {
  test('it should add a post in the database', async () => {
    const post = {
      user_id: 1,
      body: 'Test Post',
      image: '/image.jpg',
      created_at: 1680564022529,
    }

    await db.createPost(post, testConnection)

    await db.getAllPosts(testConnection).then((post: Post[]) => {
      expect(post).toHaveLength(5)
      expect(post[4].user_id).toBe(1)
      expect(post[4].body).toBe('Test Post')
      expect(post[4].image).toBe('/image.jpg')
      expect(post[4].created_at).toBe(1680564022529)
    })
  })
})