import React from "react";
import "./Whiskey.css";
import { Link } from "react-router-dom"

export const ToTry = ({ userWhiskey }) => {
  return (
    <div className="userWhiskeys">
      <h3 className="whiskey__name">
        <Link to={`/to-try-userWhiskeys/${userWhiskey.id}`}>{userWhiskey.title}</Link>
      </h3>
      <img className="whiskey__image" src={userWhiskey.list_img_url} />
      <div className="whiskey>>rating">{userWhiskey.rating}</div>
    </div>
  );
};
