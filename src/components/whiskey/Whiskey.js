import React from "react";
import "./Whiskey.css";
import { Comparable } from "./Comparable";

export const Whiskey = ({ whiskey }) => (
  <section className="whiskey">
    <h3 className="whiskey__name">IF YOU LIKE: {whiskey.title}</h3>
    {/* {console.log("whiskey", whiskey)} */}
    <img className="whiskey__image" src={whiskey.list_img_url} />
    {whiskey.comparables.map((comparable) => <Comparable key={comparable.id} comparable={comparable} />
    )}
  </section>
);

{
  /* <button onClick={() => {
                            comparable.history.push(`/to-try/${comparable.id}`)
                        }} >
                            from Whiskey.js
                        </button> */
}
