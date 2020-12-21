import React from "react";
import "./Whiskey.css";
import { Comparable } from "./Comparable";

export const Whiskey = ({ whiskey }) => (
  <section className="whiskey">
    <div className="whiskeyHeaderSearch">
    <h3 className="whiskey__name">IF YOU LIKE: {whiskey.title}</h3>
    {/* {console.log("whiskey", whiskey)} */}
    <img className="whiskey__image" src={whiskey.list_img_url} alt="whiskey bottle" />
    </div>
    <div className="whiskeyDataSearch">
    <div className="whiskey__region">TYPE: {whiskey.region}</div>
    <div className="whiskey__price">${whiskey.price}</div>
    {/* <div className="whiskey__tags">{whiskey.tags.title}</div> */}
    </div>
    <h3>THEN TRY ONE OF THESE:</h3>
    {whiskey.comparables.map((comparable) => <Comparable key={comparable.id} comparable={comparable} /> //add.filter before .map to check if the comparable id exists in array of user whiskeys as userWhiskey.whiskeyId, so this componenet needs logic to do that, not needed in WhiskeySearchList
    )}
  </section>
);

