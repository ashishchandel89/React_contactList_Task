import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
        <nav>
            <div className="leftBar">
                <div className="apple-icon">
                    <img src='/nav-icons/apple.svg'/>
                </div>
                <div className="nav-items">
                    <p>Ashish Chandel</p>
                </div>
                 <div className="nav-items">
                    <p>File</p>
                </div>
                <div className="nav-items">
                    <p>Window</p>
                </div>
                <div className="nav-items">
                    <p>Terminal</p>
                </div>
            </div>
            <div className="rightBar">
                 <div className="apple-icon">
                  <i class="ri-bluetooth-fill"></i>
                </div>
                  <div className="apple-icon">
                    <img src='/nav-icons/wifi.svg'/>
                </div>
                 <div className="apple-icon">
                    <i class="ri-search-line"></i>
                </div>
                
                <div className="nav-items date">
                    <p>DateTime</p>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
