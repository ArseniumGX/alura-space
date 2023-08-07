import { Fragment } from "react";
import { Header, Menu, Banner } from "../../components";
import style from "./Innitial.module.scss";

export function Innitial() {
  return (
    <Fragment>
      <Header />
      <main>
        <section className={style.main}>
          <Menu />
          <Banner />
        </section>
      </main>
    </Fragment>
  );
}
