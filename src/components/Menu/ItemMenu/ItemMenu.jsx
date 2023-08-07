import style from "./ItemMenu.module.scss";

export function ItemMenu({ image, alt, location = "/", text }) {
  return (
    <>
      <li className={style.item}>
        <img src={image} alt={alt} />
        <a href={location} target="_parent">
          {text}
        </a>
      </li>
    </>
  );
}
