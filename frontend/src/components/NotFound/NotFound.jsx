import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'



const NotFound = () => {
  return (
    <>
        <section className='notfound '>
          <div className="content">
            <img src="/notfound.png" alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </>
  )
}

export default NotFound