import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { getAllProfiles } from '../actions/users'
import { Link } from 'react-router-dom'

const AllProfiles = () => {
  const dispatch = useAppDispatch()
  const { data: users, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(getAllProfiles())
  }, [dispatch])

  if (loading)
    return (
      <div className="bg-blue-500 text-white font-bold rounded-t px-4 py-2 text-center animate-pulse">
        Loading..
      </div>
    )
  if (error)
    return (
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 text-center animate-pulse">
        ERROR: {error}
      </div>
    )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((user) => (
        <Link to={`/profiles/${user.username}`} key={user.id}>
          <div className="p-4 bg-gray-100 rounded-md">
            <img
              src={`/images/avatars/${user.image}`}
              alt={`Profile of ${user.username}`}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <div className="text-center mt-2">
              <h2 className="text-lg font-bold">{user.fullName}</h2>
              <p className="text-gray-500">
                @{user.username} &middot; {user.location}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllProfiles
