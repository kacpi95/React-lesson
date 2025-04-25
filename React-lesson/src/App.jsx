// import { useState } from 'react';

// function App() {
//   const [isSpoilerShown, setIsSpoilerShown] = useState(false);
//   const [isWarningShown, setIsWarningShwon] = useState(true);

//   function handleShowSpoilerCLick() {
//     setIsSpoilerShown(true);
//     setIsWarningShwon(false);
//   }
//   function handleCloseWarningClick() {
//     setIsWarningShwon(false);
//   }
//   return (
//     <>
//       <h1>Gwiezdne Wojny V</h1>
//       <h2>Rok produkcji: 1998</h2>
//       <h2>Fabuła</h2>
//       {isWarningShown && (
//         <p>
//           Uwaga! Opis fabuły zawiera spoilery!
//           <button onClick={handleCloseWarningClick}>X</button>
//         </p>
//       )}
//       <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
//       {isSpoilerShown ? (
//         <p>Valder okazuje sie być ojcem Luka.</p>
//       ) : (
//         <button onClick={handleShowSpoilerCLick}>Pokaż spoiler</button>
//       )}
//     </>
//   );
// }

// export default App;
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Wprowadź swoje nazwisko:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type='submit'>Zatwierdź</button>
      </form>
      {submittedName && <h2>Witaj, {submittedName}!</h2>}
    </div>
  );
}
