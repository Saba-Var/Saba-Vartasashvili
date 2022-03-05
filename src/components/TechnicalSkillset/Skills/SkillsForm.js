import { useEffect, useState, useContext } from "react";
import styles from "./SkillsForm.module.css";
import DropdownArrow from "../../assets/DrowpdownArrow.svg";
import ballsSkills from "../../assets/balls-Skills.svg";
import AddButton from "./AddButton";
import SkillSet from "./Skillset";
import Context from "../../store/context";
import NextPageLink from "../../buttons/NextPageLink";
const SkillsForm = (props) => {
  const userData = useContext(Context);
  const [skillsList, setSkillsList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [years, setYears] = useState("");
  const [items, setItems] = useState([]);
  const [allSkillsArray, setAllSkillsArray] = useState([]);
  let arr = [];
  for (const key in skillsList) {
    arr.push(skillsList[key].title);
  }

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

  const selectHandler = (e) => {
    setSelectedSkill(e.target.value);
  };

  const inputHandler = (e) => {
    setYears(e.target.value);
  };

  //form submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (!allSkillsArray.includes(selectedSkill) && years !== "") {
      setAllSkillsArray((prevState) => {
        return [...prevState, selectedSkill];
      });
      allSkillsArray.push(selectedSkill);
      setItems((prevState) => {
        return [...prevState, [selectedSkill, years]];
      });
      userData.setSkills((prevState) => {
        return [
          ...prevState,
          {
            id: arr.indexOf(selectedSkill) + 1,
            experience: Number(years),
            skill: selectedSkill,
          },
        ];
      });
    }
  };
  return (
    <div>
      <img
        src={DropdownArrow}
        alt="dropdown arrow"
        className={styles["dropdown__arrow"]}
      />
      <form className={styles.form} onSubmit={submitHandler}>
        <select onChange={selectHandler}>
          <option selected defaultValue disabled hidden>
            Skills
          </option>
          {skillsList.map((skill) => (
            <option key={skill.id} id={skill.id} value={`${skill.title}`}>
              {skill.title}
            </option>
          ))}
        </select>
        <div>
          <input
            onChange={inputHandler}
            className={styles.experience}
            type="number"
            placeholder="Experience Duration in Years"
            min={1}
            max={50}
          />
        </div>
        <AddButton items={items} />
      </form>
      <SkillSet
        items={items}
        setItems={setItems}
        allSkillsArray={allSkillsArray}
        setAllSkillsArray={setAllSkillsArray}
      />
      <img
        className={styles.pagination}
        src={ballsSkills}
        alt="pagination balls"
      />
      <NextPageLink path="/" />
    </div>
  );
};
export default SkillsForm;
