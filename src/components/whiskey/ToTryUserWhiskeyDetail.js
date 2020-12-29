import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const ToTryUserWhiskeyDetail = (props) => {
  const { getUserWhiskeyById, deleteWhiskey, getWhiskeyById } = useContext(WhiskeyContext);

  const [userWhiskey, setUserWhiskey] = useState({});
  const [whiskey, setWhiskey] = useState({});

  let history = useHistory()

  useEffect(() => {
    const userWhiskeyId = parseInt(props.match.params.userWhiskeyId);
    getUserWhiskeyById(userWhiskeyId).then(setUserWhiskey);
  }, [getUserWhiskeyById, props.match.params.userWhiskeyId]);

  useEffect(() => {
    if (userWhiskey.id !== undefined) { 
    const whiskeyId = parseInt(userWhiskey.whiskeyId);
    getWhiskeyById(whiskeyId)
    .then(w => {
          //  console.log("w", w) 
     setWhiskey(w)
    }
    )};
  }, [userWhiskey]);

// console.log("userWhiskey", userWhiskey)
//  console.log("whiskey", whiskey)

  return (
    <>
      <section className="userWhiskeyDetail">
      <div className="whiskeyHeader">
        <h3 className="userWhiskey__name">{userWhiskey.title}</h3>
        <img className="userWhiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" />
        </div>
        <div className="whiskeyData">
        <div className="userWhiskey__region">TYPE: {whiskey.region}</div>
        <div className="userWhiskey__region">${whiskey.price}</div>
        <div className="userWhiskey__notes">NOTES: {userWhiskey.notes}</div>
        {/* <div className="userWhiskey__tags">{userWhiskey.tags.title}</div> */}
        </div>
        <div className="buttonParentDiv">
        <Button variant="dark" onClick={
            () => {
                props.history.push(`/to-try-userWhiskeys/edit/${userWhiskey.id}`)
            }}>
                ADD RATING
            </Button>
            <Button variant="dark" onClick={
                    () => {
                      deleteWhiskey(userWhiskey.id)
                        .then(() => {
                            props.history.push("/to-try")
                        })
                    }
                }>REMOVE WHISKEY</Button>
            <Button variant="dark" onClick={() => history.goBack()}>BACK</Button>
            </div>
      </section>
    </>
  );
};