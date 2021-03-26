import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Whiskey.css";

export const HaveTriedUserWhiskeyDetail = (props) => {
  const { getUserWhiskeyById, deleteWhiskey, getWhiskeyById } = useContext(WhiskeyContext);

  const [userWhiskey, setUserWhiskey] = useState({});
  const [whiskey, setWhiskey] = useState({});

  let history = useHistory()

  useEffect(() => {
    const userWhiskeyId = parseInt(props.match.params.userWhiskeyId);
    getUserWhiskeyById(userWhiskeyId).then(setUserWhiskey);
  }, [props.match.params.userWhiskeyId, getUserWhiskeyById]);

  useEffect(() => {
    if (userWhiskey.id !== undefined) { 
    const whiskeyId = parseInt(userWhiskey.whiskey_id);
    getWhiskeyById(whiskeyId)
    .then(w => {
     setWhiskey(w)
    }
    )};
  }, [userWhiskey]);

  return (
    <>
      <section className="userWhiskeyDetail">
        <div className="whiskeyHeader">
        <h3 className="userWhiskey__name">{userWhiskey.title}</h3>
        <img className="userWhiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" />
        </div>
        <div className="whiskeyDetailRight">
        <div className="whiskeyData">
        <div className="whiskey__rating">RATING: {userWhiskey.rating}</div>
        <div className="whiskey__region">TYPE: {whiskey.region}</div>
        <div className="whiskey__region">RETAIL: ${whiskey.price}</div>
        <div className="userWhiskey__notes">NOTES: {userWhiskey.notes}</div>
        </div>
        <div className="buttonParentDiv">
        <Button variant="dark" className="button" onClick={
            () => {
                props.history.push(`/have-tried-userWhiskeys/edit/${userWhiskey.id}`)
            }}>
                EDIT NOTE
            </Button>
            <Button variant="dark" className="button" onClick={
                    () => {
                      deleteWhiskey(userWhiskey.id)
                        .then(() => {
                            props.history.push("/have-tried")
                        })
                    }
                }>REMOVE WHISKEY</Button>
            <Button variant="dark" className="button" onClick={() => history.goBack()}>BACK</Button>
            </div>
            </div>
      </section>
    </>
  );
};