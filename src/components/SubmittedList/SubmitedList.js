import React, { useState } from "react";
import "./SubmitedList.css";
import ListItem from "./ListItem";

function SubmitedList() {
  const [data, setdata] = useState([
    {
      open: false,
    },
    {
      open: false,
    },
    {
      open: false,
    },
  ]);

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
