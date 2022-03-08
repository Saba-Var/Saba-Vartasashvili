import { Link } from "react-router-dom";
import navRed from "../assets/navRed.svg";
import styles from "./NavigationRed.module.css";
const NavigationRed = (props) => {
  return (
    <Link to={props.to}>
      <img
        src={navRed}
        alt="navigation red icon"
        className={styles.navRed}
        style={{ top: props.top, left: props.left }}
      />
    </Link>
  );
};
export default NavigationRed;
