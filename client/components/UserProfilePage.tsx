import { fetchUserInfo } from '../actions'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function UserProfilePage() {
  const {
    data: userProfile,
    error,
    isLoading,
  } = useAppSelector((state) => state.userProfile)
  const dispatch = useAppDispatch()
  const { username } = useParams()

  useEffect(() => {
    if (username) {
      dispatch(fetchUserInfo(username))
    }
  }, [dispatch, username])

  if (isLoading) return <>Loading...</>
  if (error) return <>An error occurred</>
  if (!userProfile) return <> User not found</>

  return (
    <>
      <div className="flex-col justify-center text-center">
        <button className="bg-blue-500 hover:bg-red-700 py-2 px-4 rounded mr-2 mb-5 mt-5">
          View All Posts by User
        </button>
        <button className="bg-blue-500 hover:bg-red-700 py-2 px-4 rounded ml-2 mb-5">
          View All Profiles
        </button>
        <img
          className="mx-auto block mb-5"
          src={`/images/avatars/${userProfile.image}`}
          alt="profileImage"
        />
        <p className="mb-5">{userProfile.username}</p>
        <p className="mb-5">{userProfile.fullName}</p>
        <p className="mb-5">{userProfile.location}</p>
        <button className="self-center bg-blue-500 hover:bg-red-700 py-2 px-4 rounded mb-5">
          Edit Profile
        </button>
      </div>
    </>
  )
}
