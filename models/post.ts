export default interface Post {
  id: number
  user_id: number
  body: string
  image?: string
  created_at: number
  users_username: string
}

export interface NewPost extends Partial<Post> {
  id?: number
}
