import React, { useEffect, useState } from 'react'
import './navbar.scss'

const Navbar = () => {

    const [dateTime,setDateTime]=useState('');
    useEffect(()=>{
        const updateDateTime=()=>{
            const now=new Date();
            const formattedDateTime=now.toLocaleString('en-US',{
                weekday:'short',
                month:'short',
                day:'numeric',
                hour:'numeric',
                minute:'2-digit',
                hour12:'true'
            }).toWellFormed()   
            setDateTime(formattedDateTime.replace(',',''));
        }
        updateDateTime()
        const interval=setInterval(updateDateTime,1000)
        return ()=>clearInterval(interval);
    },[])
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
                    <p>{dateTime}</p>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
