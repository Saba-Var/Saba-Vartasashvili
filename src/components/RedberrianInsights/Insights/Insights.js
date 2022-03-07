import styles from "./Insights.module.css";
const Insights = () => {
  return (
    <>
      <div className={styles["container__insights"]}></div>
      <h2 className={styles.header}>Redberrian Insights</h2>
      <p className={styles["about__insights"]}>
        We were soo much fun before the pandemic started! Parties almost every
        weekend and lavish employee birthday celebrations! Unfortunately, covid
        ruined that fun like it did almost everything else in the world. But we
        try our best to zhuzh it up a bit. For example, we host biweekly
        Devtalks where our senior and lead developers talk about topics they are
        passionate about. Previous topics have included Web3, NFT, Laravel 9,
        Kubernetes, etc. We hold these talks in the office but you can join our
        Zoom broadcast as well. Feel free to join either as an attendee or a
        speaker!
      </p>
    </>
  );
};
export default Insights;
