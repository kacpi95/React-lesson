import { getAge } from '../getAge/getAge';
import { memo } from 'react';

export const Person = memo(function Person({ person }) {
  <h2>
    {person.name}, wiek: {getAge(person.yearOfBirth)}
  </h2>;
});
