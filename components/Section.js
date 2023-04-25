import createCard from "./createCard";
import styles from "../styles/Section.module.css";

const Section = (props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.cardBox}>{props.array.map(createCard)}</div>
    </section>
  );
};

export default Section;
