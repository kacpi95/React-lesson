import { useContext } from 'react';
import { NameContext } from '../NameContext/NameContext';
import { ColorContext } from '../ColorContext/ColorContext';

export function Footer() {
  const name = useContext(NameContext);
  const color = useContext(ColorContext);

  return (
    <footer>
      <p>
        Masz pytania <span style={{ color }}>{name}</span>? Pisz do nas na mail:
      </p>
      <a href='mailto:kontakt@jakzaczacprogramowac.pl'>
        kontakt@jakzaczacprogramowac.pl
      </a>
    </footer>
  );
}
