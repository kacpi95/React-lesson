import { ThemedSpan } from '../ThemedSpan/ThemedSpan';

export function Footer() {
  return (
    <footer>
      <ThemedSpan>Uwaga!</ThemedSpan> Co jeśli chcielibyśmy nadpisać wartość
      pobieraną z <ThemedSpan>useContext</ThemedSpan>?
    </footer>
  );
}
