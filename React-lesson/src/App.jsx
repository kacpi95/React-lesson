function App() {
  return (
    <>
      <h1>List eventów</h1>

      <h2>click</h2>
      <button onClick={() => alert('onClick')}>Click</button>
      <hr />

      <h2>keydown</h2>
      {/* Dodaj obsługę wciśnięcia klawisza klawiatury i wyświetl alert */}
      <input type='number' onKeyDown={() => alert('onKeyDown')} />
      <hr />

      <h2>double click</h2>
      {/* Dodaj obsługę podwójnego kliknięcia i wyświetl alert */}
      <button onDoubleClick={() => alert('doubleClick')}>Double click</button>
      <hr />

      <h2>change</h2>
      {/* Dodaj obsługę zmiany wartości selecta i wyświetl alert */}
      <select onChange={() => alert('change')}>
        <option value='A'>OptionA</option>
        <option value='B'>OptionB</option>
      </select>
      <hr />

      <h2>blur</h2>
      {/* Dodaj obsługę blura i wyświetl alert */}
      <input onBlur={() => alert('blur')} />
      <hr />
    </>
  );
}

export default App;
