import { StrictMode } from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Task 1

// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const timer = <div>Mamy rok: {year}</div>;

// Task 2
// const currentDateTwo = new Date();
// const hours = currentDateTwo.getHours();
// const minutes = currentDateTwo.getMinutes();

// const formatHours = hours < 10 ? `0${hours}` : hours;
// const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;

// const timerTwo = (
//   <div>
//     {formatHours}:{formatMinutes}
//   </div>
// );

// Task 3
// const days = [
//   'Niedziela',
//   'Poniedziałek',
//   'Wtorek',
//   'Środa',
//   'Czwartek',
//   'Piątek',
//   'Sobota',
// ];
// const months = [
//   'stycznia',
//   'lutego',
//   'marca',
//   'kwietnia',
//   'maja',
//   'czerwca',
//   'lipca',
//   'sierpnia',
//   'września',
//   'października',
//   'listopada',
//   'grudnia',
// ];

// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = months[currentDate.getMonth()];
// const day = currentDate.getDate();
// const daysList = days[currentDate.getMonth()];
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();

// const formatHours = hours < 10 ? `0${hours}` : hours;
// const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;

// const timerThree = (
//   <div>
//     {daysList}, {day}. {month}. {year}, godzina: {formatHours} :{' '}
//     {formatMinutes}
//   </div>
// );

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Licznkik: {count}</h1>
      <button onClick={() => setCount(count + 1)}></button>
      <button onClick={() => setCount(count - 1)}></button>
    </div>
  );
}
createRoot(document.getElementById('root')).render(<Counter/>);
