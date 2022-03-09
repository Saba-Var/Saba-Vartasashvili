import styles from "./Vaccinated.module.css";
import RadioChecked from "../RadioIcons/RadioChecked";
import RadioUnchecked from "../RadioIcons/RadioUnchecked";

const Vaccinated = (props) => {
  const data = props.userData;

  return (
    <div className={styles["vaccinated__container"]}>
      <div className={styles.flex}>
        <p className={styles["had__vaccinated"]}>Have you been vaccinated?</p>
        <div className={styles.radioContainer}>
          {data.vaccinated ? <RadioChecked /> : <RadioUnchecked />}
          <label className={styles.radio}>Yes</label>
        </div>
        <div className={styles.radioContainer}>
          {!data.vaccinated ? <RadioChecked /> : <RadioUnchecked />}
          <label className={styles.radio}>No</label>
        </div>
      </div>
    </div>
  );
};

export default Vaccinated;
