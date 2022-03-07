import styles from "./DevtalksRadio.module.css";
const DevtalksRadio = () => {
  return (
    <div>
      <label className={styles["devtalks__question"]}>
        Would you attend Devtalks and maybe also organize your own?
      </label>
      <input
        className={styles["dev_radio1"]}
        type="radio"
        name="devtalks"
        value="YesDev"
        id="YesDev"
      />
      <p className={styles["option__yes"]}>Yes</p>
      <input
        className={styles["dev_radio2"]}
        type="radio"
        name="devtalks"
        value="NoDev"
        id="NoDev"
      />
      <p className={styles["option__no"]}>No</p>
    </div>
  );
};
export default DevtalksRadio;
