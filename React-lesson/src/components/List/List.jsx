import { useState, useEffect } from 'react';

export function List({ onSuccess }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('Request...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        onSuccess();
      });
  }, [onSuccess]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username}, {user.email}
        </li>
      ))}
    </ul>
  );
}
