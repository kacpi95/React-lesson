import { useState } from 'react';

export function LikesCounter() {
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  return (
    <>
      <h2>Liczba polubień: {numberOfLikes}</h2>
      <button onClick={() => setNumberOfLikes(numberOfLikes + 1)}>
        Lubię to!
      </button>
      <button onClick={() => setNumberOfLikes(numberOfLikes + 3)}>
        Kocham to!
      </button>
    </>
  );
}
