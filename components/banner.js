import styles from "../styles/Home.module.css";

const Banner = (props) => {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.header}>༺☆fun activieties☆༻</h1>
      <h2 className={styles.underheader}> . ★⋆. ࿐࿔ Diane, I can't decide what to do･ﾟ:*</h2>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
