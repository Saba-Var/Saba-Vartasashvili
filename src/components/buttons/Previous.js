import styles from "./Previous.module.css";
import { Link } from "react-router-dom";
import PreviousButton from "../assets/Previous.svg";
const Previous = (props) => {
  return (
    <Link to={props.to}>
      <img
        className={styles.btnPrev}
        src={PreviousButton}
        alt="pagination button"
        style={{ top: props.top, left: props.left }}
      />
    </Link>
  );
};

export default Previous;
