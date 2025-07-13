import { ThemedSpan } from '../ThemedSpan/ThemedSpan';

export function Article() {
  return (
    <article>
      <p>
        Dzięki <ThemedSpan>useContext</ThemedSpan> możemy przekazać tę samą
        wartość w wiele miejsc jednocześnie.
      </p>
    </article>
  );
}
