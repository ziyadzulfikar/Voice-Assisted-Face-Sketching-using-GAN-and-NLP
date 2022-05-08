import React from 'react'
import { Trash } from 'react-bootstrap-icons'
import '../../App.css'

function Saved() {
  return (
    <div>
      <div className='mid'>
        <h1 className='textMain'>Saved Section</h1>
        <hr style={{background:'white'}} />
          <div className="innerWidth mx-auto">
            <div className="savedBoxes">
              <p className='savedBoxText'>Sample Case</p>
              <Trash className='SavedBoxDlte' />
            </div>
            <div className="savedBoxes">
              <p className='savedBoxText'>Sample Case</p>
              <Trash className='SavedBoxDlte' />
            </div>
            <div className="savedBoxes">
              <p className='savedBoxText'>Sample Case</p>
              <Trash className='SavedBoxDlte' />
            </div>
            <div className="savedBoxes">
              <p className='savedBoxText'>Sample Case</p>
              <Trash className='SavedBoxDlte' />
            </div>
            <div className="savedBoxes">
              <p className='savedBoxText'>Sample Case</p>
              <Trash className='SavedBoxDlte' />
            </div>
            <div className="savedBoxes">
              <p className='savedBoxText'>Sample Case</p>
              <Trash className='SavedBoxDlte' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Saved