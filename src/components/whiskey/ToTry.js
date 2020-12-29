import React from "react";
import "./Whiskey.css";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export const ToTry = ({ userWhiskey }) => {
  return (
    <Card>
    <div className="userWhiskeys">
    <Card.Title>
      <h3 className="whiskey__name">
        <Link to={`/to-try-userWhiskeys/${userWhiskey.id}`}>{userWhiskey.title}</Link>
      </h3>
      </Card.Title>
      <Link to={`/have-tried-userWhiskeys/${userWhiskey.id}`}><img className="whiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" /></Link>
      <div className="whiskey>>rating">{userWhiskey.rating}</div>
    </div>
    </Card>
  );
};
