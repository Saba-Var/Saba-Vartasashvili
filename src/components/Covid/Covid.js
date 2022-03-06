import CovidPolicies from "./CovidPolicies/CovidPolicies";
import styles from "./Covid.module.css";
import CovidStuff from "./CovidStuff/CovidStuff";
const Covid = () => {
  return (
    <>
      <h2 className={styles.header}>Covid Stuff</h2>
      <CovidPolicies />
      <CovidStuff />
    </>
  );
};
export default Covid;
