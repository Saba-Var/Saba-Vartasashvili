import React from "react";
import PersonalInformation from "./UserInformation/PersonalInformation";
function ListItem({ data, index, toggle }) {
  return (
    <div className={"item " + (data.open ? "open" : "")} key={index}>
      <div className="top" onClick={() => toggle(index)}>
        {index + 1}
      </div>
      <div className="content">
        <PersonalInformation userData={data} />
      </div>
    </div>
  );
}

export default ListItem;
