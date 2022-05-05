import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Gender() {
  return (
    <div className='mid'>

        <CardGroup>
            <Card style={{width:'8vw', height:'10vw', borderRadius:'10px'}}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Male</Card.Title>
                    <Card.Text>
                        <Link to='/Age'><Button variant="primary" className="mx-2">Next</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-2' style={{width:'8vw', height:'10vw', borderRadius:'10px'}}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Female</Card.Title>
                    <Card.Text>
                        <Link to='/Age'><Button variant="primary" className="mx-2">Next</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{width:'8vw', height:'10vw', borderRadius:'10px'}}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Other</Card.Title>
                    <Card.Text>
                        <Link to='/Age'><Button variant="primary" className="mx-2">Next</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

        <Link to='/Age'><Button variant="primary" className="mx-2">Skip</Button></Link>
    </div>
  )
}

export default Gender