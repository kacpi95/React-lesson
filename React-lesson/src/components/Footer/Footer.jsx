import { useContext } from 'react';
import { NameContext } from '../NameContext/NameContext';

export function Footer() {
  const name = useContext(NameContext);

  return (
    <footer>
      <p>Masz pytania {name}? Pisz do nas na mail:</p>
      <a href='mailto:kontakt@jakzaczacprogramowac.pl'>
        kontakt@jakzaczacprogramowac.pl
      </a>
    </footer>
  );
}
