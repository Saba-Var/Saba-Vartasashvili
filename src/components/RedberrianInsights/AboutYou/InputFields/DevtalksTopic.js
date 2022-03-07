import { useContext } from "react";
import styles from "./DevtalksTopic.module.css";
import Context from "../../../store/context";

const DevTalksTopic = () => {
  const userDate = useContext(Context);
  const devTextareaHandler = (e) => {
    userDate.setDevTextArea(e.target.value);
  };
  return (
    <>
      {userDate.devRadio && (
        <div>
          <label className={styles.topic}>
            What would you speak about at Devtalk?
          </label>
          <textarea
            className={styles.textarea}
            placeholder="I would..."
            onChange={devTextareaHandler}
            value={userDate.devTextarea}
          />
        </div>
      )}
    </>
  );
};
export default DevTalksTopic;
