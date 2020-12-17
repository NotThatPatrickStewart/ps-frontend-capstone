import { useContext, useEffect } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import "./Whiskey.css";
import { ToTry } from "./ToTry";

export const ToTryList = (props) => {
  const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext);
  const user = parseInt(localStorage.getItem("app_user_id"))

  useEffect(() => {
    getUserWhiskeys()
  });

  return (
    <div className="whiskeys">
      <>
        <h1>WHISKEYS TO TRY</h1>
        <h4>click on a whiskey to see more info <br /> tried one of these? click on it to add a rating and move it to your 'have tried' list</h4>

        {userWhiskeys.map((userWhiskey) => {
          if (userWhiskey.rating === null && userWhiskey.userId === user) {
            return <ToTry key={userWhiskey.id} userWhiskey={userWhiskey} />;
          } else {
            return ""
          }
        })}
      </>
    </div>
  );
};
