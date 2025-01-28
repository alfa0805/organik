import React from 'react'

function Card({ucerinfo}) {
    console.log(ucerinfo.title);
    
  return (
    <div>
        <h1 className='title'>{ucerinfo.title}</h1>
        <p className="text">{ucerinfo.name}</p>
    </div>
  )
}

export default Card