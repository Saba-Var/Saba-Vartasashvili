import styles from "./HadCovidRadio.module.css";
import RadioChecked from "../RadioIcons/RadioChecked";
import RadioUnchecked from "../RadioIcons/RadioUnchecked";

const HadCovidRadio = (props) => {
  const data = props.userData;
  return (
    <div className={styles["hadCovid__container"]}>
      <div className={styles.flex}>
        <p className={styles["had__Covid"]}>Did you have covid 19?</p>
        <div className={styles.radioContainer}>
          {data.had_covid ? <RadioChecked /> : <RadioUnchecked />}
          <label className={styles.radio}>Yes</label>
        </div>
        <div className={styles.radioContainer}>
          {!data.had_covid ? <RadioChecked /> : <RadioUnchecked />}
          <label className={styles.radio}>No</label>
        </div>
      </div>
    </div>
  );
};

export default HadCovidRadio;
