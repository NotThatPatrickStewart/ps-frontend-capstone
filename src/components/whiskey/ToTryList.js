import { useContext, useEffect } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { ToTry } from "./ToTry";
import "./Whiskey.css";

export const ToTryList = (props) => {
  const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext);

  useEffect(() => {
    getUserWhiskeys()
  }, []);

  return (
    <div className="whiskeys">
      <>
      <div className="listElements">
      <div className="whiskeyHeader">
        <h1>WHISKEYS TO TRY</h1>
        <h4>click on a whiskey to see more info <br /> tried one of these? click on it to add a rating and move it to your 'have tried' list</h4>
        </div>
        <div className="list">
        {userWhiskeys.map((userWhiskey) => {
          if (userWhiskey.rating === null) {
            return <ToTry key={userWhiskey.id} userWhiskey={userWhiskey} />;
          } else {
            return ""
          }
        })}
        </div>
        </div>
      </>
    </div>
  );
};
