import React from 'react'
import { Button, Card, CardGroup, Row } from 'react-bootstrap'
import { GenderFemale, GenderMale } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Gender() {
  return (
    <div className='mid'>
        <h1 className='textMain'>Gender</h1>
        <Row>
            <CardGroup>
                <Card className='cardGender'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" className="cardImage" /> */}
                    {/* src={require("../../../Images/maleTrans.png")} */}
                    <Card.Body>
                        <Card.Title style={{float:'left'}}><GenderMale /> Male</Card.Title>
                        <Card.Text style={{float:'right'}}>
                            <Link to='/Age'><Button variant="dark" className="mx-2 genderBtn">Next</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>
        <Row>
            <CardGroup>
                <Card className='my-2 cardGender'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title style={{float:'left'}}><GenderFemale /> Female</Card.Title>
                        <Card.Text style={{float:'right'}}>
                            <Link to='/Age'><Button variant="dark" className="mx-2 genderBtn">Next</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>
        <Row>
            <CardGroup>
                <Card className='cardGender'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                        <Card.Title style={{float:'left'}}>Other</Card.Title>
                        <Card.Text style={{float:'right'}}>
                            <Link to='/Age'><Button variant="dark" className="mx-2 genderBtn">Next</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>

        <Link to='/Age'><Button variant="danger" className="my-2">Skip</Button></Link>
    </div>
  )
}

export default Gender