import logo from "/assets/logo.png";
import search from "/assets/search.png";
import style from "./Header.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo alura space" />
      <div className={style.header__container}>
        <input
          className={style.header__container__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="Lupa de pesquisa" />
      </div>
    </header>
  );
}
