import styles from "../styles/Home.module.css";

const Banner = (props) => {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.header}>
        It’s New Years.
        <br />
        At the corner of the village,
        <br />
        Ume blossoms.
      </h1>
      <h2 className={styles.underheader}>Kobayashi Issa</h2>
      <button
        className={styles.button + " underline"}
        onClick={props.handleOnClick}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
