import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import WorkType from "./InputFields/WorkType";
import ContactCovid from "./InputFields/ContactCovid";
import When from "./InputFields/When";
import Vaccinated from "./InputFields/Vaccinated";
import LastVaccine from "./InputFields/LastVaccine";
import NextPage from "../../buttons/NextPage";
import Balls from "../../assets/balls (2).svg";
import styles from "./CovidStuff.module.css";
import Context from "../../store/context";
import CovidError from "../CovidError/CovidError";
import Previous from "../../assets/Previous.svg";
import CostumPlaceHolder from "./CostumPlaceholder/CostumPlaceHolder";
import NextPageButton from "./NextPageButton/NextPageButton";
const CovidStuff = () => {
  const userData = useContext(Context);
  const [workTypeError, setWorkTypeError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [whenError, setWhenError] = useState(false);
  const [whenLastVaccineError, setWhenLastVaccineError] = useState(false);
  const [showError, setShowError] = useState(false);

  const submitHandler = (e) => {
    //validate WorkType
    e.preventDefault();
    userData.workPreference === ""
      ? setWorkTypeError(true)
      : setWorkTypeError(false);

    //validate ContactCovid
    userData.covidActions === 0
      ? setContactError(true)
      : setContactError(false);
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
    userData.vaccinatedError === 0 && setShowError(true);

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
      {userData.hadCovid && userData.hadCovidAt === "" && (
        <CostumPlaceHolder top="753px" />
      )}
      {userData.vaccinated && userData.vaccinatedAt === "" && (
        <CostumPlaceHolder top="1113px" />
      )}
      <form onSubmit={submitHandler}>
        <WorkType
          workTypeError={workTypeError}
          setWorkTypeError={setWorkTypeError}
        />
        {workTypeError && <CovidError top="475px" text="* required field" />}
        <ContactCovid
          contactError={contactError}
          setContactError={setContactError}
          setWhenError={setWhenError}
        />
        {contactError && userData.contactAction === 0 && (
          <CovidError top="640px" text="* required field" />
        )}
        <When setWhenError={setWhenError} />
        {whenError && <CovidError top="802px" text="* required field" />}
        <Vaccinated
          setWhenLastVaccineError={setWhenLastVaccineError}
          setShowError={setShowError}
        />

        {showError && userData.vaccineAction === 0 && (
          <CovidError top="995px" text="* required field" />
        )}

        <LastVaccine setWhenLastVaccineError={setWhenLastVaccineError} />
        {whenLastVaccineError && (
          <CovidError top="1162px" text="* required field" />
        )}
        <NextPage top="1292px" left="507px" />
        <NextPageButton />
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
