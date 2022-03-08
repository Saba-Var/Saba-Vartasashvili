import styles from "./Submit.module.css";
import SubmitButton from "./Buttons/SubmitButton";
import GoBackButton from "./Buttons/GoBackButton";
const Submit = () => {
  return (
    <>
      <div className={styles["submit__container"]}>
        <SubmitButton />
      </div>
      <GoBackButton />
    </>
  );
};
export default Submit;
