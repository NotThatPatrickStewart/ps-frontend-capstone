import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { useHistory } from "react-router-dom";

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
<<<<<<< HEAD
    if (userWhiskey.id !== undefined) {
    const whiskeyId = parseInt(userWhiskey.whiskeyId);
    getWhiskeyById(whiskeyId)
    .then(w => {
=======
    if (userWhiskey.id !== undefined) { 
    const whiskeyId = parseInt(userWhiskey.whiskeyId);
    getWhiskeyById(whiskeyId)
    .then(w => {
          //  console.log("w", w) 
>>>>>>> main
     setWhiskey(w)
    }
    )};
  }, [userWhiskey]);
<<<<<<< HEAD
=======

// console.log("userWhiskey", userWhiskey)
//  console.log("whiskey", whiskey)
>>>>>>> main

  return (
    <>
      <section className="userWhiskeyDetail">
      <div className="whiskeyHeader">
        <h3 className="userWhiskey__name">{userWhiskey.title}</h3>
        <img className="userWhiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" />
<<<<<<< HEAD
        </div>
        <div className="whiskeyData">
        <div className="userWhiskey__region">TYPE: {whiskey.region}</div>
=======
        <div className="userWhiskey__region">REGION: {whiskey.region}</div>
>>>>>>> main
        <div className="userWhiskey__region">${whiskey.price}</div>
        <div className="userWhiskey__notes">NOTES: {userWhiskey.notes}</div>
        {/* <div className="userWhiskey__tags">{userWhiskey.tags.title}</div> */}
        </div>
        <div className="buttonParentDiv">
        <button onClick={
            () => {
                props.history.push(`/to-try-userWhiskeys/edit/${userWhiskey.id}`)
            }}>
                ADD RATING
            </button>
            <button onClick={
                    () => {
                      deleteWhiskey(userWhiskey.id)
                        .then(() => {
                            props.history.push("/to-try")
                        })
                    }
                }>REMOVE WHISKEY</button>
            <button onClick={() => history.goBack()}>BACK</button>
            </div>
      </section>
    </>
  );
};