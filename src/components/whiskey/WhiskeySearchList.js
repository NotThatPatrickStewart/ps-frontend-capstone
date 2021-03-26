import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { Whiskey } from "./Whiskey";
import "./Whiskey.css";

export const WhiskeySearchList = (props) => {
  const { whiskeys, getWhiskeyBySearch, searchTerms } = useContext(WhiskeyContext);
  const [filteredWhiskeys, setFilteredWhiskeys] = useState([]);


  // useEffect(() => {
  //   getWhiskeyBySearch();
  // }, []);

  useEffect(() => {
    setFilteredWhiskeys(whiskeys);
    console.log(whiskeys)
  }, [whiskeys]);

  // add button, add useEffect inside onCLick
  // useEffect(() => {
  //   if (searchTerms !== "") {
  //     const subset = whiskeys.filter((whiskey) =>
  //     whiskey.title.toLowerCase().startsWith(searchTerms.toLowerCase())
  //     );
  //     setFilteredWhiskeys(subset);
  //   } else {
  //     setFilteredWhiskeys([]);
  //   }
  // }, [searchTerms, whiskeys]);

  return (
      <>
    <div className="whiskeys">
      <div className="listElements">
        <div className="search__bar">
            SEARCH  
            <input type="text"
            className="input--wide"
            onKeyUp={
                (keyEvent) => getWhiskeyBySearch(keyEvent.target.value)
            }
            placeholder="ENTER A WHISKEY YOU LIKE" />
    </div>
      <div className="whiskeyHeader">
      <h1>FIND YOUR NEW FAVORITE WHISKEY</h1>
        <div className="search__instructions">
        <h4>enter a whiskey you like above to see whiskey with a similar flavor profile <br /> once you find one you like, click the button to add it to your 'to try' list</h4>
        </div>
        </div>
        <div className="list">
        {filteredWhiskeys.map((whiskey) => {
          return <Whiskey key={whiskey.id} whiskey={whiskey} />;
        })}
        </div>
        </div>
    </div>
      </>
  );
};
