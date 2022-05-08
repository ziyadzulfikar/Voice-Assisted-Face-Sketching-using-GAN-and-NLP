import React from 'react';
import '../App.css';
import {Outlet, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoorOpen, Journal, PlusCircle, Save, XCircle } from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

function Home() {
  const cls = () =>{
    window.open("about:blank", "_self");
    window.close();
  }
  return (
    <div>
      <div className="logo">
        <h3 className='mainTitle'>Voice Assisted Face sketching <br /> using GAN and NLP</h3>
      </div>
      {/* <div className='rightComponent'>
        <img className='rightComponent' src={require("../Images/hacker-Green.png")} alt="" />
      </div> */}
      <Row>
        <Col xs={2}>
          <div className="leftComponent">
            <div className='allBtn'>
                  <Link to='/New'><button className='Btns NewP'><PlusCircle style={{fontWeight: 'normal'}} /></button></Link>
                  <Link to='/Saved'><button className='Btns SaveP'><Save /></button></Link>
                  <Link to='/Open'><button className='Btns OpenP'><DoorOpen /></button></Link>
                  <Link to='/About'><button className='Btns AboutP'><Journal /></button></Link>
                  <Link to='/Close'><button onClick={cls} className='Btns CloseP'><XCircle /></button></Link>
              </div>
          </div>
        </Col>
        <Col xs="auto">
          <div className='mainComponent'> 
            {/* <div className='allBtn'>
              <Row className="mx-1 mt-4">
                  <Link to='/New'><Button variant="primary" className="Btns">New Project</Button></Link>
                  <Link to='/Saved'><Button variant="secondary" className="Btns">Saved Project</Button></Link>
                  <Link to='/Open'><Button variant="success" className="Btns">Open Project</Button></Link>
                  <Link to='/About'><Button variant="dark" className="Btns">?</Button></Link>
                  <Button onClick={cls} variant="light" className="Btns">x</Button>          
              </Row>
            </div> */}
              
          </div>
        </Col>
      </Row>
        <Outlet />
        <div className="mid">
          
        </div>
    </div>
  )
}

export default Home