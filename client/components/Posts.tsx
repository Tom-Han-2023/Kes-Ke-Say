import Post from '../../models/post'

function Posts({ id, user_id, body, image, created_at }: Post) {
  //TODO Format the created at date
  //TODO get userName from get get all posts query

  return (
    <div>
      <a href="#">
        <h2>{body}</h2>
      </a>
      <p>Date posted: {created_at}</p>
      <p>Username: {user_id}</p>
      <p>voting will be here</p>
    </div>
  )
}
export default Posts
