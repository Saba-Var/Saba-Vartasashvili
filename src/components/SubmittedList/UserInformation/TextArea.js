import styles from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <>
      <p className={styles.header}>{props.header}</p>
      <textarea
        className={styles["textArea__Container"]}
        style={{ height: props.height }}
        disabled
      >
        {props.text === "NAN" ? "No information" : props.text}
      </textarea>
    </>
  );
};

export default TextArea;
