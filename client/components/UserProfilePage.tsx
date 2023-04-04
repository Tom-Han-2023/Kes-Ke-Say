import React from 'react'



export default function UserProfilePage() {

  const fakeUser = {
    userImage: "../../images/avatars/ava-17.png",
    username: "SarahRules117",
    fullname: "Sarah McGregor",
    location: "Auckland",
  }



  return (
    <>
      <div>
        <button>View All Posts by User</button><br></br>
        <button>View All Profiles</button>

        <div>
          {/* DISPLAY USER AVATAR  */}
          <img src={fakeUser.userImage} alt='profileImage' />
          {/* DISPLAY USERNAME */}
          <p>{fakeUser.username}</p>

          {/* DISPLAY FULL NAME */}
          <p>{fakeUser.fullname}</p>

          {/* LOCATION */}
          <p>{fakeUser.location}</p>
          {/* EDIT PROFILE BUTTON */}
          <button>Edit Profile</button>
        </div>
      </div>
    </>
  )
}

//