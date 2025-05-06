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
	const array = [
		"Nigdy nie przestawaj się uczyć.",
		"Praktyka czyni mistrza.",
		"Koduj codziennie!",
		"Zacznij od prostych rzeczy.",
	];
	const [list, setList] = useState("");

	function handleClick() {
		const randomList = Math.floor(Math.random() * array.length);
		setList(array[randomList]);
	}
	return (
		<>
			<button onClick={handleClick}>Pokaż przykładowy przykład</button>
			<h1>{list}</h1>
		</>
	);
}

export default App;
