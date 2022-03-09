import React from "react";
import PersonalInformation from "./UserInformation/PersonalInformation";
import HadCovidRadio from "./UserInformation/HadCovidRadio";
import Vaccinated from "./UserInformation/Vaccinated";
import WorkRadio from "./UserInformation/WorkRadio";
import SkillSet from "./UserInformation/SkillSet";
import DateIcon from "./DateIcon/DateIcon";
import DevOrganizeRadio from "./UserInformation/DevOrganizeRadio";
import TextArea from "./UserInformation/TextArea";
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
        <div className="flex gap">
          <div>
            <WorkRadio userData={data} />
            <HadCovidRadio userData={data} />
            <DateIcon
              date={data.had_covid_at}
              header="When did you have covid 19?"
            />
            <Vaccinated userData={data} />
            <DateIcon
              date={data.vaccinated_at}
              header="When did you get covid vaccine?"
            />
          </div>
          <div>
            <DevOrganizeRadio userData={data} />
            <TextArea
              text={data.devtalk_topic}
              height="122px"
              header="What would you speak about at Devtalk?"
            />
            <TextArea
              text={data.something_special}
              height="89px"
              header="Tell us something special"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
