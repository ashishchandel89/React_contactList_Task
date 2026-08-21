import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({children,width='50vw',height='55vh'}) => {
  return (
   <Rnd default={{
    width : width,
    height : height,
    x:300,
    y:200
   }}>
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
           {children}
        </div>
    </div>
   </Rnd>
  )
}

export default MacWindow
