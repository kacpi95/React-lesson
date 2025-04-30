// import { LikesCounter } from './components/LikesCounter';
// import { Plot } from './components/Plot';
// import { Form } from './components/Form';
// function App() {
//   return (
//     <>
//       <h1>Gwiezdne Wojny V</h1>
//       <h2>Rok produkcji: 1998</h2>
//       <LikesCounter />
//       <Plot />
//       <Form />
//     </>
//   );
// }

// export default App;
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const [person, setPerson] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setPerson({ name, lastName });
    setName('');
    setLastName('');
  }

  return (
    <>
      <h1>Dane osobowe:</h1>
      {person && (
        <>
          <h2>
            {person.name} {person.lastName}
          </h2>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Imię'
          />
        </div>
        <div>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder='Nazwisko'
          />
        </div>
        <button>Zapisz</button>
      </form>
    </>
  );
}
