import { home, maisCurtidas, maisVistas, novas, surpreendaMe } from "./icons";
import style from "./Menu.module.scss";
import { ItemMenu } from "./ItemMenu/ItemMenu";

export function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__list}>
        <ItemMenu image={home} alt="Ícone home" text="Ínicio" />
        <ItemMenu
          image={maisVistas}
          alt="Ícone mais vistas"
          text="Mais vistas"
        />
        <ItemMenu
          image={maisCurtidas}
          alt="Ícone mais curtidas"
          text="Mais curtidas"
        />
        <ItemMenu image={novas} alt="Ícone novas" text="Novas" />
        <ItemMenu
          image={surpreendaMe}
          alt="Ícone supreenda-me"
          text="Surpreenda-me"
        />
      </ul>
    </nav>
  );
}
