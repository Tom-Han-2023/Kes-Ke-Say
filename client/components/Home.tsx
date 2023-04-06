import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import PostFeed from './PostFeed'

export default function Home() {
  const navigate = useNavigate()
  const isAuth = true

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth, navigate])

  return (
    <div>
      <div className="flex justify-end">
        <a href="/post">
          {' '}
          <button className="border-2 border-wine-red p-3 rounded-xl bg-wine-red text-white m-6">
            New Post
          </button>
        </a>
      </div>
      <PostFeed />
    </div>
  )
}
