import Context from "../../store/context";
import { useContext } from "react";
import Error from "../Error/Error";
import styles from "./PhoneNumber.module.css";

const PhoneNumber = (props) => {
  const top = "737px";
  const userData = useContext(Context);
  const numberHandler = (e) => {
    userData.setPhoneNumber(e.target.value.trim());
  };
  return (
    <>
      <input
        onChange={numberHandler}
        type="tel"
        className={`${styles.number} ${props.number && styles["red__border"]}`}
        placeholder="+995 5_ _ _ _"
        value={userData.phoneNumber}
      />
      {props.number && (
        <Error
          top={top}
          text="* invalid number! follow this format: +995598123456"
        />
      )}
    </>
  );
};
export default PhoneNumber;
