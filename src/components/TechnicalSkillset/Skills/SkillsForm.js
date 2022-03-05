import { useEffect, useState } from "react";
import styles from "./SkillsForm.module.css";
import DropdownArrow from "../../assets/DrowpdownArrow.svg";
import ballsSkills from "../../assets/balls-Skills.svg";
import AddButton from "./AddButton";
const SkillsForm = (props) => {
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    async function getSkillsList() {
      try {
        const response = await fetch(
          "https://bootcamp-2022.devtest.ge/api/skills"
        );
        const data = await response.json();
        setSkillsList(data);
      } catch (error) {
        alert(error.message + " skills");
      }
    }
    getSkillsList();
  }, []);

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
          {skillsList.map((skill) => (
            <option key={skill.id} value={`${skill.title}`}>
              {skill.title}
            </option>
          ))}
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
