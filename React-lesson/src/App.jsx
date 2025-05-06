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
	const [accept, setAccept] = useState(false);
	return (
		<>
			<label htmlFor=''>Akceptuję regulamin</label>
			<input
				type='checkbox'
				checked={accept}
				onChange={() => setAccept(!accept)}
			/>
			<h1>
				{accept ? "Regulamin zaakceptowany" : "Regulamin niezaakceptowany"}
			</h1>
		</>
	);
}

export default App;
