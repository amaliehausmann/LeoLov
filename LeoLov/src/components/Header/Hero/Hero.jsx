import style from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={style.heroStyling}>
      <h1>
        <span>Leo</span>-Lov
      </h1>
      <h2>Lov og ret kan være et plaster! Hvis du ellers har knaster!</h2>
    </section>
  );
}
