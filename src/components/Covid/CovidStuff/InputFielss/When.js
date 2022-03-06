import styles from "./When.module.css";
import Calendar from "../../../assets/calendar.svg";
const When = () => {
  return (
    <>
      <p className={styles["when__txt"]}>When?</p>
      <input type="date" placeholder="Date" className={styles.date} />
      <img src={Calendar} alt="calendar icon" className={styles.calendar} />
    </>
  );
};

export default When;
