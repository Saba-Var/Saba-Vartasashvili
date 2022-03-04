import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <p className={styles["error__name"]} style={{ top: `${props.top}` }}>
      {props.text}
    </p>
  );
};

export default Error;
