import request from 'superagent'
import Post, { NewPost } from '../../models/post'

const rootURL = '/api/v1/posts'

export async function getPosts(): Promise<Post[]> {
  const response = await request.get(rootURL + '/')
  return response.body.posts
}

export async function addPost(newPost: NewPost): Promise<Post> {
  const response = await request.post(rootURL + '/').send(newPost)
  return response.body.post
}
