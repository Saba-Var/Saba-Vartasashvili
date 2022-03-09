import React, { useEffect, useState, useContext } from "react";
import "./SubmitedList.css";
import ListItem from "./ListItem";
import Context from "../store/context";
import GoBackButton from "../Submit/Buttons/GoBackButton";
function SubmitedList() {
  const userData = useContext(Context);
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchSubmittedList() {
      try {
        const response = await fetch(
          `https://bootcamp-2022.devtest.ge/api/applications?token=${userData.token}`
        );
        if (!response.ok) throw new Error("Failed Fetch");
        const fetchedData = await response.json();
        if (response.ok === true) {
          setdata(fetchedData);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    fetchSubmittedList();
  }, []);

  const toggle = (index) => {
    setdata(
      data.map((content, i) => {
        if (i === index) {
          content.open = !content.open;
        } else {
          content.open = false;
        }
        return content;
      })
    );
  };

  return (
    <div className="submit__background">
      <GoBackButton top="180px" left="336px" to="/" />
      <h2>Submitted Applications</h2>
      <div className="container">
        {data.map((data, i) => (
          <ListItem data={data} index={i} toggle={toggle} key={i} />
        ))}
      </div>
    </div>
  );
}
export default SubmitedList;
