import style from "./Footer.module.scss";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export function Footer() {
  return (
    <footer>
      <ul className={style.socials}>
        <li className={style.socials__itens}>
          <a href="https://facebook.com.com/arseniumgx">
            <BsFacebook />
          </a>
        </li>
        <li className={style.socials__itens}>
          <a href="https://twitter.com/arseniumgx">
            <BsTwitter />
          </a>
        </li>
        <li className={style.socials__itens}>
          <a href="https://linkedin.com/in/arseniumgx">
            <BsLinkedin />
          </a>
        </li>
        <li className={style.socials__itens}>
          <a href="https://github.com/arseniumgx">
            <BsGithub />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por José &quot;ArseniumGX&quot; Macedo</p>
      <p>
        Powered by{" "}
        <a
          href="https://alura.com.br"
          target="_blank"
          title="Alura | Cursos online de Tecnologia"
          rel="noreferrer"
        >
          Alura
        </a>
      </p>
    </footer>
  );
}
