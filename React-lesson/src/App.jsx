import { PlayerInfo } from './components/PlayerInfo';

function App() {
  const rl9 = { name: 'Robert Lewandowski', goalInPolishLeague: 32 };
  const cr7 = { name: 'Cristiano Ronaldo', goalInPolishLeague: 0 };
  const lm10 = { name: 'Leo Messi', goalInPolishLeague: 0 };

  return (
    <>
      <h1>Najlepsi piłkarze:</h1>
      <PlayerInfo person={rl9} />
      <PlayerInfo person={cr7} />
      <PlayerInfo person={lm10} />
    </>
  );
}

export default App;
