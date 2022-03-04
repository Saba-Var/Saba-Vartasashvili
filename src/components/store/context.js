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
});

export const ContextProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const data = {
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setlastName: setlastName,
    email: email,
    setEmail: setEmail,
    phoneNumber: phoneNumber,
    setPhoneNumber: setPhoneNumber,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Context;
