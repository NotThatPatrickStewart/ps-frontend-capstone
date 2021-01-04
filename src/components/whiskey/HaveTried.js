import React from "react";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import "./Whiskey.css";

export const HaveTried = ({ userWhiskey }) => {
  return (
    <Card style={{ border: 'none', width: '60%'}}>
    <div className="userWhiskeys whiskey__margin">
      <Card.Title>
      <h3 className="whiskey__name">
        <Link to={`/have-tried-userWhiskeys/${userWhiskey.id}`}>{userWhiskey.title}</Link>
      </h3>
      </Card.Title>
      <Link to={`/have-tried-userWhiskeys/${userWhiskey.id}`}><img className="whiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" /></Link>
    </div>
    </Card>
  );
};
