import styles from "./SkillSet.module.css";
const SkillSet = (props) => {
  const data = props.userData;
  return (
    <div className={styles["skillset__container"]}>
      <header>SkillSet</header>
      <div className={styles.flex}>
        <div className={styles.column}>
          {data.skills.map((mov, i) => {
            return (
              <p className={styles.p} key={i}>
                {(mov.id === 1 && "HTML") ||
                  (mov.id === 2 && "CSS") ||
                  (mov.id === 3 && "PHP") ||
                  (mov.id === 4 && "Laravel") ||
                  (mov.id === 5 && "React") ||
                  (mov.id === 6 && "Vue") ||
                  (mov.id === 7 && "Svelte") ||
                  (mov.id === 8 && "Angular")}
              </p>
            );
          })}
        </div>
        <div className={`${styles.column} ${styles.left}`}>
          {data.skills.map((mov, i) => {
            return (
              <p key={i} className={styles.p}>
                Years of Experience:{mov.experience}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
