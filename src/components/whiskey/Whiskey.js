import React from "react";
import { Comparable } from "./Comparable";
import "./Whiskey.css";

export const Whiskey = ({ whiskey }) => (
  <section className="whiskey">
    <div className="whiskeyHeaderSearch">
      <div className="search__title1">
    <h3>IF YOU LIKE:</h3>
    </div>
    <div className="whiskey__card">
    <h4 className="whiskey__name">{whiskey.title}</h4>
    {/* {console.log("whiskey", whiskey)} */}
    <img className="whiskey__image" src={whiskey.list_img_url} alt="whiskey bottle" />
    </div>
    <div className="whiskeyDataSearch">
    <div className="whiskey__region">TYPE: {whiskey.region}</div>
    <div className="whiskey__price">${whiskey.price}</div>
    {/* <div className="whiskey__tags">{whiskey.tags.title}</div> */}
    </div>
    </div>
    <div className="search__title2">
    <h3>THEN TRY ONE OF THESE:</h3>
    </div>
    <div className="comparable__card">
    {whiskey.comparables.map((comparable) => <Comparable key={comparable.id} comparable={comparable} /> //add.filter before .map to check if the comparable id exists in array of user whiskeys as userWhiskey.whiskeyId, so this componenet needs logic to do that, not needed in WhiskeySearchList
    )}
    </div>
  </section>
);

