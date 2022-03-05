import styles from "./SkillsForm.module.css";
import DropdownArrow from "../../assets/DrowpdownArrow.svg";
import ballsSkills from "../../assets/balls-Skills.svg";
import AddButton from "./AddButton";
const SkillsForm = (props) => {
  return (
    <div>
      <img
        src={DropdownArrow}
        alt="dropdown arrow"
        className={styles["dropdown__arrow"]}
      />
      <form className={styles.form}>
        <select>
          <option value="Skills">Skills</option>
          <option value="">option1</option>
          <option value="">option2</option>
          <option value="">option3</option>
          <option value="">option4</option>
          <option value="">option5</option>
          <option value="">option6</option>
          <option value="">option7</option>
          <option value="">option8</option>
        </select>

        <div>
          <input
            className={styles.experience}
            type="number"
            placeholder="Experience Duration in Years"
          />
        </div>
        <AddButton />
      </form>
      <img
        className={styles.pagination}
        src={ballsSkills}
        alt="pagination balls"
      />
    </div>
  );
};
export default SkillsForm;
