import { useEffect } from 'react';

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  console.log(`${hours}:${minutes}:${seconds}`);
}

export function Person() {
  useEffect(() => {
    console.log('Odliczanie');
    const interval = setInterval(() => {
      getCurrentTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>Jan Kowalski</h2>;
}
