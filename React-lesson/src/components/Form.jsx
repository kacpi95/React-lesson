import { useState } from 'react';

const initialReviews = [
  { author: 'Kacper', text: 'Najlepszy film', id: 1 },
  { author: 'Aga', text: 'Nie podobał mi się', id: 2 },
];

export function Form() {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const reviewsElement = reviews.map((el) => (
    <article key={el.id}>
      <strong>{el.author}</strong>
      <p>{el.text}</p>
    </article>
  ));

  function handleClickAdd(e) {
    e.preventDefault();
    const author = inputValue;
    const text = textareaValue;

    setReviews((prevReviews) => {
      return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews];
    });

    setInputValue('');
    setTextareaValue('');
  }

  return (
    <>
      <hr />
      <ul>{reviewsElement}</ul>
      <h2>Dodaj recenzje:</h2>
      <form onSubmit={handleClickAdd}>
        <div>
          <div>
            <label htmlFor='author'>Author:</label>
          </div>
          <input
            type='text'
            id='author'
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>
        <div>
          <div>
            <label htmlFor='text'>Text</label>
          </div>
          <textarea
            name='text'
            id='text'
            value={textareaValue}
            onChange={(event) => {
              setTextareaValue(event.target.value);
            }}
          ></textarea>
        </div>
        <button type='submit' disabled={!inputValue || !textareaValue}>
          Dodaj
        </button>
      </form>
    </>
  );
}
