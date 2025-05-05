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
	const [leftCount, setLeftCount] = useState(0);
	const [rightCount, setRightCount] = useState(0);

	return (
		<div>
			<button onClick={() => setLeftCount(leftCount + 1)}>
				Lewy ({leftCount})
			</button>
			<button onClick={() => setRightCount(rightCount + 1)}>
				Prawy ({rightCount})
			</button>
		</div>
	);
}

export default App;
