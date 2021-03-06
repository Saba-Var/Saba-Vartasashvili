import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./Special.module.css";
import Error from "../../../PersonalInformation/Error/Error";

const Special = (props) => {
  const userDate = useContext(Context);
  const specialTextAreaHandler = (e) => {
    userDate.setSpecialDevTalks(e.target.value);
    props.setSpecialError(false);
  };
  return (
    <div>
      <label className={styles["special__label"]}>
        Tell us something special
      </label>
      <textarea
        placeholder="I..."
        className={`${styles["special__textarea"]} ${
          props.specialAreaError && styles["red__border"]
        }`}
        onChange={specialTextAreaHandler}
        value={userDate.specialDevTalk}
        maxLength={142}
      />
      {props.specialAreaError && (
        <Error
          text="* required field - input field is empty"
          top="890px"
          left="153px"
        />
      )}
    </div>
  );
};

export default Special;
