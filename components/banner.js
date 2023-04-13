import styles from "../styles/Home.module.css";

const Banner = (props) => {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.header}>Where to move</h1>
      <h2 className={styles.underheader}>Nice locations</h2>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
      <img className={styles.star1} src="../static/star1.png"></img>
      <img className={styles.star2} src="../static/star2.png"></img>
      <img className={styles.star3} src="../static/star3.png"></img>
      <img className={styles.star4} src="../static/star1.png"></img>
    </div>
  );
};

export default Banner;
