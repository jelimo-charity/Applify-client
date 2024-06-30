import React from 'react'
import Logo from './Logo'
import { CiMenuFries } from "react-icons/ci";
import './navbar.css'
const NavBar: React.FC = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () =>{
    //     setIsDropdownOpen(!isDropdownOpen);
    // }
  return (
    <div className='nav-container'>
          <div className="nav-logo">
              <Logo/>
              <CiMenuFries style={{ fontSize: '24px', color: 'black', fontWeight: 'bolder'}}/>
          </div>
          {/* <span className="nav-name">Dashboard</span>
          <div className="user-menu">
            <span onClick={toggleDropdown} className="user-name">Profile</span>
            {isDropdownOpen && (
            <div className="dropdown">
                <button className='btn'>Logout</button>
            </div>
          )} */}
          {/* </div> */}
          
    </div>
  )
}

export default NavBar