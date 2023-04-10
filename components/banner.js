import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.header}>Where to move</h1>
      <h2 className={styles.underheader}>Nice locations</h2>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
