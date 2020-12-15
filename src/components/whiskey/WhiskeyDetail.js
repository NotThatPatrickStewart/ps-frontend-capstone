import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";

export const UserWhiskeyDetail = (props) => {
  const { getUserWhiskeyById } = useContext(WhiskeyContext);

  const [userWhiskey, setUserWhiskey] = useState({});

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
        <div className="userWhiskey__region">REGION: {userWhiskey.region}</div>
        <div className="userWhiskey__notes">${userWhiskey.notes}</div>
        {/* <div className="userWhiskey__tags">{userWhiskey.tags.title}</div> */}
      </section>
    </>
  );
};
