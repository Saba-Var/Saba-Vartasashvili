import Context from "../../store/context";
import { useContext } from "react";
import styles from "./LastName.module.css";
import Error from "../Error/Error";

const LastName = (props) => {
  const top = "540px";
  const userData = useContext(Context);
  const lastNameHandler = (e) => {
    userData.setlastName(e.target.value.trim());
  };
  const border =
    props.LastNameValidityNumber ||
    props.nameRequiredLast ||
    props.lowAmountLast;

  return (
    <>
      <input
        onChange={lastNameHandler}
        type="text"
        className={`${styles.LastName} ${border && styles["red__border"]}`}
        placeholder="Last Name"
        value={userData.lastName}
      />
      <div>
        {props.LastNameValidityNumber && (
          <Error top={top} text="* last name should not contain numbers" />
        )}
        {props.lowAmountLast && (
          <Error
            top={top}
            text="* last name should include 2 or more characters"
          />
        )}
        {props.nameRequiredLast && (
          <Error top={top} text="* last name is required" />
        )}
      </div>
    </>
  );
};
export default LastName;
