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
  const [text, setText] = useState('Kliknij mnie!');

  const handleClick = () => {
    setText('Kliknięto!');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Kliknij</button>
    </div>
  );
}

export default App;
