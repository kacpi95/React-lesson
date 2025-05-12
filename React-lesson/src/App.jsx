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
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type={visible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Hasło'
      />
      <button onClick={() => setVisible(!visible)}>
        {visible ? '🙈' : '👁️'}
      </button>
    </div>
  );
}

export default App;
