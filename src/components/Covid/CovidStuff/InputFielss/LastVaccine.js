import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./LastVaccine.module.css";
import Calendar from "../../../assets/calendar.svg";
const LastVaccine = () => {
  const userData = useContext(Context);
  return (
    <>
      {userData.vaccinated && (
        <>
          <p className={styles["when__txt2"]}>
            When did you get your last covid vaccine?
          </p>
          <input type="date" placeholder="Date" className={styles.date2} />
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
