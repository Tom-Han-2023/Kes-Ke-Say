import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import News from './News'

function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <News />
      <Footer />
    </>
  )
}

export default MainLayout
