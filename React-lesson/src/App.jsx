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
	const [lang, setLang] = useState("pl");
	function handleClick() {
		setLang(lang === "pl" ? "eng" : "pl");
	}
	return (
		<>
			<h1>Wybierz język:</h1>
			<h3>{lang}</h3>
			<button onClick={handleClick}>Pl/ENG</button>
		</>
	);
}

export default App;
