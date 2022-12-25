import React from 'react'

const Overlay = ({setModalIsActive}) => {
  return (
    <div id='overlay' onClick={()=> setModalIsActive(false)}></div>
  )
}

export default Overlay