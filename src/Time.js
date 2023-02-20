import React from 'react'
import { useState } from 'react';
import './App.css';

const time = ['07:00', '10:00', '13:00', '16:00', '19:00']

function Times(props) { 
 
  const [event, setEvent] = useState('')
  const [info, setInfo] = useState(false);

  return (

    <div className="times">
      <p>Kindly Select Your Time Slot?</p>
      {time.map(times => {
        return (
          <div className="buttonDiv">
            <button className="button-88" onClick={(e) => { setEvent(e.target.innerText); setInfo(true); }}> {times} </button>
          </div>
        )
      })}
      <div className='appointment'>
        {info ? <p>Your appointment is set to {props.date.toDateString()} at {event}</p> : null}
      </div>
    </div>
  )
}

export default Times;