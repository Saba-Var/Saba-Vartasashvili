import styles from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <>
      <p className={styles.header}>{props.header}</p>
      <div
        className={styles["textArea__Container"]}
        style={{ height: props.height }}
      >
        <p className={styles["textArea__text"]}>
          {props.text === "NAN" ? "No information" : props.text}
        </p>
      </div>
    </>
  );
};

export default TextArea;
