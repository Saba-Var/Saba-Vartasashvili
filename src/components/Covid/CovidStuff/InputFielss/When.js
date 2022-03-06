import styles from "./When.module.css";
import Calendar from "../../../assets/calendar.svg";
import { useContext } from "react";
import Context from "../../../store/context";
const When = () => {
  const userData = useContext(Context);

  return (
    <>
      {userData.hadCovid && (
        <>
          <p className={styles["when__txt"]}>When?</p>
          <input type="date" placeholder="Date" className={styles.date} />
          <img src={Calendar} alt="calendar icon" className={styles.calendar} />
        </>
      )}
    </>
  );
};

export default When;
