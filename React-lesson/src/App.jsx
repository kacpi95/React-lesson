import { Personinfo } from './components/Personinfo';

function App() {
  const jan = {
    name: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.k@gmail,com',
    tel: '+48 554 245 264',
  };
  const kacper = {
    name: 'Kacper',
    lastName: 'Kowalski',
    email: 'Kacper@gmail,com',
    tel: '+48 111 245 264',
  };
  const maciek = {
    name: 'Maciek',
    lastName: 'Nowak',
    email: 'maciek.n@gmail,com',
  };
  return (
    <>
      <Personinfo person={jan} />
      <br />
      <Personinfo person={kacper} />
      <br />
      <Personinfo person={maciek} />
    </>
  );
}

export default App;
