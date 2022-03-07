import { Link } from "react-router-dom";
import styles from "./RedberrianInsights.module.css";
import Insights from "./Insights/Insights";
import AboutYou from "./AboutYou/AboutYou";
import Previous from "../assets/Previous.svg";
import Balls from "../assets/aboutBalls.svg";
import NextPage from "../buttons/NextPage";
const RedberrianInsights = () => {
  return (
    <>
      <Insights />
      <AboutYou />
      <Link to="/Covid">
        <button>
          <img
            src={Previous}
            alt="previous icons"
            className={styles["pagination__previous"]}
          />
        </button>
      </Link>
      <img
        src={Balls}
        alt="pagination icons"
        className={styles["pagination__balls"]}
      />
      <NextPage top={"962px"} left={"518px"} />
    </>
  );
};
export default RedberrianInsights;
