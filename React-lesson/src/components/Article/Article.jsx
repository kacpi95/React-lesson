import { useContext } from 'react';
import { NameContext } from '../NameContext/NameContext';
import { ColorContext } from '../ColorContext/ColorContext';

export function Article() {
  const name = useContext(NameContext);
  const color = useContext(ColorContext);

  return (
    <article>
      <p>
        <span style={{ color }}>{name}</span>, w tym krótkim zadaniu
        przećwiczymy użycie useContext.
      </p>
    </article>
  );
}
