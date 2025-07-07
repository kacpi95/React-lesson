// import { useState } from 'react';
// import styles from './styles/global.module.scss';
// import Header from './components/header/header';
// import Form from './components/form/Form';
// import Lists from './components/lists/Lists';

// function App() {
//   const [form, setForm] = useState(false);
//   const [isValue, setValue] = useState('');
//   const [tasks, setTasks] = useState([
//     { id: 1, name: 'uczyć sie', done: false },
//     { id: 2, name: 'Robić pranie', done: false },
//   ]);
//   const handleAddInput = () => {
//     setForm((prev) => !prev);
//   };
//   const handleAddValue = (e) => {
//     e.preventDefault();
//     const newTask = {
//       id: Date.now(),
//       name: isValue,
//       done: false,
//     };

//     setTasks((prev) => [newTask, ...prev]);
//     setValue('');
//   };
//   const handleDone = (id) => {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id ? { ...task, done: !task.done } : task
//       )
//     );
//   };
//   const handleRemove = (itemToRemove) => {
//     setTasks((prev) => prev.filter((item) => item.id !== itemToRemove.id));
//   };

//   return (
//     <main>
//       <div className={styles.container}>
//         <Header tasks={tasks} handleAddInput={handleAddInput} />
//         <Form
//           form={form}
//           isValue={isValue}
//           setValue={setValue}
//           handleAddValue={handleAddValue}
//         />
//         <div>
//           <Lists
//             tasks={tasks}
//             handleDone={handleDone}
//             handleRemove={handleRemove}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// import { useState, useEffect } from 'react';

// function App() {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then((res) => res.json())
//       .then((res) => setUser(res));
//   }, []);

//   function handleChange(id) {
//     const target = id.target.value;
//     fetch(`https://jsonplaceholder.typicode.com/users/${target}`).then((res) =>
//       res.json().then((res) => setUser(res))
//     );
//   }

//   return (
//     <>
//       <h1>Dane osobowe </h1>
//       <select onChange={handleChange}>
//         <option value='1'>Użytkownik 1</option>
//         <option value='2'>Użytkownik 2</option>
//         <option value='3'>Użytkownik 3</option>
//         <option value='4'>Użytkownik 4</option>
//         <option value='5'>Użytkownik 5</option>
//       </select>
//       <h2>Username: {user.username}</h2>
//       <h2>Email: {user.email}</h2>
//       <h2>Miasto: {user?.address?.city}</h2>
//     </>
//   );
// }
// export default App;

// import { useState, useEffect } from 'react';

// export default function App() {
//   const [user, setUser] = useState({});
//   const [activeUserIndex, setActiveUserIndex] = useState('3');

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${activeUserIndex}`)
//       .then((res) => res.json())
//       .then((res) => setUser(res));
//   }, [activeUserIndex]);

//   return (
//     <>
//       <h1>Dane osobowe </h1>
//       <select
//         value={activeUserIndex}
//         onChange={(e) => setActiveUserIndex(e.target.value)}
//       >
//         <option value='1'>Użytkownik 1</option>
//         <option value='2'>Użytkownik 2</option>
//         <option value='3'>Użytkownik 3</option>
//         <option value='4'>Użytkownik 4</option>
//         <option value='5'>Użytkownik 5</option>
//       </select>
//       <h2>Username: {user.username}</h2>
//       <h2>Email: {user.email}</h2>
//       <h2>Miasto: {user?.address?.city}</h2>
//     </>
//   );
// }

import { useState } from 'react';
import { Person } from './components/Person/Person';

export default function App() {
  const [isSectionOpened, setIsSectionOpened] = useState(true);

  function handleClick() {
    return setIsSectionOpened((prevIsSectionOpened) => !prevIsSectionOpened);
  }

  return (
    <>
      <h1>Odliczanie w consoli</h1>
      <button onClick={handleClick}>
        {isSectionOpened ? 'Schowaj' : 'Pokaż'}
      </button>
      {isSectionOpened && <Person />}
    </>
  );
}
