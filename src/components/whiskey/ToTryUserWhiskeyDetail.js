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
    if (userWhiskey.id !== undefined) {
    const whiskeyId = parseInt(userWhiskey.whiskeyId);
    getWhiskeyById(whiskeyId)
    .then(w => {
     setWhiskey(w)
    }
    )};
  }, [userWhiskey, getWhiskeyById]);

  return (
    <>
      <section className="userWhiskeyDetail">
        <h3 className="userWhiskey__name">{userWhiskey.title}</h3>
        <img className="userWhiskey__image" src={userWhiskey.list_img_url} alt="whiskey bottle" />
        <div className="userWhiskey__region">REGION: {whiskey.region}</div>
        <div className="userWhiskey__region">${whiskey.price}</div>
        <div className="userWhiskey__notes">NOTES: {userWhiskey.notes}</div>
        {/* <div className="userWhiskey__tags">{userWhiskey.tags.title}</div> */}
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
      </section>
    </>
  );
};