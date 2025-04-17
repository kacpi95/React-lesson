export function Personinfo({ person }) {
  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.isAdmin == true ? 'Administrator' : 'Użytkownik'}</h3>
      <hr />
    </>
  );
}
