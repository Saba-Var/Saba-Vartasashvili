import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./ContactCovid.module.css";
const ContactCovid = (props) => {
  const userData = useContext(Context);
  const inputHandler = (e) => {
    e.target.value === "Yes"
      ? userData.setHadCovid(true)
      : userData.setHadCovid(false);
    props.setCovidActions(1);
    props.setContactError(false);
    e.target.value === "No" && props.setContactError(false);
    userData.hadCovid !== "" &&
      e.target.value === "No" &&
      userData.setHadCovidAt("");
  };
  const focus = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <p className={styles.header}>Did you contact covid 19? :{"("}</p>
      <label className={styles.yes}>Yes</label>
      <label className={styles.no}>No</label>
      <input
        onChange={inputHandler}
        className={styles.radio1}
        type="radio"
        name="contact"
        value="Yes"
      />
      <input
        onChange={inputHandler}
        className={styles.radio2}
        type="radio"
        name="contact"
        value="No"
      />
    </>
  );
};
export default ContactCovid;
