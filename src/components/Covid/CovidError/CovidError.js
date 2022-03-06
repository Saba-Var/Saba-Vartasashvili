import styles from "./CovidErros.module.css";

const CovidError = (props) => {
  return (
    <p className={styles["error__work"]} style={{ top: `${props.top}` }}>
      {props.text}
    </p>
  );
};

export default CovidError;
