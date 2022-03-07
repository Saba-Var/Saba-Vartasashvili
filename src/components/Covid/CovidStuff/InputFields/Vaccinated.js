import { useContext, useEffect } from "react";
import Context from "../../../store/context";
import styles from "./Vaccinated.module.css";
const Vaccinated = (props) => {
  const userData = useContext(Context);
  const inputHandler = (e) => {
    e.target.value === "Yes"
      ? userData.setVaccinated(true)
      : userData.setVaccinated(false);
    userData.vaccinated === true && props.setWhenLastVaccineError(false);
    userData.vaccinated === false && userData.setVaccinatedAt("");
    props.setShowError(false);
    userData.setVaccinatedError(1);
    userData.setVaccineAction(1);
  };

  useEffect(() => {
    if (userData.vaccineAction === 1) {
      if (userData.vaccinated === true)
        document.getElementById("Yes2").checked = true;
      if (userData.vaccinated === false)
        document.getElementById("No2").checked = true;
    }
  }, []);
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
        id="Yes2"
      />
      <input
        onChange={inputHandler}
        className={styles.radio2}
        type="radio"
        name="vaccinated"
        value="No"
        id="No2"
      />
    </>
  );
};
export default Vaccinated;
