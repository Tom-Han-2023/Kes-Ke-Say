import request from 'superagent'
import Post from '../../models/post'

const rootURL = '/api/v1/posts'

export async function getPosts(): Promise<Post[]> {
  const response = await request.get(rootURL + '/')
  return response.body.posts
}
