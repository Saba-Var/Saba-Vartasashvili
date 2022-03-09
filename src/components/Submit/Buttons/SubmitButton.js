import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./SubmitButton.module.css";
import Context from "../../store/context";
const SubmitButton = () => {
  const userData = useContext(Context);
  const skillsArray = [];

  for (let i = 0; i < userData.skills.length; i++) {
    skillsArray.push({
      id: userData.skills[i].id,
      experience: userData.skills[i].experience,
    });
  }
  let workType;
  if (userData.workPreference === "From Sairme Office")
    workType = "from_office";
  if (userData.workPreference === "From Home") workType = "from_home";
  if (userData.workPreference === "Hybrid") workType = "hybrid";

  //if had covid and vaccinated
  let data = {
    token: userData.token,
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    phone: `${userData.phoneNumber === "" ? "NAN" : userData.phoneNumber}`,
    skills: skillsArray,
    work_preference: workType,
    had_covid: userData.hadCovid,
    had_covid_at: userData.hadCovidAt,
    vaccinated: userData.vaccinated,
    vaccinated_at: userData.vaccinatedAt,
    will_organize_devtalk: userData.devRadio,
    devtalk_topic: `${
      userData.devRadio === false ? "NAN" : userData.devTextarea
    }`,
    something_special: userData.specialDevTalk,
  };

  //if had covid, but did not vaccinated
  if (!userData.vaccinated && userData.hadCovid) delete data.vaccinated_at;

  //if vaccinated, but did not have covid
  if (!userData.hadCovid && userData.vaccinated) delete data.had_covid_at;

  //if did not vaccinated and did not have covid
  if (!userData.vaccinated && !userData.hadCovid) {
    delete data.had_covid_at;
    delete data.vaccinated_at;
  }

  const sendDataHandler = (e) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://bootcamp-2022.devtest.ge/api/application", requestOptions);

    //reset context api after POST
    userData.setDevTalkRadioAction(0);
    userData.setVaccinatedError(0);
    userData.setCovidActions(0);
    userData.setAllSkillsArray([]);
    userData.setFirstName("");
    userData.setlastName("");
    userData.setEmail("");
    userData.setPhoneNumber("");
    userData.setSkills("");
    userData.setWorkPreference("");
    userData.setHadCovid(false);
    userData.setHadCovidAt("");
    userData.setVaccinated(false);
    userData.setVaccinatedAt("");
    userData.setContactAction(0);
    userData.setVaccineAction(0);
    userData.setDevRadio("");
    userData.setDevTextArea("");
    userData.setSpecialDevTalks("");
  };

  return (
    <Link to="/Thanks">
      <div className={styles["button-container-1"]}>
        <span className={styles.text}>Submit</span>
        <button id="work" type="button" name="Hover" onClick={sendDataHandler}>
          Submit
        </button>
      </div>
    </Link>
  );
};

export default SubmitButton;
