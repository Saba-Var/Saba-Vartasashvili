import About from "./About/About";
import Skills from "./Skills/Skill";
import styles from "./TechnicalSkillset.module.css";
const TechnicalSkillset = () => {
  return (
    <div className={styles.flex}>
      <Skills />
      <About />
    </div>
  );
};
export default TechnicalSkillset;
