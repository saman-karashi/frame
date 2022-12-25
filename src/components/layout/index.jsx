import React from 'react';
import Navbar from '../navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className='container overflow-hidden' style={{marginTop:'10rem'}}>
          {children}
        </main>
    </>
  )
}

export default Layout