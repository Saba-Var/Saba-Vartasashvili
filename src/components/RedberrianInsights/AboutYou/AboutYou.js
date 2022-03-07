import styles from "./AboutYou.module.css";
import DevtalksRadio from "./InputFields/DevtalksRadio";
import DevTalksTopic from "./InputFields/DevtalksTopic";
import Special from "./InputFields/Special";
const AboutYou = () => {
  return (
    <>
      <h2 className={styles["about__header"]}>What about you?</h2>
      <form>
        <DevtalksRadio />
        <DevTalksTopic />
        <Special />
      </form>
    </>
  );
};

export default AboutYou;
