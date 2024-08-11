import React from 'react'
import PixaNavbar from '../components/PixaNavbar'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div>
        <PixaNavbar/>
        <Outlet/>
    </div>
  )
}

export default Layout