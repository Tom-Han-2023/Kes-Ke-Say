import Posts from './Posts'

//Pull in the data with the app selector

function PostFeed() {
  return (
    <Posts
      id={1}
      user_id={1}
      body={'I found this really interesting book, you should check it out'}
      image={''}
      created_at={2023}
    />
  )
}
export default PostFeed
