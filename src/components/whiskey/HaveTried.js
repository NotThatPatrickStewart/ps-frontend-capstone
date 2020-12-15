import React from "react";
import "./Whiskey.css";

export const HaveTried = ({ userWhiskey }) => {
  return <div className="userWhiskeys">
    <h3 className="whiskey__name">{userWhiskey.title}</h3>
    <img className="whiskey__image" src={userWhiskey.list_img_url} />
    <div className="whiskey__rating">RATING: {userWhiskey.rating}</div>
  </div>;
  };
