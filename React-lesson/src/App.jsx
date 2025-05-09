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
	const [votes, setVotes] = useState({ like: 0, dislike: 0 });

	return (
		<div>
			<button onClick={() => setVotes({ ...votes, like: votes.like + 1 })}>
				👍 {votes.like}
			</button>
			<button
				onClick={() => setVotes({ ...votes, dislike: votes.dislike + 1 })}
			>
				👎 {votes.dislike}
			</button>
		</div>
	);
}

export default App;
