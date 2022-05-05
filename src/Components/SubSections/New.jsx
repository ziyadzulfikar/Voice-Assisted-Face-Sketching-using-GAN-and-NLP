import React from 'react'
import { Button } from 'react-bootstrap'
import { Outlet,Link } from 'react-router-dom'
import '../../App.css'
// import Open from './Open'

function New() {
  return (
    <div>
        <div className='mid'>
          <h1>New Section</h1>
          <span>
            <h5>Name</h5>
            <input type="text" />
            <h5>Case File</h5>
            <input type="text" />
            <h5>Suspect Name</h5>
            <input type="text" />
          </span>
          <Link to='/Gender'><Button variant="primary" className="mx-2">New Project</Button></Link>
        </div>

        <Outlet />
    </div>
  )
}

export default New