import styles from "./WorkRadio.module.css";
import RadioChecked from "../RadioIcons/RadioChecked";
import RadioUnchecked from "../RadioIcons/RadioUnchecked";

const WorkRadio = (props) => {
  const data = props.userData;

  return (
    <div className={styles["Covid__container"]}>
      <div className={styles.flex}>
        <p className={styles.header}>CovidSituation</p>
        <p className={styles["work__type__office"]}>
          how would you prefer to work?
        </p>
        <div className={styles.radioContainer}>
          {data.work_preference === "from_office" ? (
            <RadioChecked />
          ) : (
            <RadioUnchecked />
          )}
          <label className={styles.radio}>From Sairme Office</label>
        </div>
        <div className={styles.radioContainer}>
          {data.work_preference === "from_home" ? (
            <RadioChecked />
          ) : (
            <RadioUnchecked />
          )}
          <label className={styles.radio}>From Home</label>
        </div>
        <div className={styles.radioContainer}>
          {data.work_preference === "hybrid" ? (
            <RadioChecked />
          ) : (
            <RadioUnchecked />
          )}
          <label className={styles.radio}>Hybrid</label>
        </div>
      </div>
    </div>
  );
};

export default WorkRadio;
