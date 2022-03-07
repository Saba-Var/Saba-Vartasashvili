import { Link } from "react-router-dom";
import Balls from "../../assets/aboutBalls.svg";
import Previous from "../../assets/Previous.svg";
import styles from "./AboutYou.module.css";
import DevtalksRadio from "./InputFields/DevtalksRadio";
import DevTalksTopic from "./InputFields/DevtalksTopic";
import Special from "./InputFields/Special";
import NextPage from "../../buttons/NextPage";
const AboutYou = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className={styles["about__header"]}>What about you?</h2>
      <form onSubmit={submitHandler}>
        <DevtalksRadio />
        <DevTalksTopic />
        <Special />
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
      </form>
    </>
  );
};

export default AboutYou;
