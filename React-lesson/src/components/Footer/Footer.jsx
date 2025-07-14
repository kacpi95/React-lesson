import { useContext } from 'react';
import { NameStateContext } from '../NameStateContext/NameStateContext';

export function Footer() {
  const [name, setName] = useContext(NameStateContext);

  return (
    <footer>
      <p>Chciałbyś zmienić swoje imię, {name}?</p>
      <p>Wpisz je poniżej!</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </footer>
  );
}
