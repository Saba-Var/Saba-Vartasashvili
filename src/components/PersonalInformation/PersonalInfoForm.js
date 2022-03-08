import React, { useContext, useState } from "react";
import Context from "../store/context";
import NextPage from "../buttons/NextPage";
import FirstName from "./InputFields/FirstName";
import NextPageLink from "../buttons/NextPageLink";
import LastName from "./InputFields/LastName";
import Email from "./InputFields/Email";
import PhoneNumber from "./InputFields/PhoneNumber";

const PersonalInfoForm = () => {
  const userData = useContext(Context);
  const regExp = /[a-zA-Z]/g;
  //First Name
  const [firstNameValidityNumber, setFirstNameValidityNumber] = useState(false);
  const [lowAmount, setLowAmount] = useState("");
  const [nameRequired, setNameRequired] = useState("");

  //Last Name
  const [LastNameValidityNumber, setLastNameValidityNumber] = useState("");
  const [lowAmountLast, setLowAmountLast] = useState("");
  const [nameRequiredLast, setNameRequiredLast] = useState("");

  //Email
  const [emailError, setEmailError] = useState("");
  const [lowAmountEmail, setLowAmountEmail] = useState("");

  //Phone Number
  const [number, setNumber] = useState("");

  //Submit the Form
  const submitHandler = (e) => {
    e.preventDefault();
    //Validate First Name
    setFirstNameValidityNumber(/\d/.test(userData.firstName));
    userData.firstName.length === 1 ? setLowAmount(true) : setLowAmount(false);
    userData.firstName.length === 0
      ? setNameRequired(true)
      : setNameRequired(false);

    //Validate Last Name
    setLastNameValidityNumber(/\d/.test(userData.lastName));
    userData.lastName.length === 1
      ? setLowAmountLast(true)
      : setLowAmountLast(false);
    userData.lastName.length === 0
      ? setNameRequiredLast(true)
      : setNameRequiredLast(false);

    //validate Email
    const emailIncludes =
      userData.email.includes(".") || userData.email.includes("@");
    if (userData.email.length > 0) {
      !emailIncludes ? setEmailError(true) : setEmailError(false);

      if (emailIncludes) {
        userData.email.indexOf("@") > userData.email.indexOf(".")
          ? setEmailError(true)
          : setEmailError(false);
      }
    }
    if (userData.email.length === 0)
      userData.email.length === 0
        ? setLowAmountEmail(true)
        : setLowAmountEmail(false);

    if (userData.email.length === 0) setEmailError(false);

    //validate Phone Number
    !userData.phoneNumber.includes("+995") || userData.phoneNumber.length !== 13
      ? setNumber(true)
      : setNumber(false);

    if (regExp.test(userData.phoneNumber)) setNumber(true);
    if (userData.phoneNumber.length === 0) setNumber(false);
  };
  const fullNumber =
    userData.phoneNumber.includes("+995") && userData.phoneNumber.length === 13;
  const nextPage =
    userData.firstName.length >= 2 &&
    !/\d/.test(userData.firstName) &&
    !/\d/.test(userData.lastName) &&
    userData.lastName.length >= 2 &&
    !regExp.test(userData.phoneNumber) &&
    userData.email.length !== 0 &&
    userData.email.includes(".") &&
    userData.email.includes("@") &&
    userData.email.includes("@") &&
    userData.email.indexOf("@") < userData.email.indexOf(".") &&
    (fullNumber || userData.phoneNumber.length === 0);
  const route = nextPage ? (
    <NextPageLink path="/Technical-Skillset" top="901px" left="554px" />
  ) : (
    <NextPage top="901px" left="554px" />
  );
  return (
    <form onSubmit={submitHandler} noValidate>
      <FirstName
        firstNameValidityNumber={firstNameValidityNumber}
        lowAmount={lowAmount}
        nameRequired={nameRequired}
      />
      <LastName
        LastNameValidityNumber={LastNameValidityNumber}
        lowAmountLast={lowAmountLast}
        nameRequiredLast={nameRequiredLast}
      />
      <Email emailError={emailError} lowAmountEmail={lowAmountEmail} />
      <PhoneNumber number={number} />
      <NextPage top="901px" left="554px" />
      {route}
    </form>
  );
};
export default PersonalInfoForm;
