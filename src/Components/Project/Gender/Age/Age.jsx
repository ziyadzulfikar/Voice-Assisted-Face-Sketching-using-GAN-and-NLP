import React from 'react'
import { Badge, Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Age() {
  return (
    <div className='mid'>
        <div className='allBtn'>
            <Row>
                <Col md='3'><h4><Badge bg="light" text='dark'>Young</Badge></h4></Col>
                <Col md='4'><h4><Badge bg="light" text='dark'>Middle Age</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>Aged</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>18-25</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>25-30</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>30-40</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>40-50</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>50-60</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>60+</Badge></h4></Col>
                <Col md='5'><Form.Control  placeholder='Other Type' /></Col>
            </Row>
            <Link to='/Ethinicity'><Button variant="primary">Next</Button></Link>
            <Link to='/Ethinicity'><Button variant="danger" className="mx-2">Skip</Button></Link>
            
        </div>
    </div>
  )
}

export default Age