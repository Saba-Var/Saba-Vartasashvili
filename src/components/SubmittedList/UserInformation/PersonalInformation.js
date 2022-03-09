import styles from "./PersonalInformation.module.css";
const PersonalInformation = (props) => {
  const data = props.userData;
  return (
    <div className={styles["personal__container"]}>
      <header>Personal Infomation</header>
      <div className={styles.flex}>
        <div className={styles.column}>
          <p className={styles.p}>First Name</p>
          <p className={styles.p}>Last Name</p>
          <p className={styles.p}>E Mail</p>
          <p className={styles.p}>Phone</p>
        </div>
        <div className={`${styles.column} ${styles.left}`}>
          <p className={styles.p2}>{data.first_name}</p>
          <p className={styles.p2}>{data.last_name}</p>
          <p className={styles.p2}>{data.email}</p>
          <p className={styles.p2}>
            {data.phone === "NAN" ? "No information" : data.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
