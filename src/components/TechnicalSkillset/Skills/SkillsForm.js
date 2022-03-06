import { useEffect, useState, useContext } from "react";
import styles from "./SkillsForm.module.css";
import DropdownArrow from "../../assets/DrowpdownArrow.svg";
import ballsSkills from "../../assets/balls-Skills.svg";
import AddButton from "./AddButton";
import SkillSet from "./Skillset";
import Context from "../../store/context";
import Next from "../../assets/Next.svg";
import NextPageLink from "../../buttons/NextPageLink";
import PreviousButton from "../../assets/Previous.svg";
import { Link } from "react-router-dom";

const SkillsForm = (props) => {
  const userData = useContext(Context);
  const [skillsList, setSkillsList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [years, setYears] = useState("");
  const [items, setItems] = useState([]);
  const [allSkillsArray, setAllSkillsArray] = useState([]);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [skillError, setSkillError] = useState(false);
  const [empty, setEmpty] = useState(false);
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
    if (
      !allSkillsArray.includes(selectedSkill) &&
      years !== "" &&
      selectedSkill !== ""
    ) {
      setError(false);
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
    } else {
      setError(true);
    }

    years ? setInputError(false) : setInputError(true);
    selectedSkill ? setSkillError(false) : setSkillError(true);
    console.log(allSkillsArray);
    if (allSkillsArray.length > 0) setEmpty(false);
  };
  const clickHandler = () => {
    allSkillsArray.length === 0 ? setEmpty(true) : setEmpty(false);
    console.log(allSkillsArray);
  };
  return (
    <div>
      {error && (
        <p
          className={styles.errorMessage}
        >{`* input field is empty or skill selected twice`}</p>
      )}
      {empty && (
        <p
          className={styles.errorMessage}
        >{`* select at least 1 skill to go on the next page`}</p>
      )}
      <img
        src={DropdownArrow}
        alt="dropdown arrow"
        className={styles["dropdown__arrow"]}
      />
      <form className={styles.form} onSubmit={submitHandler}>
        <select
          onChange={selectHandler}
          className={`${skillError && styles["red__border"]}
          }`}
        >
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
            id="inputSkills"
            onChange={inputHandler}
            className={`${styles.experience} ${
              inputError && styles["red__border"]
            } `}
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
      {allSkillsArray.length > 0 && (
        <NextPageLink path="/" top={"888px"} left={"521px"} />
      )}
      {allSkillsArray.length === 0 && (
        <button onClick={clickHandler}>
          <img
            src={Next}
            alt="pagination ball"
            className={styles["pagination__next"]}
            style={{ top: "888px", left: "521px" }}
          />
        </button>
      )}
      <Link to="/Personal-Information">
        <img
          className={styles.btnPrev}
          src={PreviousButton}
          alt="pagination button"
        />
      </Link>
    </div>
  );
};
export default SkillsForm;
