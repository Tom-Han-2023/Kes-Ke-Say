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

  console.log(userProfile)

  if (!userProfile) return <> User not found</>

  return (
    <>
      {/* <div className='box-border'> */}
      <div className="flex-col justify-center text-center">
        <br></br>
        <button className="bg-blue-500 hover:bg-red-700 py-2 px-4 rounded mr-2">
          View All Posts by User
        </button>
        <button className="bg-blue-500 hover:bg-red-700 py-2 px-4 rounded ml-2">
          View All Profiles
        </button>
        <br></br>
        <br></br>

        {/* <div className="flex-col self-center text-center"> */}
        {/* DISPLAY USER AVATAR  */}
        <img
          className="mx-auto block"
          src={`/images/avatars/${userProfile.image}`}
          alt="profileImage"
        />
        {/* DISPLAY USERNAME */}
        <br></br>
        <p>{userProfile.username}</p>
        <br></br>
        {/* DISPLAY FULL NAME */}
        <p>{userProfile.fullName}</p>
        <br></br>
        {/* LOCATION */}
        <p>{userProfile.location}</p>
        {/* EDIT PROFILE BUTTON */}
        <br></br>
        <button className="self-center bg-blue-500 hover:bg-red-700 py-2 px-4 rounded ">
          Edit Profile
        </button>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

//
