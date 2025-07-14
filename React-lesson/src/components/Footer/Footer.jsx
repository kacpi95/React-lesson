import { useContext } from 'react';
import { NameContext, SetNameContext } from '../NameStateContext/NameStateContext';

export function Footer() {
  const [name] = useContext(NameContext);
  const [setName] = useContext(SetNameContext);

  return (
    <footer>
      <p>Chciałbyś zmienić swoje imię, {name}?</p>
      <p>Wpisz je poniżej!</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </footer>
  );
}
