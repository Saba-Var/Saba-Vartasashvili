import styles from "./Skills.module.css";
import SkillsForm from "./SkillsForm";
const Skills = (props) => {
  return (
    <div className={styles["skills__container"]}>
      <h2 className={styles["header__text"]}>Tell us about your skills</h2>
      <SkillsForm />
    </div>
  );
};
export default Skills;
