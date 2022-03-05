import Context from "../../store/context";
import { useContext } from "react";
import Error from "../Error/Error";
import styles from "./Email.module.css";
const Email = (props) => {
  const top = "632px";
  const userData = useContext(Context);
  const emailHandler = (e) => {
    userData.setEmail(e.target.value.trim());
  };

  return (
    <>
      <input
        onChange={emailHandler}
        type="email"
        className={`${styles.email} ${
          props.emailError && styles["red__border"]
        } ${props.lowAmountEmail && styles["red__border"]}`}
        placeholder="E Mail"
        value={userData.email}
        noValidate
      />
      {props.lowAmountEmail && <Error top={top} text="* email is required" />}
      {props.emailError && (
        <Error
          top={top}
          text="* invalid email! follow this format: example@gmail.com"
        />
      )}
    </>
  );
};
export default Email;
