import React from "react";
import { Comparable } from "./Comparable";
import "./Whiskey.css";

export const Whiskey = ({ whiskey }) => (
  <section className="whiskey">
    <div className="whiskeyHeaderSearch">
      <div className="search__title1">
    <h1>IF YOU LIKE:</h1>
    </div>
    <div className="whiskey__card">
    <h4 className="whiskey__name">{whiskey.title}</h4>
    <img className="whiskey__image" src={whiskey.list_img_url} alt="whiskey bottle" />
    </div>
    <div className="whiskeyDataSearch">
    <div className="whiskey__region">TYPE: {whiskey.region}</div>
    <div className="whiskey__price">RETAIL: ${whiskey.price}</div>
    </div>
    </div>
    <div className="search__title2">
    <h1>THEN TRY:</h1>
    </div>
    <div className="comparable__card">
    {whiskey.comparables.map((comparable) => <Comparable key={comparable.id} comparable={comparable} />
    )}
    </div>
  </section>
);

