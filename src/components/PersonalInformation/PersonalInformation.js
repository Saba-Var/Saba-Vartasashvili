import styles from "./PersonalInformation.module.css";
import PersonalInfoForm from "./PersonalInfoForm";
import NavigationRed from "../buttons/NavigationRed";
import NavigationWhite from "../buttons/NavigationWhite";
import Previous from "../buttons/Previous";
const PersonalInformation = () => {
  return (
    <>
      <div>
        <div className={styles.container1}>
          <h2 className={styles["user__coordinates"]}>
            Hey, Rocketeer, what are your coordinates?
          </h2>
        </div>
        <div className={styles.container2}></div>
        <h2 className={styles["Redberry__Origins"]}>Redberry Origins</h2>
        <p className={styles["origins__text"]}>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
        <PersonalInfoForm />
        <div>
          <NavigationRed to="/" top="902px" left="377px" />
          <NavigationWhite top="902px" left="411px" />
          <NavigationWhite top="902px" left="445px" />
          <NavigationWhite top="902px" left="479px" />
          <NavigationWhite top="902px" left="513px" />
          <Previous left="340px" top="900px" to="/" />
          <Previous left="340px" top="900px" to="/" />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
