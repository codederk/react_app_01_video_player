import React from 'react'

const Video = (props) => {
  return (
    <div>
      <video src={props.src} controls autoPlay muted></video>
    </div>
  )
}

export default Video