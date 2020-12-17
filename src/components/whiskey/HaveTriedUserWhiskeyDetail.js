import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { useHistory } from "react-router-dom";

export const HaveTriedUserWhiskeyDetail = (props) => {
  const { getUserWhiskeyById, deleteWhiskey, getWhiskeyById } = useContext(WhiskeyContext);

  const [userWhiskey, setUserWhiskey] = useState({});
  const [whiskey, setWhiskey] = useState({});

  let history = useHistory()

  useEffect(() => {
    const userWhiskeyId = parseInt(props.match.params.userWhiskeyId);
    getUserWhiskeyById(userWhiskeyId).then(setUserWhiskey);
  }, []);

  //This is the useEffect I'm trying to use to get the data from whiskey.json. I think because it's a use effect and not riunning on page load,
  //it's coming back as not a number. I've tried refactoring this, combining use effects, all sorts of things. I feel like there must be an easier way to so this,
  //but I'm just not wrapping my head around it.
  useEffect(() => {
    const whiskeyId = parseInt(userWhiskey.whiskeyId);
    getWhiskeyById(whiskeyId).then(setWhiskey);
    console.log("whiskeyId", whiskeyId)
  }, [userWhiskey]);

console.log("userWhiskey", userWhiskey)
console.log("whiskey", whiskey)

  return (
    <>
      <section className="userWhiskeyDetail">
        <h3 className="userWhiskey__name">{userWhiskey.title}</h3>
        <img className="userWhiskey__image" src={userWhiskey.list_img_url} />
        <div className="whiskey__rating">RATING: {userWhiskey.rating}</div>
        <div className="whiskey__region">REGION: {whiskey.region}</div>
        <div className="whiskey__region">${whiskey.price}</div>
        <div className="userWhiskey__notes">NOTES: {userWhiskey.notes}</div>
        {/* <div className="userWhiskey__tags">{userWhiskey.tags.title}</div> */}
        <button onClick={
            () => {
                props.history.push(`/have-tried-userWhiskeys/edit/${userWhiskey.id}`)
            }}>
                EDIT NOTE
            </button>
            <button onClick={
                    () => {
                      deleteWhiskey(userWhiskey.id)
                        .then(() => {
                            props.history.push("/have-tried")
                        })
                    }
                }>REMOVE WHISKEY</button>
            <button onClick={() => history.goBack()}>BACK</button>
      </section>
    </>
  );
};