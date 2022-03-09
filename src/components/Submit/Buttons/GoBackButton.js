import styles from "./GoBackButton.module.css";
import { Link } from "react-router-dom";
const GoBackButton = (props) => {
  return (
    <Link to={props.to}>
      <button
        style={{ top: props.top, left: props.left }}
        className={styles.back}
      >
        go back
      </button>
    </Link>
  );
};

export default GoBackButton;
