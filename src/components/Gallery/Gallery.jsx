import style from "./Gallery.module.scss";
import { Tags } from "./Tags/Tags";
import photos from "../../moch/photos.json";
import { Cards } from "./Cards/Cards";

export function Gallery() {
  return (
    <section className={style.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards photos={photos} />
    </section>
  );
}
