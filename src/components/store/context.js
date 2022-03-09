import React, { useState } from "react";

const Context = React.createContext({
  token: "",
  specialDevTalk: "",
  setSpecialDevTalks: "",
  devTextarea: "",
  setDevTextArea: "",
  devRadio: "",
  setDevRadio: "",
  devtalkRadioAction: "",
  setDevTalkRadioAction: "",
  vaccinatedError: "",
  setVaccinatedError: "",
  covidActions: "",
  setCovidActions: "",
  allSkillsArray: "",
  setAllSkillsArray: "",
  firstName: "",
  setFirstName: "",
  lastName: "",
  setlastName: "",
  email: "",
  setEmail: "",
  phoneNumber: "",
  setPhoneNumber: "",
  skills: [],
  setSkills: "",
  workPreference: "",
  setWorkPreference: "",
  hadCovid: "",
  setHadCovid: "",
  hadCovidAt: "",
  setHadCovidAt: "",
  vaccinated: "",
  setVaccinated: "",
  vaccinatedAt: "",
  setVaccinatedAt: "",
});

export const ContextProvider = (props) => {
  const [devtalkRadioAction, setDevTalkRadioAction] = useState(0);
  const [vaccinatedError, setVaccinatedError] = useState(0);
  const [covidActions, setCovidActions] = useState(0);
  const [allSkillsArray, setAllSkillsArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [workPreference, setWorkPreference] = useState("");
  const [hadCovid, setHadCovid] = useState(false);
  const [hadCovidAt, setHadCovidAt] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [vaccinatedAt, setVaccinatedAt] = useState("");
  const [contactAction, setContactAction] = useState(0);
  const [vaccineAction, setVaccineAction] = useState(0);
  const [devRadio, setDevRadio] = useState("");
  const [devTextarea, setDevTextArea] = useState("");
  const [specialDevTalk, setSpecialDevTalks] = useState("");

  const data = {
    specialDevTalk: specialDevTalk,
    setSpecialDevTalks: setSpecialDevTalks,
    devTextarea: devTextarea,
    setDevTextArea: setDevTextArea,
    devRadio: devRadio,
    setDevRadio: setDevRadio,
    devtalkRadioAction: devtalkRadioAction,
    setDevTalkRadioAction: setDevTalkRadioAction,
    vaccinatedError: vaccinatedError,
    setVaccinatedError: setVaccinatedError,
    covidActions: covidActions,
    setCovidActions: setCovidActions,
    allSkillsArray: allSkillsArray,
    setAllSkillsArray: setAllSkillsArray,
    contactAction: contactAction,
    setContactAction: setContactAction,
    vaccineAction: vaccineAction,
    setVaccineAction: setVaccineAction,
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setlastName: setlastName,
    email: email,
    setEmail: setEmail,
    phoneNumber: phoneNumber,
    setPhoneNumber: setPhoneNumber,
    skills: skills,
    setSkills: setSkills,
    workPreference: workPreference,
    setWorkPreference: setWorkPreference,
    hadCovid: hadCovid,
    setHadCovid: setHadCovid,
    hadCovidAt: hadCovidAt,
    setHadCovidAt: setHadCovidAt,
    vaccinated: vaccinated,
    setVaccinated: setVaccinated,
    vaccinatedAt: vaccinatedAt,
    setVaccinatedAt: setVaccinatedAt,
    token: "ee723206-dea9-4aa6-960d-a163a75432c8",
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Context;
