import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Outlet,Link } from 'react-router-dom'
import '../../App.css'
// import Open from './Open'

function New() {
  return (
    <div>
        <div className='mid'>
          <h1 className='textMain'>New Case</h1>
          <hr style={{background: 'white'}} />
          <br />
          <span>
            <div className='innerWidth mx-auto'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='textAll'>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter Name" required/>
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='textAll'>Case File</Form.Label>
                  <Form.Control type="email" placeholder="Enter Case File Name" />
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='textAll'>Suspect Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter Suspect Name" />
                  
                </Form.Group>
                <br />
                <hr style={{background: 'white'}} />
                <Link to='/Gender'><Button variant="success" type='submit' className="my-2">Submit</Button></Link>
              </Form>
            </div>
          </span>
        </div>

        <Outlet />
    </div>
  )
}

export default New