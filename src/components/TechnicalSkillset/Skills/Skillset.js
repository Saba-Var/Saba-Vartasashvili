import styles from "./Skillset.module.css";
import Remove from "../../assets/Remove.svg";
import Context from "../../store/context";
import { useContext } from "react";

const SkillSet = (props) => {
  const userData = useContext(Context);
  const clickHandler = (e) => {
    props.setItems((prevState) =>
      prevState.filter((item) => item[0] !== e.target.id)
    );
    props.setAllSkillsArray((prevState) =>
      prevState.filter((item) => item !== e.target.name)
    );

    userData.setSkills((prevState) => {
      return prevState.filter((item) => String(item.id) !== e.target.id);
    });
  };

  return (
    <>
      {userData.skills.length > 0 && (
        <div className={styles.container}>
          {userData.skills.map((item) => {
            return (
              <div
                key={Math.random() * 1000}
                className={styles["item__container"]}
              >
                <p>{item.skill}</p>
                <p>Years of Experience: {item.experience}</p>
                <img
                  name={item.skill}
                  id={item.id}
                  onClick={clickHandler}
                  src={Remove}
                  alt="remove icon"
                  className={styles.remove}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default SkillSet;
