import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./Vaccinated.module.css";
const Vaccinated = () => {
  const userData = useContext(Context);
  const inputHandler = (e) => {
    userData.setVaccinated(e.target.value);
  };
  return (
    <>
      <p className={styles.header}>Have you been vaccinated?</p>
      <label className={styles.yes}>Yes</label>
      <label className={styles.no}>No</label>
      <input
        onChange={inputHandler}
        className={styles.radio1}
        type="radio"
        name="vaccinated"
        value="Yes"
      />
      <input
        onChange={inputHandler}
        className={styles.radio2}
        type="radio"
        name="vaccinated"
        value="No"
      />
    </>
  );
};
export default Vaccinated;
