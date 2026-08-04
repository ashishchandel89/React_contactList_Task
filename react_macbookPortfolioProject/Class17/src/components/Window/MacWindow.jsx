import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = () => {
  return (
   <Rnd>
    <div className='window'>
        <div className="upper-content">
            <div className="btn">
            <div className="icon red"></div>
            <div className="icon yellow"></div>
            <div className="icon green"></div>
            </div>
            <div className="terminalName">
                <i class="ri-folder-fill"></i>
                <p>ashishChandel-zsh-terminal</p>
            </div>
        </div>
        <div className="lower-content">
            Hello
        </div>
    </div>
   </Rnd>
  )
}

export default MacWindow
