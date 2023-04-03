import config from '../knexfile'
import knex from 'knex'
import { Post } from '../../../models/post'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getAllPosts(db = connection): Promise<Post[]> {
  return db('posts').select()
}
