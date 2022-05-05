import React from 'react';
import '../App.css';
import {Outlet, Link} from 'react-router-dom';
import {Button, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const cls = () =>{
    window.open("about:blank", "_self");
    window.close();
  }
  return (
    <div>
        <div className='mainComponent'>
          <div className='allBtn'>
            <Row className="mx-1 mt-4">
                <Col md={2}><Link to='/New'><Button variant="primary" className="mx-2">New Project</Button></Link></Col>
                <Col md={2}><Link to='/Saved'><Button variant="secondary" className="mx-3">Saved Project</Button></Link></Col>
                <Col md={2}><Link to='/Open'><Button variant="success" className="mx-4">Open Project</Button></Link></Col>
                <Col md={3}><Link to='/About'><Button variant="dark" className="mx-5">?</Button></Link></Col>
                <Col md={3} onClick={cls}><Button variant="light" className="mx-">x</Button></Col>          
            </Row>
          </div>
            {/* <div className='allBtn'>
                <Link to='/New'><button className='Btns'>New Project</button></Link>
                <Link to='/Saved'><button className='Btns'>Saved Project</button></Link>
                <Link to='/Open'><button className='Btns'>Open Project</button></Link>
                <Link to='/About'><button className='Btns'>About</button></Link>
                <Link to='/Close'><button className='Btns'>Close</button></Link>
            </div> */}
        </div>
        <Outlet />
    </div>
  )
}

export default Home