import { useContext, useEffect } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import "./Whiskey.css";
import { HaveTried } from "./HaveTried";

export const HaveTriedList = (props) => {
  const { userWhiskeys, getUserWhiskeys } = useContext(WhiskeyContext);

  useEffect(() => {
    getUserWhiskeys();
  }, []);

  return (
    <div className="whiskeys">
      <>
        <h1>WHISKEYS I'VE TRIED</h1>
        {userWhiskeys.map((userWhiskey) => {
          if (userWhiskey.rating !== null) {
            return <HaveTried key={userWhiskey.id} userWhiskey={userWhiskey} />;
          }
        })}
      </>
    </div>
  );
};
