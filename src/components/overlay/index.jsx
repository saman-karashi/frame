import React from 'react'

const Overlay = ({setModalDisplayed}) => {
  return (
    <div id='overlay' onClick={()=> setModalDisplayed(false)}></div>
  )
}

export default Overlay