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
function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setError('Wpisz poprawny e-mail!');
    } else {
      setError('');
      alert(`Wysłano: ${email}`);
    }
  };

  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Twój e-mail'
      />
      <button onClick={handleSubmit}>Wyślij</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
export default App;
