import styles from "../styles/Section.module.css";
import Card from "./Card";

// function createCard(thisObject) {
//   return (
//     <Card
//       key={thisObject.id}
//       id={thisObject.id}
//       name={thisObject.name}
//       imgUrl={thisObject.imgUrl}
//       href={thisObject.href}
//     />
//   );
// }

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
              href={thisObject.href}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
