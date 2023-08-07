import style from "./Cards.module.scss";
import { Card } from "./Card/Card";

export function Cards({ photos }) {
  return (
    <ul className={style.cards}>
      {photos.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </ul>
  );
}
