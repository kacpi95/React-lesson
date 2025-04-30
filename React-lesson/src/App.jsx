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
  const [isAdmin, setIsAdmin] = useState(false);

  const [person, setPerson] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setPerson({ name, isAdmin });
    setName('');
  }

  return (
    <>
      <h1>Dane osobowe:</h1>
      {person && (
        <>
          <h2>{person.name}</h2>
          <h3>{person.isAdmin ? 'Administrator' : 'Użytkownik'}</h3>
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
          <label htmlFor='admin'>
            Admin:
            <input
              id='admin'
              type='checkbox'
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </label>
        </div>
        <button disabled={name.length === 0}>Zapisz</button>
      </form>
    </>
  );
}
