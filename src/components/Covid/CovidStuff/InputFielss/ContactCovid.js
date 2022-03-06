import styles from "./ContactCovid.module.css";
const ContactCovid = () => {
  return (
    <>
      <p className={styles.header}>Did you contact covid 19? :{"("}</p>
      <label className={styles.yes}>Yes</label>
      <label className={styles.no}>No</label>
      <input
        className={styles.radio1}
        type="radio"
        name="contact"
        value="From Sairme Office"
      />
      <input
        className={styles.radio2}
        type="radio"
        name="contact"
        value="From Home"
      />
    </>
  );
};
export default ContactCovid;
