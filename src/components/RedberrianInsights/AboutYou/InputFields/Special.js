import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./Special.module.css";

const Special = () => {
  const userDate = useContext(Context);
  const specialTextAreaHandler = (e) => {
    userDate.setSpecialDevTalks(e.target.value);
  };
  return (
    <div>
      <label className={styles["special__label"]}>
        Tell us something special
      </label>
      <textarea
        placeholder="I..."
        className={styles["special__textarea"]}
        onChange={specialTextAreaHandler}
        value={userDate.specialDevTalk}
      />
    </div>
  );
};

export default Special;
