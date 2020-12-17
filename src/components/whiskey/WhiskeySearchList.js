import React, { useContext, useEffect, useState } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { Whiskey } from "./Whiskey";
import "./Whiskey.css";

export const WhiskeySearchList = (props) => {
  const { whiskeys, getWhiskeys, searchTerms } = useContext(
    WhiskeyContext
  );
  const [filteredWhiskeys, setFilteredWhiskeys] = useState([]);

  useEffect(() => {
    getWhiskeys();
  }, []);

  
  useEffect(() => {
    if (searchTerms !== "") {
      const subset = whiskeys.filter((whiskey) =>
      whiskey.title.toLowerCase().startsWith(searchTerms.toLowerCase())
      );
      setFilteredWhiskeys(subset);
    } else {
      setFilteredWhiskeys([]);
    }
  }, [searchTerms, whiskeys]);

  
//     ***THIS CODE WILL BE IMPLEMENTED LATER***
//    useEffect(() => {
//    getWhiskeys();
//    }, []);

//   useEffect(() => {
//     if (searchTerms !== "") {
//       const searchedWhiskeys = whiskeys.filter((whiskey) =>
//         whiskey.title.toLowerCase().startsWith(searchTerms.toLowerCase())
//       );
//       let subset = [];
//       searchedWhiskeys.map((whiskey) => {
//         console.log("whiskey", whiskey);
//         whiskey.comparables.map((comparable) => {
//           console.log("comparable", comparable);
//           if (
//             !userWhiskeys.find(
//               (userWhiskey) =>
//                 parseInt(comparable.id) === parseInt(userWhiskey.whiskeyId)
//             )
//           ) {
//             subset.push(whiskey);
//           }
//         });
//       });
//       console.log("subset", subset);
//       setFilteredWhiskeys(subset);
//     } else {
//       setFilteredWhiskeys([]);
//     }
//   }, [searchTerms, whiskeys]);
// ******************************************

  return (
    <div className="whiskeys">
      <>
        <h1>WHISKEYS</h1>

        {filteredWhiskeys.map((whiskey) => {
          return <Whiskey key={whiskey.id} whiskey={whiskey} />;
        })}
      </>
    </div>
  );
};
