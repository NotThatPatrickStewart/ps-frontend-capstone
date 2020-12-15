import { useContext, useEffect } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import "./Whiskey.css";
import { ToTry } from "./ToTry";

export const ToTryList = (props) => {
  const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext);

  useEffect(() => {
    getUserWhiskeys();
  }, []);

  return (
    <div className="whiskeys">
      <>
        <h1>WHISKEYS TO TRY</h1>
        {userWhiskeys.map((userWhiskey) => {
          if (userWhiskey.rating === null) {
            return <ToTry key={userWhiskey.id} userWhiskey={userWhiskey} />;
          }
        })}
      </>
    </div>
  );
};
