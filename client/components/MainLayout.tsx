import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import PostFeed from './PostFeed'

function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <PostFeed />
      <Footer />
    </>
  )
}

export default MainLayout
