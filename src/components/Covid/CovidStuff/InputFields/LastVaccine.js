import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./LastVaccine.module.css";
import Calendar from "../../../assets/calendar.svg";
const LastVaccine = (props) => {
  const userData = useContext(Context);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = yyyy + "-" + mm + "-" + dd;

  const lastVaccineHandler = (e) => {
    userData.setVaccinatedAt(e.target.value);
    props.setWhenLastVaccineError(false);
  };

  return (
    <>
      {userData.vaccinated && (
        <>
          <p className={styles["when__txt2"]}>
            When did you get your last covid vaccine?
          </p>
          <input
            onChange={lastVaccineHandler}
            type="date"
            placeholder="Date"
            className={`${styles.date2}  ${
              props.whenLastVaccineError && styles["red__border"]
            }`}
            max={today}
            min="2019-01-01"
            value={userData.vaccinatedAt}
          />
          <img
            src={Calendar}
            alt="calendar icon"
            className={styles.calendar2}
          />
        </>
      )}
    </>
  );
};

export default LastVaccine;
