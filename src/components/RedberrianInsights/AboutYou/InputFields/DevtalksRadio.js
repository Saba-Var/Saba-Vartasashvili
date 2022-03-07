import Context from "../../../store/context";
import { useContext, useEffect } from "react";
import styles from "./DevtalksRadio.module.css";
const DevtalksRadio = (props) => {
  const userData = useContext(Context);
  const radioHandler = (e) => {
    userData.setDevTalkRadioAction(1);
    e.target.value === "YesDev"
      ? userData.setDevRadio(true)
      : userData.setDevRadio(false);

    //if user selects No DevTalks textarea and error hide and its value deletes
    if (e.target.value === "NoDev") {
      userData.setDevTextArea("");
      props.setDevTalkAreaError(false);
    }
  };
  useEffect(() => {
    if (userData.devtalkRadioAction === 1) {
      userData.devRadio === true
        ? (document.getElementById("YesDev").checked = true)
        : (document.getElementById("NoDev").checked = true);
    }
  }, []);
  return (
    <div>
      <label className={styles["devtalks__question"]}>
        Would you attend Devtalks and maybe also organize your own?
      </label>
      <input
        onChange={radioHandler}
        className={styles["dev_radio1"]}
        type="radio"
        name="devtalks"
        value="YesDev"
        id="YesDev"
      />
      <p className={styles["option__yes"]}>Yes</p>
      <input
        onChange={radioHandler}
        className={styles["dev_radio2"]}
        type="radio"
        name="devtalks"
        value="NoDev"
        id="NoDev"
      />
      <p className={styles["option__no"]}>No</p>
    </div>
  );
};
export default DevtalksRadio;
