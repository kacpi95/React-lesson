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
	return (
		<>
			<h1>Liczba kliknięć:</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-
			</button>
			<button onClick={() => setCount(0)}>reset</button>
		</>
	);
}

export default App;
