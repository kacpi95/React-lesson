export function Animal({ text, img }) {
  const width = 200;
  return (
    <section>
      <h2>{text}</h2>
      <img src={img} alt={text} width={width} />
    </section>
  );
}
