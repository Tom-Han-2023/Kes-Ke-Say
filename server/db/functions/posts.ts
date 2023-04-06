import config from '../knexfile'
import knex from 'knex'
import Post from '../../../models/post'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getAllPosts(db = connection): Promise<Post[]> {
  return db('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.*', 'users.username as users_username')
}
