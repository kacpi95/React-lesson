export function Personinfo({ person }) {
  return (
    <>
      <address>
        <div>
          <span>
            {person.name} {person.lastName}
          </span>
        </div>
        <div>
          Email: <a href={`mailto:${person.email}`}>{person.email}</a>
        </div>
        {person.tel === undefined ? null : (
          <div>
            Telefon: <a href={`tel:${person.tel}`}>{person.tel}</a>
          </div>
        )}
      </address>
    </>
  );
}
