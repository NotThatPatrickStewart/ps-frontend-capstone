import React from "react";
import "./Whiskey.css";

export const ComparableToTry = ({ userWhiskey }) => {
  return <div className="userWhiskeys">
    <h3 className="whiskey__name">{userWhiskey.title}</h3>
    <img className="whiskey__image" src={userWhiskey.list_img_url} />
  </div>;
  };
