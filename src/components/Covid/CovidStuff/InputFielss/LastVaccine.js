import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./LastVaccine.module.css";
import Calendar from "../../../assets/calendar.svg";
const LastVaccine = () => {
  const userData = useContext(Context);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = yyyy + "-" + mm + "-" + dd;

  return (
    <>
      {userData.vaccinated && (
        <>
          <p className={styles["when__txt2"]}>
            When did you get your last covid vaccine?
          </p>
          <input
            type="date"
            placeholder="Date"
            className={styles.date2}
            max={today}
            min="2019-01-01"
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
