import { Personinfo } from './components/Personinfo';

function App() {
  const joe = { name: 'Joe', age: 21, isAdmin: false, country: 'AU' };
  const jan = { name: 'Jan', age: 43, isAdmin: true, country: 'PL' };
  const juan = { name: 'Juan', age: 15, isAdmin: true };
  const jonas = { name: 'Jonas', age: 18, isAdmin: false, country: 'GER' };

  return (
    <>
      <Personinfo person={joe} />
      <Personinfo person={jan} />
      <Personinfo person={juan} />
      <Personinfo person={jonas} />
    </>
  );
}

export default App;
