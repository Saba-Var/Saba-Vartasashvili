import styles from "./SubmitButton.module.css";

const SubmitButton = () => {
  return (
    <div className={styles["button-container-1"]}>
      <span className={styles.text}>Submit</span>
      <button id="work" type="button" name="Hover">
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
