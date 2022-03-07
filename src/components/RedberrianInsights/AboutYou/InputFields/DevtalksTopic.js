import { useContext } from "react";
import styles from "./DevtalksTopic.module.css";
import Context from "../../../store/context";
import Error from "../../../PersonalInformation/Error/Error";
const DevTalksTopic = (props) => {
  const userDate = useContext(Context);
  const devTextareaHandler = (e) => {
    userDate.setDevTextArea(e.target.value);
    props.setDevTalkAreaError(false);
  };
  return (
    <>
      {userDate.devRadio && (
        <div>
          <label className={styles.topic}>
            What would you speak about at Devtalk?
          </label>
          <textarea
            className={`${styles.textarea} ${
              props.devTalkAreaError && styles["red__border"]
            }`}
            placeholder="I would..."
            onChange={devTextareaHandler}
            value={userDate.devTextarea}
          />
          {props.devTalkAreaError && (
            <Error text="* input field is empty" top="705px" left="153px" />
          )}
        </div>
      )}
    </>
  );
};
export default DevTalksTopic;
