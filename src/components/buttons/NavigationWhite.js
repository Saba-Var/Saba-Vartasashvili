import navWhite from "../assets/navWhite.svg";
import styles from "./NavigationWhite.module.css";
const NavigationWhite = (props) => {
  return (
    <img
      src={navWhite}
      alt="navigation red icon"
      className={styles.navWhite}
      style={{ top: props.top, left: props.left }}
    />
  );
};
export default NavigationWhite;
