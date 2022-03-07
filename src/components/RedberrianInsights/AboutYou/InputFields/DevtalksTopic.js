import styles from "./DevtalksTopic.module.css";
const DevTalksTopic = () => {
  return (
    <div>
      <label className={styles.topic}>
        What would you speak about at Devtalk?
      </label>
      <textarea className={styles.textarea} placeholder="I would..." />
    </div>
  );
};
export default DevTalksTopic;
