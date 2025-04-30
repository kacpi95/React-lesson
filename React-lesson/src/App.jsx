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
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    let error = null;

    if (password.trim().length < 5) {
      error = 'Hasło powinno mieć co najmniej 5 znaków.';
    } else if (!/^(?=.*[0-9]).*$/.test(password)) {
      error = 'Hasło powinno zawierać cyfrę.';
    }

    if (error !== null) {
      setErrorMessage(error);
    } else {
      setErrorMessage(null);
      setPassword('');
      alert('Hasło zapisane!');
    }
  }

  return (
    <>
      <h1>Walidator hasła:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Wpisz hasło...'
          />
        </div>
        <button>Wyślij</button>
      </form>
      <h2>{errorMessage}</h2>
    </>
  );
}
