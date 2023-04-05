import postReducer, { PostState } from '../postsReducer'
import Post from '../../../models/post'

import { setPostSuccess } from '../../actions/posts'

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
})
