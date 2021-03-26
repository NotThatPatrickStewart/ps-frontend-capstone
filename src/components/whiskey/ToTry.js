import React from "react";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import "./Whiskey.css";

export const ToTry = ({ userWhiskey }) => {
  return (
    <Card style={{ border: 'none', width: '40%'}}>
    <div className="userWhiskeys whiskey__margin">
    <Card.Title>
      <h3 className="whiskey__name">
        <Link to={`/to-try-userWhiskeys/${userWhiskey.id}`}>{userWhiskey.title}</Link>
      </h3>
      </Card.Title>
      <Link to={`/to-try-userWhiskeys/${userWhiskey.id}`}><img className="whiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" /></Link>
      <div className="whiskey>>rating">{userWhiskey.rating}</div>
    </div>
    </Card>
  );
};
