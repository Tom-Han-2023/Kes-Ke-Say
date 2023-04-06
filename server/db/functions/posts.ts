import config from '../knexfile'
import knex from 'knex'
import Post, { NewPost } from '../../../models/post'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getAllPosts(db = connection): Promise<Post[]> {
  return db('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select('posts.*', 'users.username as users_username')
}

export function createPost(post: NewPost, db = connection): Promise<number[]> {
  return db('posts').insert({
    user_id: post.user_id,
    body: post.body,
    image: post.image,
    created_at: post.created_at,
  })
}
