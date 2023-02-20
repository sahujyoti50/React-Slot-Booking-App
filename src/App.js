import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import Time from './Time.js'

function App() {
  const current = new Date();
  const [date, setDate] = useState(current);
  const [showTime, setShowTime] = useState(false)

  return (
    <div className='app'>
      <div>
        <h1 className='header'>React Laundry Booking App</h1>
      </div>
      <div>
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
      </div>
      <div style={{ width: '600px', border: '1px solid gray', maxHeight: '400px', boxShadow: '4px 5px 5px lightGray', padding: '5px', margin: '10px auto' }}>
        <p style={{ marginLeft: '80px ' }}>Current Date is <b>{current.toDateString()}</b></p>
        <p style={{ marginLeft: '80px ' }}>
          Your Selected Date is<b> {date.toDateString()}</b>
        </p>
        {showTime && <Time showTime={showTime} date={date} />}
      </div>
      <button className='button-28' onClick={() => { setShowTime(false); setDate(current) }}>Reset</button>
    </div>
  )
}

export default App;