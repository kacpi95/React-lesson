import { StrictMode, useState } from 'react';
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

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Licznkik: {count}</h1>
//       <button onClick={() => setCount(count + 1)}></button>
//       <button onClick={() => setCount(count - 1)}></button>
//     </div>
//   );
// }

// function WelcomeMessege() {
//   const [mess, setMess] = useState('');

//   useEffect(() => {
//     const time = new Date();
//     const hour = time.getHours();

//     if (hour < 12) {
//       setMess('Dzień dobry');
//     } else if (hour >= 18) {
//       setMess('Dobry wieczór');
//     } else setMess('Dzień dobry');
//   }, []);
//   return <h1>{mess}</h1>;
// }

// function RandomNumber() {
//   const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

//   return (
//     <div>
//       <h1>Losowa liczba: {number}</h1>
//       <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>
//         Losuj nową liczbę
//       </button>
//     </div>
//   );
// }

// function ClickCounter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Licznik : {count}</h1>
//       <button onClick={() => setCount(count + 1)}></button>
//     </div>
//   );
// }

// createRoot(document.getElementById('root')).render(<ClickCounter />);

// function Counter() {
//   const date = new Date().getFullYear();
//   return <h1>Mamy rok: {date}</h1>;
// }
// createRoot(document.getElementById('root')).render(<Counter />);

// function CurrentTime() {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   return (
//     <h1>
//       Aktualnie jest : {hours}: {minutes}
//     </h1>
//   );
// }
// createRoot(document.getElementById('root')).render(<CurrentTime />);

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Aktualny stan licznika: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }
// createRoot(document.getElementById('root')).render(<Counter />);

// function Message() {
//   const [mess, setMess] = useState('');

//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 18) {
//       setMess('Dzień dobry');
//     } else {
//       setMess('Dobry wieczór');
//     }
//   }, []);

//   return <h1>{mess}</h1>;
// }
// createRoot(document.getElementById('root')).render(<Message />);

// const currentDate = new Date();

// const daysWeek = [
//   'Poniedziałek',
//   'Wtorek',
//   'Środa',
//   'Czwartek',
//   'Piątek',
//   'Sobota',
//   'Niedziela',
// ];
// const monthsYear = [
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

// const day = currentDate.getDay();
// const year = currentDate.getFullYear();
// const month = monthsYear[currentDate.getMonth()];
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const days = daysWeek[currentDate.getDay()];
// const timer = (
//   <div>
//     {days}, {day} {month} {year}, godzina: {hours}:{minutes}
//   </div>
// );

// createRoot(document.getElementById('root')).render(timer);

// const currentDate = new Date();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();

// const formattedHours = hours < 10 ? `0${hours}` : hours;
// const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

// const timer = (
//   <div>
//     {formattedHours}:{formattedMinutes}
//   </div>
// );

// createRoot(document.getElementById('root')).render(timer);

// const label = "Dokumentacja React'a";
// const address = 'https://react.dev';

// const element = (
//   <header>
//     <h1>{label}</h1>
//     <nav>
//       <ul>
//         <li>
//           <a href={address}>Strona główna</a>
//         </li>
//         <li>
//           <a href={`${address}/learn`}>{label}</a>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

// createRoot(document.getElementById('root')).render(element);

// const getRandomNumber = () => Math.round(Math.random() * 100);

// const element = <h1>Twoja losowa liczba: {getRandomNumber()}</h1>;

// createRoot(document.getElementById('root')).render(element);

// const element = (
//   <>
//     <h1 className='heading'>Mini-formularz</h1>
//     <label htmlFor='name'>Nazwa:</label>
//     <input id='name' name='name' />
//   </>
// );

// createRoot(document.getElementById('root')).render(element);

// function DogImage() {
//   const imageHeight = 100;
//   const imageURL = 'https://zrozumiecreact.pl/dog.jpg';
//   return <img height={imageHeight} src={imageURL} />;
// }

// const element = (
//   <>
//     <p>Poniżej znajduje się zdjęcie super psa!</p>
//     <DogImage />
//     <p>Psy są super, dodajmy więc to samo zdjęcie jeszcze raz!</p>
//     <DogImage />
//     <p>Jako, że trójka to szczęśliwa liczba - dodajmy psa po raz trzeci!</p>
//     <DogImage />
//   </>
// );

// createRoot(document.getElementById('root')).render(element);

// function Calculator() {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState(null);

//   const handleClick = () => {
//     setResult(num1 + num2);
//   };

//   return (
//     <>
//       <h1>{result}</h1>
//       <input
//         type='number'
//         value={num1}
//         onChange={(e) => setNum1(Number(e.target.value))}
//       />
//       <input
//         type='number'
//         value={num2}
//         onChange={(e) => setNum2(Number(e.target.value))}
//       />
//       <button onClick={handleClick}>=</button>
//     </>
//   );
// }
// createRoot(document.getElementById('root')).render(<Calculator />);

function NameForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type='submit'>Wyślij</button>
      </form>
      {submitted && <h2>Witaj, {name}!</h2>}
    </div>
  );
}
createRoot(document.getElementById('root')).render(<NameForm />);
