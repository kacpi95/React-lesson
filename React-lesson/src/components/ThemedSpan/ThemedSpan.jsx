import { useContext } from 'react';
import { ColorContext } from '../ColorContext/ColorContext';

export function ThemedSpan({ children }) {
  const color = useContext(ColorContext);

  return (
    <span style={{ color }}>
      <i>{children}</i>
    </span>
  );
}
