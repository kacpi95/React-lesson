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
  const [isShowSection, setIsShowSection] = useState(1);

  return (
    <>
      <h1>Ciekawostki o borsukach</h1>
      <button onClick={() => setIsShowSection(1)}>1</button>
      <button onClick={() => setIsShowSection(2)}>2</button>
      <button onClick={() => setIsShowSection(3)}>3</button>
      {isShowSection === 1 && (
        <section>
          <h2>Ciekawostka 1</h2>
          <p>Borsuki to ssaki z rodziny łasicowatych.</p>
        </section>
      )}
      {isShowSection === 2 && (
        <section>
          <h2>Ciekawostka 2</h2>
          <p>Ich dieta obejmuje owady i rośliny.</p>
        </section>
      )}
      {isShowSection === 3 && (
        <section>
          <h2>Ciekawostka 3</h2>
          <p>Borsuki są aktywne nocą.</p>
        </section>
      )}
    </>
  );
}
