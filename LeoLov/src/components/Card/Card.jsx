import style from "./Card.module.scss";
export function Card(props) {
  return (
    <div className={style.cardStyle}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
