import styles from "./button.module.css";
import Next from "../assets/Next.svg";
import { Link } from "react-router-dom";
const NextPageLink = (props) => {
  return (
    <Link to={`${props.path}`}>
      <button>
        <img
          src={Next}
          alt="pagination ball"
          className={styles["pagination__next"]}
        />
      </button>
    </Link>
  );
};

export default NextPageLink;
