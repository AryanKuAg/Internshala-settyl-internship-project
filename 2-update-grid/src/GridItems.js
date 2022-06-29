import React from 'react'
import "./GridItems.css"

function GridItems(props) {
  return (
    <div className='gridItem__cage'>{
        props.items.map(e => <div className='myItem' key={e.id}><p>{e.name}</p><p>{e.age}</p></div>)
    }</div>
  )
}

export default GridItems