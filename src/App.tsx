import React, { useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';

function App() {
  const [date, setDate] = useState('01/01/2000');

  return (
    <>
      <div>
        <h3>Given date for Assessment</h3>
        <Calendar date={'23/05/2020'} />
      </div>
      <div>
        <h3>Dynamically change date input</h3>
        <label>Enter date (DD/MM/YYYY): </label>
        <input
          id="dateInput"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Calendar date={date} />
      </div>
    </>
  );
}

export default App;
