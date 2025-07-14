import { useContext } from 'react';
import { NameStateContext } from '../NameStateContext/NameStateContext';

export function Article() {
  const [name] = useContext(NameStateContext);

  return (
    <article>
      <p>
        Witaj {name}, w tym zadaniu przećwiczymy użycie useContext i useState.
      </p>
    </article>
  );
}
