import Post from '../../models/post'
import { fetchPosts } from '../actions/posts'
import { useAppSelector, useAppDispatch } from '../hooks'
import Posts from './Posts'
import { useEffect } from 'react'

function PostFeed() {
  const { loading, error, data } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      {data.map((post: Post) => {
        return (
          <div key={post.id}>
            <Posts
              id={post.id}
              user_id={post.user_id}
              body={post.body}
              image={post.image}
              created_at={post.created_at}
            />
          </div>
        )
      })}
    </>
  )
}
export default PostFeed
