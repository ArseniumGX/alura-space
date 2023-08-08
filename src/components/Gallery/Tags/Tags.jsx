import style from "./Tags.module.scss";
import photos from "../../../moch/photos.json";

export function Tags({ tags, photosFilter, setItems }) {
  return (
    <section className={style.tags}>
      <p>Filtre por tags:</p>
      <ul className={style.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => photosFilter(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItems(photos)}>Todas</li>
      </ul>
    </section>
  );
}
