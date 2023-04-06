import { Routes, Route } from 'react-router-dom'
import AllGroups from './AllGroups'
import LandingPage from './LandingPage'
import MainLayout from './MainLayout'
import Home from './Home'
import UserProfilePage from './UserProfilePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Replace the element with your React Component */}
        <Route index element={<Home />} />
        <Route path="register" element={<div>Register</div>} />
        <Route path="profiles" element={<div>AllProfiles </div>} />
        <Route path="profiles/:username" element={<UserProfilePage />} />
        <Route path="post" element={<div>AddPost</div>} />
        <Route path="post/:id" element={<div>Post</div>} />
        <Route path="groups" element={<AllGroups />} />
        <Route path="groups/add" element={<div>GroupProfileForm</div>} />
        <Route path="groups/:id" element={<div>Group</div>} />
      </Route>
      <Route path="/login" element={<LandingPage />} />
    </Routes>
  )
}

export default App
