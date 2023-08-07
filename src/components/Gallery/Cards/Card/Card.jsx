import style from "./Card.module.scss";
import { BsArrowsAngleExpand, BsHeart } from "react-icons/bs";

export function Card({ photo }) {
  return (
    <li className={style.card}>
      <img
        className={style.card__image}
        src={photo.imagem}
        alt={`Foto ${photo.titulo}`}
      />
      <p className={style.card__description}>{photo.titulo}</p>
      <div className={style.card__footer}>
        <p>{photo.creditos}</p>
        <span>
          <BsHeart className={style.card__footer__icons} />
          <BsArrowsAngleExpand className={style.card__footer__icons} />
        </span>
      </div>
    </li>
  );
}
