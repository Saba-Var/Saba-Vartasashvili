import React, { useState } from "react";

const Context = React.createContext({
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [workPreference, setWorkPreference] = useState("");
  const [hadCovid, setHadCovid] = useState("");
  const [hadCovidAt, setHadCovidAt] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [vaccinatedAt, setVaccinatedAt] = useState("");

  const data = {
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
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Context;
