export function WrapperSection(props) {
  return (
    <>
      <section>
        <hr />
        {props.children}
        <hr />
      </section>
    </>
  );
}
