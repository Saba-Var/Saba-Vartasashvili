import styles from "./CostumPlaceHolder.module.css";

const CostumPlaceHolder = (props) => {
  return (
    <p className={styles["placeholder__text"]} style={{ top: `${props.top}` }}>
      Date
    </p>
  );
};

export default CostumPlaceHolder;
