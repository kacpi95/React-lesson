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
	const [activeTab, setActiveTab] = useState("home");

	return (
		<div>
			<div>
				<button onClick={() => setActiveTab("home")}>Home</button>
				<button onClick={() => setActiveTab("about")}>About</button>
				<button onClick={() => setActiveTab("contact")}>Contact</button>
			</div>
			<div style={{ marginTop: "10px" }}>
				{activeTab === "home" && <p>Witamy na stronie głównej!</p>}
				{activeTab === "about" && <p>To jest zakładka "O nas".</p>}
				{activeTab === "contact" && <p>Skontaktuj się z nami tutaj.</p>}
			</div>
		</div>
	);
}

export default App;
