import styles from "./button.module.css";
import Next from "../assets/Next.svg";
const NextPage = (props) => {
  return (
    <button>
      <img
        src={Next}
        alt="pagination ball"
        className={styles["pagination__next"]}
      />
    </button>
  );
};

export default NextPage;
