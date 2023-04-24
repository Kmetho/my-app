import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <div className={styles.card}>
        <h3 className={styles.name}>{props.name}</h3>
        <Image
          className={styles.pic}
          src={props.imgUrl}
          width="260"
          height="160"
          alt={props.name}
        />
      </div>
    </Link>
  );
};

export default Card;
