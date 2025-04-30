import { useState } from 'react';

export function Plot() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShwon] = useState(true);

  function handleShowSpoilerCLick() {
    setIsSpoilerShown(true);
    setIsWarningShwon(false);
  }
  function handleCloseWarningClick() {
    setIsWarningShwon(false);
  }
  return (
    <>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga! Opis fabuły zawiera spoilery!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {isSpoilerShown ? (
        <p>Valder okazuje sie być ojcem Luka.</p>
      ) : (
        <button onClick={handleShowSpoilerCLick}>Pokaż spoiler</button>
      )}
    </>
  );
}
