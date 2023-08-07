import style from "./Tags.module.scss";

export function Tags() {
  return (
    <section className={style.tags}>
      <p>Busque por tags:</p>
      <ul className={style.tags__list}>
        <li>Estrelas</li>
        <li>Galáxias</li>
        <li>Luas</li>
        <li>Planetas</li>
      </ul>
    </section>
  );
}
