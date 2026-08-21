import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'
const Spotify = () => {
  return (
    <MacWindow width='20vw'>
        <div className='spotify-window'>
          <iframe data-testid="embed-iframe" style={{borderRadius:'12px'}}
          src="https://open.spotify.com/embed/playlist/4UbEObOXYmQYjDRNJX10Hf?utm_source=generator&theme=0&si=961be269ff22435e" 
          width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </MacWindow>
    
  )
}

export default Spotify
