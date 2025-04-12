export function Animal({ text, img, imgWidth = 200 }) {
  return (
    <section>
      <h2>{text}</h2>
      <img src={img} alt={text} width={imgWidth} />
    </section>
  );
}
