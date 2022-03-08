import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../../store/context";
import Balls from "../../assets/aboutBalls.svg";
import Previous from "../../assets/Previous.svg";
import styles from "./AboutYou.module.css";
import DevtalksRadio from "./InputFields/DevtalksRadio";
import DevTalksTopic from "./InputFields/DevtalksTopic";
import Special from "./InputFields/Special";
import NextPage from "../../buttons/NextPage";
import NextPageLink from "../../buttons/NextPageLink";

const AboutYou = () => {
  const userDate = useContext(Context);
  const [devTalkAreaError, setDevTalkAreaError] = useState(false);
  const [radioError, setRadioError] = useState(false);
  const [specialAreaError, setSpecialError] = useState(false);
  const radioSpecialAreaChecked =
    userDate.devtalkRadioAction === 1 &&
    userDate.specialDevTalk.trim().length > 0;
  const submitHandler = (e) => {
    e.preventDefault();

    //show error if DevTalk is empty and ratio input === true
    userDate.devRadio === true &&
      userDate.devTextarea.trim() === "" &&
      setDevTalkAreaError(true);

    //if radio input is unchecked show error
    userDate.devtalkRadioAction === 0 && setRadioError(true);

    //remove error when user selects No
    userDate.devRadio === false && setDevTalkAreaError(false);

    //if textarea of Soecial.js is empty show error
    userDate.specialDevTalk.trim() === ""
      ? setSpecialError(true)
      : setSpecialError(false);
  };
  return (
    <>
      <h2 className={styles["about__header"]}>What about you?</h2>
      <form onSubmit={submitHandler}>
        <DevtalksRadio
          setDevTalkAreaError={setDevTalkAreaError}
          radioError={radioError}
          setRadioError={setRadioError}
        />
        <DevTalksTopic
          devTalkAreaError={devTalkAreaError}
          setDevTalkAreaError={setDevTalkAreaError}
        />
        <Special
          specialAreaError={specialAreaError}
          setSpecialError={setSpecialError}
        />
        <Link to="/Covid">
          <button>
            <img
              src={Previous}
              alt="previous icons"
              className={styles["pagination__previous"]}
            />
          </button>
        </Link>
        <img
          src={Balls}
          alt="pagination icons"
          className={styles["pagination__balls"]}
        />
        <NextPage top={"962px"} left={"518px"} />

        {/* if radio input is checked(No) and special dev talk textarea is not empty */}
        {radioSpecialAreaChecked && userDate.devRadio === false && (
          <NextPageLink top={"962px"} left={"518px"} path="/Submit" />
        )}

        {/* if radio input is checked(Yes)) and devTalk and special dev talk textareas are not empty */}
        {radioSpecialAreaChecked &&
          userDate.devRadio === true &&
          userDate.devTextarea.trim().length > 0 && (
            <NextPageLink top={"962px"} left={"518px"} path="/Submit" />
          )}
      </form>
    </>
  );
};

export default AboutYou;
