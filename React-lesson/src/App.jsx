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
	const [count, setCount] = useState(0);

	function handleClick() {
		if (count < 3) {
			setCount(count + 1);
		}
	}
	return (
		<>
			<h1>Liczba Kliknięć:</h1>
			<p>{count}</p>
			<button onClick={handleClick} disabled={count >= 3}>
				+
			</button>
		</>
	);
}

export default App;
