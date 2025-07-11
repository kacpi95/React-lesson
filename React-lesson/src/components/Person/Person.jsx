import { getAge } from '../getAge/getAge';
import { memo } from 'react';

function Person({ person }) {
  return (
    <h2>
      {person.name}, wiek: {getAge(person.yearOfBirth)}
    </h2>
  );
}

export const PersonMemo = memo(Person);
