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
  const [activeImg, setActiveImg] = useState(0);

  function handlePreviousClick() {
    setActiveImg((prevActiveImg) => {
      return prevActiveImg === 0 ? 2 : prevActiveImg - 1;
    });
  }

  function handleNextClick() {
    setActiveImg((prevActiveImg) => {
      return prevActiveImg === 2 ? 0 : prevActiveImg + 1;
    });
  }
  return (
    <>
      <h1>Slider</h1>
      <button onClick={handlePreviousClick}>Poprzednie</button>
      <button onClick={handleNextClick}>Następne</button>
      <div>
        {activeImg === 0 && (
          <img src='https://zrozumiecreact.pl/dog.jpg' width='200' />
        )}
        {activeImg === 1 && (
          <img src='https://zrozumiecreact.pl/cat.jpg' width='200' />
        )}
        {activeImg === 2 && (
          <img src='https://zrozumiecreact.pl/duck.jpg' width='200' />
        )}
      </div>
    </>
  );
}
