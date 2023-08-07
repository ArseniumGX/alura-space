import style from "./Popular.module.scss";
import popularPhotos from "../../moch/photos-populares.json";

export function Popular() {
  return (
    <aside className={style.popular}>
      <h2>Populares</h2>
      <ul className={style.popular__image}>
        {popularPhotos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.path} alt={photo.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais</button>
    </aside>
  );
}
