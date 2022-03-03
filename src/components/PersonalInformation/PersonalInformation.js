import { Link } from "react-router-dom";
import styles from "./PersonalInformation.module.css";
import Balls from "../assets/balls.svg";
import Next from "../assets/Next.svg";
import Previous from "../assets/Previous.svg";
const PersonalInformation = () => {
  return (
    <>
      <div className={styles["main__container"]}>
        <div className={styles.container1}>
          <h2 className={styles["user__coordinates"]}>
            Hey, Rocketeer, what are your coordinates?
          </h2>
        </div>
        <div className={styles.container2}>
          <h2 className={styles["Redberry__Origins"]}>Redberry Origins</h2>
          <p className={styles["origins__text"]}>
            You watch “What? Where? When?” Yeah. Our founders used to play it.
            That’s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry 😇
          </p>
        </div>
        <div>
          <form>
            <div>
              <input
                type="text"
                className={styles.name}
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className={styles.LastName}
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className={styles.email}
                placeholder="E Mail"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                className={styles.number}
                placeholder="+995 5_ _ _ _"
                minLength="13"
              />
            </div>
          </form>
        </div>
        <div>
          <img
            src={Balls}
            alt="pagination balls"
            className={styles["pagination__balls"]}
          />
          <img
            src={Next}
            alt="pagination ball"
            className={styles["pagination__next"]}
          />
          <Link to={"/"}>
            <img
              src={Previous}
              alt="pagination ball"
              className={styles["pagination__previous"]}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
