// import { useState } from 'react';

// function App() {
//   const [isSpoilerShown, setIsSpoilerShown] = useState(false);
//   const [isWarningShown, setIsWarningShwon] = useState(true);
//   const [numberOfLikes, setNumberOfLikes] = useState(0);

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
//       <h2>Liczba polubień: {numberOfLikes}</h2>
//       <button onClick={() => setNumberOfLikes(numberOfLikes + 1)}>
//         Lubię to!
//       </button>
//       <button onClick={() => setNumberOfLikes(numberOfLikes + 3)}>Kocham to!</button>
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
  const [person, setPerson] = useState({
    name: 'Jan',
    lastName: 'Kowalski',
    isAdmin: false,
  });

  function handleClick() {
    setPerson((prevPerson) => ({
      ...prevPerson,
      isAdmin: true,
    }));
  }

  return (
    <>
      <h1>Użytkownicy:</h1>
      <h2>
        {person.name} {person.lastName}
      </h2>
      <h3>{person.isAdmin ? 'Administrator' : 'Użytkownik'}</h3>
      {!person.isAdmin && (
        <button onClick={handleClick}>Daj uprawnienia admina</button>
      )}
    </>
  );
}
