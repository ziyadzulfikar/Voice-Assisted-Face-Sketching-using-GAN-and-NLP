import React from 'react'
import { Button } from 'react-bootstrap';
import { Mic } from 'react-bootstrap-icons';

function Describe() {
  return (
    <div className='mid'>
      <h1 className='textMain'>Describe</h1>
        <div className="micBack">
            <Mic className='micO'  />
            <Button style={{float : 'right', marginTop: '2vw'}} href={require("../../../../../../Images/FaceG.png")} variant="danger">Skip</Button>
        </div>
    </div>
  )
}

export default Describe