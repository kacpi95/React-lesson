import { getAge } from '../getAge/getAge';
import { memo } from 'react';

function Person({ person, children }) {
  return (
    <>
      <h2>
        {person.name}, wiek: {getAge(person.yearOfBirth)}
      </h2>
      {children}
    </>
  );
}

export const PersonMemo = memo(Person);
