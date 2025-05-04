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

import { useState } from "react";

function App() {
	const [isOn, isOff] = useState(false);

	function handleClick() {
		isOff(!isOn);
	}
	return (
		<>
			<p>Swiatło: {isOn ? "Włączone" : "Wyłączone"}</p>
			<button onClick={handleClick}>Przełącz</button>
		</>
	);
}

export default App;
