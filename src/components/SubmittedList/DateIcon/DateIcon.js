import styles from "./DateIcon.module.css";
import calendar from "../../assets/calendar.svg";
const DateIcon = (props) => {
  return (
    <>
      <p className={styles.header}>{props.header}</p>
      <div className={styles.background}>
        <p className={styles.date}>
          {props.date === null ? "NAN" : props.date.replace(/-/g, "/")}
        </p>
        <img src={calendar} alt="calendar icon" className={styles.icon} />
      </div>
    </>
  );
};

export default DateIcon;
