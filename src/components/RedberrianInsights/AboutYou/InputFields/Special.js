import styles from "./Special.module.css";

const Special = () => {
  return (
    <div>
      <label className={styles["special__label"]}>
        Tell us something special
      </label>
      <textarea placeholder="I..." className={styles["special__textarea"]} />
    </div>
  );
};

export default Special;
