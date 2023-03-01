import React, { useState } from 'react'
import Menu from './components/Menu'
import Video from './components/Video'

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
}

const App = () => { 

  const [src, setSrc] = useState('')

  const chooseVideo = (e) => {
    setSrc(VIDEOS[e]);
  }

  return (
    <div className='container'>
      <h1>Video Player</h1>
      <Menu chooseVideo={chooseVideo} />
      <Video src={src} />
    </div>
  )
}

export default App