import Post from '../../models/post'

function Posts({ id, body, image, created_at, users_username }: Post) {
  const newDate = new Date(created_at)
  const options = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Pacific/Auckland',
  }).format(newDate)

  return (
    <div className="border-2 border-black w-1/2 mx-auto mt-4 p-6">
      <a href={`/post/${id}`} className="text-french-blue">
        <h2>{body}</h2>
      </a>
      {image && <img src={image} alt={image} />}
      <p>Date posted: {options}</p>
      <p>
        Username:{' '}
        <a href={`/profiles/${users_username}`} className="text-french-blue">
          {users_username}
        </a>
      </p>

      <p>voting will be here</p>
    </div>
  )
}
export default Posts
