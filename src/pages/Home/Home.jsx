import { Fragment } from "react";
import {
  Header,
  Menu,
  Banner,
  Footer,
  Gallery,
  Popular
} from "../../components";
import style from "./Home.module.scss";

export function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <section className={style.main}>
          <Menu />
          <Banner />
        </section>
        <div className={style.gallery}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
