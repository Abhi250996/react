import React from 'react'
import './pageheading.css'

const Pageheading = (props) => {

  return (
    <>
      <div className='headingItem'>
        <h1 className='heading'>{props.title1} <span>{props.title2}</span></h1>
      </div >
    </>
  )
}

export default Pageheading
