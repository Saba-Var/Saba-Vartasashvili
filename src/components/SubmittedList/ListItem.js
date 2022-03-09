import React from "react";

function ListItem({ data, index, toggle }) {
  return (
    <div className={"item " + (data.open ? "open" : "")} key={index}>
      <div className="top" onClick={() => toggle(index)}>
        {index + 1}
      </div>
      <div className="content">{data.first_name}</div>
    </div>
  );
}

export default ListItem;
