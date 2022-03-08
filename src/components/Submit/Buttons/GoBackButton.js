import styles from "./GoBackButton.module.css";
import { Link } from "react-router-dom";
const GoBackButton = () => {
  return (
    <Link to="/Redberrian-Insights">
      <button className={styles.back}>go back</button>
    </Link>
  );
};

export default GoBackButton;
