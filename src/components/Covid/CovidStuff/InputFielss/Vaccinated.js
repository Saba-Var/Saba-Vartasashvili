import styles from "./Vaccinated.module.css";
const Vaccinated = () => {
  return (
    <>
      <p className={styles.header}>Have you been vaccinated?</p>
      <label className={styles.yes}>Yes</label>
      <label className={styles.no}>No</label>
      <input
        className={styles.radio1}
        type="radio"
        name="vaccinated"
        value="Yes"
      />
      <input
        className={styles.radio2}
        type="radio"
        name="vaccinated"
        value="No"
      />
    </>
  );
};
export default Vaccinated;
