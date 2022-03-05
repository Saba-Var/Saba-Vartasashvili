import styles from "./button.module.css";
import Next from "../assets/Next.svg";
const NextPage = (props) => {
  return (
    <button>
      <img
        src={Next}
        alt="pagination ball"
        className={styles["pagination__next"]}
        style={{ top: `${props.top}`, left: `${props.left}` }}
      />
    </button>
  );
};

export default NextPage;
