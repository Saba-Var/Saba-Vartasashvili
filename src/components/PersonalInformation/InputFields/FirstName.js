import Context from "../../store/context";
import { useContext } from "react";
import styles from "./FirstName.module.css";
import Error from "../Error/Error";

const FirstName = (props) => {
  const top = "448px";
  const userData = useContext(Context);
  const nameHandler = (e) => {
    userData.setFirstName(e.target.value.trim());
  };
  const border =
    props.firstNameValidityNumber || props.nameRequired || props.lowAmount;

  return (
    <>
      <input
        onChange={nameHandler}
        type="text"
        className={`${styles.name} ${border && styles["red__border"]}`}
        placeholder="First Name"
        value={userData.firstName}
      />
      <div>
        {props.firstNameValidityNumber && (
          <Error top={top} text="* first name should not contain numbers" />
        )}
        {props.lowAmount && (
          <Error
            top={top}
            text="* first name should include 2 or more characters"
          />
        )}
        {props.nameRequired && (
          <Error top={top} text="* first name is required" />
        )}
      </div>
    </>
  );
};
export default FirstName;
