import React from "react";
import "./Whiskey.css";
import { Comparable } from "./Comparable";

export const Whiskey = ({ whiskey }) => (
  <section className="whiskey">
    <h3 className="whiskey__name">IF YOU LIKE: {whiskey.title}</h3>
    {/* {console.log("whiskey", whiskey)} */}
    <img className="whiskey__image" src={whiskey.list_img_url} />
    <div className="whiskey__region">REGION: {whiskey.region}</div>
    <div className="whiskey__price">${whiskey.price}</div>
    {/* <div className="whiskey__tags">{whiskey.tags.title}</div> */}
    <h3>THEN TRY ONE OF THESE:</h3>
    {whiskey.comparables.map((comparable) => <Comparable key={comparable.id} comparable={comparable} />
    )}
  </section>
);

