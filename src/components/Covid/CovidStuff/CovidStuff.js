import { Link } from "react-router-dom";
import { useState } from "react";
import WorkType from "./InputFielss/WorkType";
import ContactCovid from "./InputFielss/ContactCovid";
import When from "./InputFielss/When";
import Vaccinated from "./InputFielss/Vaccinated";
import LastVaccine from "./InputFielss/LastVaccine";
import NextPage from "../../buttons/NextPage";
import Balls from "../../assets/balls (2).svg";
import styles from "./CovidStuff.module.css";
import { useContext } from "react";
import Context from "../../store/context";
import CovidError from "../CovidError/CovidError";
import Previous from "../../assets/Previous.svg";

const CovidStuff = () => {
  const userData = useContext(Context);
  const [workTypeError, setWorkTypeError] = useState(false);
  const [covidActions, setCovidActions] = useState(0);
  const [contactError, setContactError] = useState(false);
  const [whenError, setWhenError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    userData.workPreference === ""
      ? setWorkTypeError(true)
      : setWorkTypeError(false);

    covidActions === 0 ? setContactError(true) : setContactError(false);
    userData.hadCovid === true && userData.hadCovidAt === ""
      ? setWhenError(true)
      : setWhenError(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <WorkType
          workTypeError={workTypeError}
          setWorkTypeError={setWorkTypeError}
        />
        {workTypeError && <CovidError top="475px" text="* required field" />}
        <ContactCovid
          setCovidActions={setCovidActions}
          setContactError={setContactError}
        />
        {contactError && <CovidError top="640px" text="* required field" />}
        <When setWhenError={setWhenError} />
        {whenError && <CovidError top="802px" text="* required field" />}
        <Vaccinated />
        <LastVaccine />
        <NextPage top="1292px" left="507px" />
      </form>
      <img
        src={Balls}
        alt="pagination icons"
        className={styles["pagination__balls"]}
      />
      <Link to="/Technical-Skillset">
        <button>
          <img
            src={Previous}
            alt="pagination icons"
            className={styles["pagination__previous"]}
          />
        </button>
      </Link>
    </>
  );
};

export default CovidStuff;
