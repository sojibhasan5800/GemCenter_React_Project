import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout