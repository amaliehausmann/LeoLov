import style from "./Team.module.scss";

export function Team(props) {
  return (
    <div className={style.teamStyle}>
      <img src={`../src/assets/${props.image}`} />
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </div>
  );
}
