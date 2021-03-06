import { useContext, useEffect } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { HaveTried } from "./HaveTried";
import "./Whiskey.css";

export const HaveTriedList = (props) => {
  const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext);

  useEffect(() => {
    getUserWhiskeys();
  }, []);

  if (localStorage.getItem("app_user")) {
  return (
    <div className="whiskeys">
      <>
      <div className="listElements">
      <div className="whiskeyHeader">
        <h1>WHISKEYS I'VE TRIED</h1>
        <h4>click on a whiskey to see more info</h4>
        </div>
        <div className="list">
        {userWhiskeys.map((userWhiskey) => {
          if (userWhiskey.rating !== null) {
            return <HaveTried key={userWhiskey.id} userWhiskey={userWhiskey} />;
          } else {
            return ""
          }
        })}
        </div>
        </div>
      </>
    </div>
  )};
};
