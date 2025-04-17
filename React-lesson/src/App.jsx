import { WrapperSection } from './components/WrapperSection';

function App() {
  return (
    <>
      {' '}
      <h1>Fakty o kapibarach:</h1>
      <WrapperSection>
        <span>Kapibary są największymi gryzoniami na świecie.</span>
      </WrapperSection>
      <a href='https://youtu.be/dQw4w9WgXcQ'>
        Sprawdź najlepszą stronę o kapibarach!
      </a>
      <WrapperSection>
        <p>
          Kapibary są doskonałymi pływakami i świetnie radzą sobie w wodzie.
        </p>
      </WrapperSection>
    </>
  );
}

export default App;
