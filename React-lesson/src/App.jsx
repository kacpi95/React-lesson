function App() {
  function handleClick(score) {
    if (score == 5) {
      alert('Bardzo dziękujemy :)');
    } else if (score > 2) {
      alert('Dziękujemy');
    } else {
      alert('Przykro nam');
    }
  }
  return (
    <>
      <h1>Oceń usługę:</h1>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
    </>
  );
}

export default App;
