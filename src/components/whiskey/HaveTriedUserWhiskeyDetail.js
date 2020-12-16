import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { useHistory } from "react-router-dom";

export const HaveTriedUserWhiskeyDetail = (props) => {
  const { getUserWhiskeyById, deleteWhiskey } = useContext(WhiskeyContext);

  const [userWhiskey, setUserWhiskey] = useState({});

  let history = useHistory()

  useEffect(() => {
    const userWhiskeyId = parseInt(props.match.params.userWhiskeyId);
    getUserWhiskeyById(userWhiskeyId).then(setUserWhiskey);
  }, []);

console.log(userWhiskey)

  return (
    <>
      <section className="userWhiskeyDetail">
        <h3 className="userWhiskey__name">{userWhiskey.title}</h3>
        <img className="userWhiskey__image" src={userWhiskey.list_img_url} />
        <div className="whiskey__rating">RATING: {userWhiskey.rating}</div>
        <div className="userWhiskey__region">REGION: {userWhiskey.region}</div>
        <div className="userWhiskey__region">${userWhiskey.price}</div>
        <div className="userWhiskey__notes">NOTES: {userWhiskey.notes}</div>
        {/* <div className="userWhiskey__tags">{userWhiskey.tags.title}</div> */}
        <button onClick={
            () => {
                props.history.push(`/have-tried-userWhiskeys/edit/${userWhiskey.id}`)
            }}>
                ADD NOTES
            </button>
            <button onClick={
                    () => {
                      deleteWhiskey(userWhiskey.id)
                        .then(() => {
                            props.history.push("/have-tried")
                        })
                    }
                }>REMOVE WHISKEY</button>
            <button onClick={() => history.goBack()}>Back</button>
      </section>
    </>
  );
};