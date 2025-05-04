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
	const [name, setName] = useState("");

	return (
		<>
			<h1>Wpisz swoje imię:</h1>
			<div>
				<div>
					<label htmlFor='name'></label>
				</div>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<h2>{name}</h2>
		</>
	);
}

export default App;
