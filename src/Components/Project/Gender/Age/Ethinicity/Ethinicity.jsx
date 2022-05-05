import React from 'react'
import { Badge, Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Ethinicity() {
    return (
        <div className='mid'>
            <div className='allBtn'>
                <Row>
                    <Col md='3'><h4><Badge bg="light" text='dark'>Asian</Badge></h4></Col>
                    <Col md='4'><h4><Badge bg="light" text='dark'>American</Badge></h4></Col>
                    <Col md='3'><h4><Badge bg="light" text='dark'>Chinese</Badge></h4></Col>
                    <Col md='3'><h4><Badge bg="light" text='dark'>Bengal</Badge></h4></Col>
                    <Col md='3'><h4><Badge bg="light" text='dark'>Korean</Badge></h4></Col>
                    <Col md='3'><h4><Badge bg="light" text='dark'>Kerala</Badge></h4></Col>
                    <Col md='5'><Form.Control  placeholder='Other Type' /></Col>
                </Row>
                <Link to='/Describe'><Button variant="primary">Next</Button></Link>
                <Link to='/Describe'><Button variant="danger" className="mx-2 my-2">Skip</Button></Link>
                
            </div>
        </div>
    )
}

export default Ethinicity