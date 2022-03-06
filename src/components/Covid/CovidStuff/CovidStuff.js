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
  const [whenLastVaccineError, setWhenLastVaccineError] = useState(false);
  const [vaccinatedError, setVaccinatedError] = useState(0);
  const [showError, setShowError] = useState(false);
  const submitHandler = (e) => {
    //validate WorkType
    e.preventDefault();
    userData.workPreference === ""
      ? setWorkTypeError(true)
      : setWorkTypeError(false);

    //validate ContactCovid

    covidActions === 0 ? setContactError(true) : setContactError(false);
    userData.hadCovid === false &&
      userData.hadCovidAt !== "" &&
      userData.setHadCovidAt("");

    //validate When component/date input
    userData.hadCovid === false && userData.setHadCovidAt("");
    userData.hadCovid === true && userData.hadCovidAt === ""
      ? setWhenError(true)
      : setWhenError(false);

    //validate Vaccinated
    userData.vaccinated === false && userData.setVaccinatedAt("");
    userData.vaccinated === false &&
      userData.vaccinated !== "" &&
      userData.setVaccinatedAt("");
    vaccinatedError === 0 && setShowError(true);

    //validate LastVaccine/date input
    userData.vaccinated === "" && userData.setVaccinated(false);
    userData.vaccinated === false &&
      userData.hadCovidAt !== "" &&
      userData.setVaccinatedAt("");
    userData.vaccinated === true && userData.vaccinatedAt === ""
      ? setWhenLastVaccineError(true)
      : setWhenLastVaccineError(false);
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
          contactError={contactError}
          setCovidActions={setCovidActions}
          setContactError={setContactError}
        />
        {contactError && <CovidError top="640px" text="* required field" />}
        <When setWhenError={setWhenError} />
        {whenError && <CovidError top="802px" text="* required field" />}
        <Vaccinated
          setWhenLastVaccineError={setWhenLastVaccineError}
          setShowError={setShowError}
          setVaccinatedError={setVaccinatedError}
        />

        {showError && <CovidError top="995px" text="* required field" />}

        <LastVaccine setWhenLastVaccineError={setWhenLastVaccineError} />
        {whenLastVaccineError && (
          <CovidError top="1162px" text="* required field" />
        )}
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
