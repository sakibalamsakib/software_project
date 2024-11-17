import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <div>RoboHut</div>
            <p className='navbar-under'>An Ecommerce Website</p>
        </div>
        

            <ul className='nav-menu'>
                <li><a href='/'>Home</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/category'>Category</a></li>
                <li><a href='/payement'>Payment</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='/signup'>Sign-Up</a></li>
            </ul>
    </div>
  )
}

export default Navbar