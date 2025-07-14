import { useContext } from 'react';
import { NameContext } from '../NameStateContext/NameStateContext';

export function Article() {
  const [name] = useContext(NameContext);

  return (
    <article>
      <p>
        Witaj {name}, w tym zadaniu przećwiczymy użycie useContext i useState.
      </p>
    </article>
  );
}
