import { useState } from 'react';
import styles from './styles/global.module.scss';
import Header from './components/header/header';
import Form from './components/form/Form';
import Lists from './components/lists/Lists';

function App() {
  const [form, setForm] = useState(false);
  const [isValue, setValue] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'uczyć sie', done: false },
    { id: 2, name: 'Robić pranie', done: false },
  ]);
  const handleAddInput = () => {
    setForm((prev) => !prev);
  };
  const handleAddValue = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: isValue,
      done: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setValue('');
  };
  const handleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
  const handleRemove = (itemToRemove) => {
    setTasks((prev) => prev.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <main>
      <div className={styles.container}>
        <Header tasks={tasks} handleAddInput={handleAddInput} />
        <Form
          form={form}
          isValue={isValue}
          setValue={setValue}
          handleAddValue={handleAddValue}
        />
        <div>
          <Lists
            tasks={tasks}
            handleDone={handleDone}
            handleRemove={handleRemove}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
