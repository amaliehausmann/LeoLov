import style from "./Nav.module.scss";
export function Nav() {
  return (
    <nav className={style.navStyling}>
      <div>
        <ul>
          <li>
            <a href="#hjem">Hjem</a>
          </li>
          <li>|</li>
          <li>
            <a href="#advokater">Advokaterne</a>
          </li>
          <li>|</li>
          <li>
            <a href="#about">Om LeoLov</a>
          </li>
          <li>|</li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>

        <h3>
          <span>Leo-</span>Lov
        </h3>
      </div>
      <div className={style.divStyling}></div>
    </nav>
  );
}
