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
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	const handleAdd = () => {
		if (comment.trim()) {
			setComments([...comments, comment]);
			setComment("");
		}
	};

	return (
		<div>
			<textarea
				placeholder='Napisz komentarz...'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button onClick={handleAdd}>Dodaj komentarz</button>
			<ul>
				{comments.map((c, i) => (
					<li key={i}>{c}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
