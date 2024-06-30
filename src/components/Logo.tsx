import React  from 'react';
import logo from '../assets/images/logo.svg'

const Logo: React.FC = () => (
    <div className="logo">
        <img src={logo} alt="Jobster Logo"  className='logo-image'/>
    </div>
);


export default Logo;