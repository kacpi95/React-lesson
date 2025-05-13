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
  const [color, setColor] = useState('white');

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <button onClick={() => setColor('lightblue')}>Niebieski</button>
      <button onClick={() => setColor('lightgreen')}>Zielony</button>
      <button onClick={() => setColor('white')}>Reset</button>
    </div>
  );
}

export default App;
