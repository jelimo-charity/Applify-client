import React from 'react'
import NavBar from './Navbar'
import './topbar.css'
const Topbar: React.FC = () => {
  return (
    <div className='topbar'>
      <NavBar />
      <h3 className="dashboardLink">Dashboard</h3>
      <h3 className="profile">Profile</h3>
    </div>
  )
}

export default Topbar
