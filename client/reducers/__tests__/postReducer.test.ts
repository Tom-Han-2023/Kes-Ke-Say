import postReducer, { PostState } from '../postsReducer'
import Post, { NewPost } from '../../../models/post'

import { addPostSuccess, setPostSuccess } from '../../actions/posts'
import { post } from 'superagent'

const InitialState: PostState = {
  loading: false,
  error: undefined,
  data: [] as Post[],
}

describe('postReducer Tests', () => {
  it('Should get all the posts', () => {
    const posts: Post[] = [
      {
        id: 1,
        user_id: 1,
        body: 'I found this really interesting book, you should check it out',
        image: '',
        created_at: 1680564029673,
        users_username: 'brie',
      },
      {
        id: 2,
        user_id: 2,
        body: 'I found this really cool Italian place, they have the best food',
        image: '',
        created_at: 1680564029673,
        users_username: 'brie',
      },
    ]

    const action = setPostSuccess(posts)
    const newState = postReducer(InitialState, action)
    expect(newState.data).toEqual(posts)
  })

  it('Should get add a post', () => {
    const post: NewPost = {
      user_id: 1,
      body: 'This is a new post',
      image: 'image.jpg',
      created_at: 1680564029673,
    }

    const action = addPostSuccess({
      id: 1,
      user_id: post.user_id as number,
      body: post.body as string,
      image: post.image,
      created_at: post.created_at as number,
      users_username: '',
    })
    const newState = postReducer(InitialState, action)
    expect(newState.data).toEqual([
      {
        body: 'This is a new post',
        created_at: 1680564029673,
        id: 1,
        image: 'image.jpg',
        user_id: 1,
        users_username: '',
      },
    ])
  })
})
