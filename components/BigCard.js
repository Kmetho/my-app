import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dynamic.module.css";

const BigCard = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Image
          priority
          className={styles.pic}
          src={props.imgUrl}
          width="780"
          height="480"
          alt={props.name}
        />

        <div className={styles.bigCard + " glass"}>
          <h3 className={styles.name}>{props.name}</h3>
          <p className={styles.address}>{props.address}</p>
        </div>
      </div>
      <Link href="/">
        <p className={styles.return + " glass glass-hover"}>← return</p>
      </Link>
    </>
  );
};

export default BigCard;
