import Post from '../../models/post'
import { fetchPosts } from '../actions/posts'
import { useAppSelector, useAppDispatch } from '../hooks'
import Posts from './Posts'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

function PostFeed() {
  const { loading, error, data } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()
  const [posts, setPosts] = useState([] as Post[])

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => {
    if (data.length > 0) {
      setPosts(data.slice(0, 3))
    }
  }, [data])

  function fetchMoreData() {
    setPosts(data.slice(0, posts.length + 3))
  }

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error !== undefined ? (
        <p>There was an error</p>
      ) : (
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchMoreData}
          hasMore={posts.length < data.length}
          loader={
            posts.length <= data.length ? (
              <h4 className="text-center">More Posts coming...</h4>
            ) : (
              <h4 className="text-center">
                You have reached the end for today
              </h4>
            )
          }
        >
          <div className="container mx-auto">
            <h2 className="text-center">Posts</h2>
            {posts.map((post: Post) => {
              return (
                <div key={`key${post.id}`}>
                  <Posts
                    id={post.id}
                    users_username={post.users_username}
                    body={post.body}
                    image={post.image}
                    created_at={post.created_at}
                    user_id={post.user_id}
                  />
                </div>
              )
            })}
          </div>
        </InfiniteScroll>
      )}
    </>
  )
}
export default PostFeed
