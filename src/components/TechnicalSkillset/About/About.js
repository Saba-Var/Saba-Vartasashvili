import styles from "./About.module.css";
const About = (props) => {
  return (
    <div className={styles.container2}>
      <h2 className={styles["header__text"]}>A bit about our battles</h2>
      <p className={styles.description}>
        As we said, Redberry has been on the field for quite some time now, and
        we have touched and embraced a variety of programming languages,
        technologies, philosophies, and frameworks. We are battle-tested in PHP
        Laravel Stack with Vue.js, refined in React, and allies with Serverside
        technologies like Docker and Kubernetes, and now we have set foot in the
        web3 industry.
      </p>
    </div>
  );
};
export default About;
