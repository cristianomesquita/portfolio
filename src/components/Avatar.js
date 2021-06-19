import React from 'react'

const Avatar = ({ alt, height, src, width }) => 
   <img src={src} alt={alt} width={width} height={height} />
  return <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
}

export default Avatar
