import React from "react";
import "/src/cardlist.css";

export const CardList = props => {
  return <div className="card-list">{props.children}</div>;
};
