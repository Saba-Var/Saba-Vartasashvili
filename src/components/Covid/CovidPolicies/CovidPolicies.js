import styles from "./CovidPolicies.module.css";
const CovidPolicies = () => {
  return (
    <>
      <div className={styles.background}></div>
      <h2 className={styles.header}>Redberry Covid Policies</h2>
      <p className={styles.text}>
        As this infamous pandemic took over the world, we adjusted our working
        practices so that our employees can be as safe and comfortable as
        possible. We have a hybrid work environment, so you can either work from
        home or visit our lovely office on Sairme Street. If it was up to us, we
        would love you to see us in the office because we think face-to-face
        communications > Zoom meetings. Both on the fun and productivity scales.
      </p>
    </>
  );
};
export default CovidPolicies;
