import styles from "./Welcome.module.css";
import Stars from "../assets/stars.png";
import additionalStars from "../assets/additionalStars.png";
import Rocketman from "../assets/rocketman.png";
const Welcome = () => {
  return (
    <div className={styles["welcome__container"]}>
      <img src={Stars} alt="sky with stars" />
      <img
        src={additionalStars}
        alt="stars group"
        className={styles.additionalStars}
      />
      <img src={Rocketman} alt="astrounaut" className={styles.rocketman} />
      <h2 className={styles["welcome__text"]}>Welcome Rocketeer !</h2>
      <button className={styles["button__start"]}>Start Questionnaire</button>
      <button className={styles["button__submitted"]}>
        Submitted Applications
      </button>
    </div>
  );
};
export default Welcome;
