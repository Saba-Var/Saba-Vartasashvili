import styles from "./DevOrganizeRadio.module.css";
import RadioChecked from "../RadioIcons/RadioChecked";
import RadioUnchecked from "../RadioIcons/RadioUnchecked";

const DevOrganizeRadio = (props) => {
  const data = props.userData;
  return (
    <div className={styles["organizeRadio__container"]}>
      <div className={styles.flex}>
        <p className={styles.header}>Insights</p>
        <p className={styles["question"]}>
          Would you attend Devtalks and maybe also organize your own?
        </p>
        <div className={styles.radioContainer}>
          {data.will_organize_devtalk ? <RadioChecked /> : <RadioUnchecked />}
          <label className={styles.radio}>Yes</label>
        </div>
        <div className={styles.radioContainer}>
          {!data.will_organize_devtalk ? <RadioChecked /> : <RadioUnchecked />}
          <label className={styles.radio}>No</label>
        </div>
      </div>
    </div>
  );
};

export default DevOrganizeRadio;
