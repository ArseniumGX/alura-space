import style from "./Gallery.module.scss";
import { Tags } from "./Tags/Tags";
import photos from "../../moch/photos.json";
import { Cards } from "./Cards/Cards";
import { useEffect, useState } from "react";

export function Gallery() {
  const [items, setItems] = useState(photos);

  const tags = [...new Set(photos.map((photo) => photo.tag))];

  const photosFilter = (tag) =>
    setItems(photos.filter((photo) => photo.tag === tag));

  return (
    <section className={style.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} photosFilter={photosFilter} setItems={setItems} />
      <Cards photos={items} />
    </section>
  );
}
