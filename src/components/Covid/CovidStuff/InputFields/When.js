import styles from "./When.module.css";
import Calendar from "../../../assets/calendar.svg";
import { useContext } from "react";
import Context from "../../../store/context";

const When = (props) => {
  const userData = useContext(Context);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  today = yyyy + "-" + mm + "-" + dd;

  const dateHandler = (e) => {
    userData.setHadCovidAt(e.target.value);
    props.setWhenError(false);
  };

  return (
    <>
      {userData.hadCovid && (
        <>
          <p className={styles["when__txt"]}>When?</p>
          <input
            id="datefield"
            type="date"
            placeholder="Date"
            className={`${styles.date} ${
              props.whenError && styles["red__border"]
            }`}
            onChange={dateHandler}
            max={today}
            min="2019-01-01"
            value={userData.hadCovidAt}
          />
          <img src={Calendar} alt="calendar icon" className={styles.calendar} />
        </>
      )}
    </>
  );
};

export default When;
