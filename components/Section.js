import styles from "../styles/Section.module.css";
import Card from "./Card";

const Section = (props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.cardBox}>
        {props.data.map((thisObject) => {
          return (
            <Card
              key={thisObject.fsq_id}
              id={thisObject.fsq_id}
              name={thisObject.name}
              imgUrl={
                thisObject.imgUrl ||
                "https://images.unsplash.com/photo-1503954230032-c850298b9df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              href={`/flower` + `/${thisObject.fsq_id}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
