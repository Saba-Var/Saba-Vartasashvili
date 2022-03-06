import { useContext, useEffect } from "react";
import styles from "./WorkType.module.css";
import Context from "../../../store/context";

const WorkType = (props) => {
  const userData = useContext(Context);
  const inputHandler = (e) => {
    userData.setWorkPreference(e.target.value);
    props.workTypeError && props.setWorkTypeError(false);
  };

  useEffect(() => {
    if (userData.workPreference !== "") {
      if (userData.workPreference === "From Sairme Office")
        document.getElementById("From Sairme Office").checked = true;

      if (userData.workPreference === "From Home")
        document.getElementById("From Home").checked = true;

      if (userData.workPreference === "Hybrid")
        document.getElementById("Hybrid").checked = true;
    }
  }, []);

  return (
    <>
      <p className={styles["work__type__office"]}>
        how would you prefer to work?
      </p>
      <label className={styles.office}>From Sairme Office</label>
      <label className={styles.home}>From Home</label>
      <label className={styles.hybrid}>Hybrid</label>
      <input
        onChange={inputHandler}
        className={styles.radio1}
        type="radio"
        name="work"
        id="From Sairme Office"
        value="From Sairme Office"
      />
      <input
        onChange={inputHandler}
        className={styles.radio2}
        type="radio"
        name="work"
        id="From Home"
        value="From Home"
      />
      <input
        onChange={inputHandler}
        className={styles.radio3}
        type="radio"
        name="work"
        value="Hybrid"
        id="Hybrid"
      />
    </>
  );
};
export default WorkType;
