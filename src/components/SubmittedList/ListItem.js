import React from "react";
import SkillSet from "./UserInformation/SkillSet";
import PersonalInformation from "./UserInformation/PersonalInformation";
import WorkRadio from "./UserInformation/WorkRadio";
import HadCovidRadio from "./UserInformation/HadCovidRadio";
import DateIcon from "./DateIcon/DateIcon";
function ListItem({ data, index, toggle }) {
  return (
    <div className={"item " + (data.open ? "open" : "")} key={index}>
      <div className="top" onClick={() => toggle(index)}>
        {index + 1}
      </div>
      <div className="content">
        <div className="flex">
          <PersonalInformation userData={data} />
          <SkillSet userData={data} />
        </div>
        <div>
          <WorkRadio userData={data} />
          <HadCovidRadio userData={data} />
          <DateIcon
            date={data.had_covid_at}
            header="When did you have covid 19?"
          />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
