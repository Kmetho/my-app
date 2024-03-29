import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dynamic.module.css";
import { useState } from "react";

const BigCard = (props) => {
  const [count, setCount] = useState(0);

  function handleUpvote() {
    setCount(count + 1);
  }

  function handleDownvote() {
    setCount(count - 1);
  }
  return (
    <div className={styles.wrapper}>
      <Image
        priority
        className={styles.pic}
        src={
          props.imgUrl}
        width="780"
        height="480"
        // alt={props.name}
        alt="..."
      />

      <div className={styles.bigCard + " glass"}>
        <Link href="/">
          <p className={styles.return}>← return</p>
        </Link>

        <h3 className={styles.name}>{props.name}</h3>

        <p className={styles.address}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="-5 -5 960 960"
            width="30"
          >
            <path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z" />
          </svg>{" "}
          {props.address}
        </p>

        <div className={styles.ranking}>
          <button
            className={styles.button + " underline"}
            onClick={handleUpvote}
          >
            Upvote
          </button>
          <p className={styles.count}>{count}</p>
          <button
            className={styles.button + " underline"}
            onClick={handleDownvote}
          >
            Downvote
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
