import styles from "./WorkType.module.css";
const WorkType = () => {
  return (
    <>
      <p className={styles["work__type__office"]}>
        how would you prefer to work?
      </p>
      <label className={styles.office}>From Sairme Office</label>
      <label className={styles.home}>From Home</label>
      <label className={styles.hybrid}>Hybrid</label>
      <input
        className={styles.radio1}
        type="radio"
        name="work"
        value="From Sairme Office"
      />
      <input
        className={styles.radio2}
        type="radio"
        name="work"
        value="From Home"
      />
      <input
        className={styles.radio3}
        type="radio"
        name="work"
        value="Hybrid"
      />
    </>
  );
};
export default WorkType;
