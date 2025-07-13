import { useContext } from 'react';
import { NameContext } from '../NameContext/NameContext';

export function Article() {
  const name = useContext(NameContext);

  return (
    <article>
      <p>{name}, w tym krótkim zadaniu przećwiczymy użycie useContext.</p>
    </article>
  );
}
