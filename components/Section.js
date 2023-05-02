import styles from "../styles/Section.module.css";
import Card from "./Card";

const Section = (props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.cardBox}>
        {props.array.map((thisObject) => {
          return (
            <Card
              key={thisObject.id}
              id={thisObject.id}
              name={thisObject.name}
              imgUrl={thisObject.imgUrl}
              href={`/` + props.title.toLowerCase() + `/${thisObject.id}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
