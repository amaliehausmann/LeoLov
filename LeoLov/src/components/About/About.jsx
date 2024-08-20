import style from "./About.module.scss";

export function About(props) {
  return (
    <section className={style.aboutStyling} id="about">
      {props.children}
    </section>
  );
}
