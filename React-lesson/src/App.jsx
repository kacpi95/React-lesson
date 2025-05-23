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
  const [steps, setSteps] = useState(0);

  return (
    <div>
      <p>Kroki: {steps}</p>
      <button onClick={() => setSteps(steps + 1)}>Dodaj</button>
      <button onClick={() => setSteps(steps - 1)} disabled={steps === 0}>
        Odejmij
      </button>
    </div>
  );
}

export default App;
