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
	const [isVisible, setIsVisible] = useState(true);

	function handleClick() {
		setIsVisible(!isVisible);
	}
	return (
		<>
			{isVisible && (
				<h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
					consequatur.
				</h1>
			)}
			<button onClick={handleClick}>{isVisible ? "Ukryj" : "Pokaż"}</button>
		</>
	);
}

export default App;
