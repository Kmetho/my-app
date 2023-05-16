import styles from "../styles/Home.module.css";

const Banner = (props) => {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.header}>༺☆ pretty flowers ☆༻</h1>
      <h2 className={styles.underheader}>
        {" "}
        . ★⋆. ࿐࿔ i love them ･ﾟ:*
      </h2>
      <button
        className={styles.button + " glass glass-hover"}
        onClick={props.handleOnClick}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
