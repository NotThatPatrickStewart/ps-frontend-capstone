import React, { useState } from "react";

export const WhiskeyContext = React.createContext();

export const WhiskeyProvider = (props) => {
  const [whiskeys, setWhiskeys] = useState([]);
  const [searchTerms, setSearchTerms] = useState("")

  const getWhiskeys = () => {
    return fetch("http://localhost:8089/whiskeys")
      .then((response) => response.json())
      .then(setWhiskeys);
  };
  const addUserWhiskey = (whiskey) => {
    return fetch("http://localhost:8088/userWhiskeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(whiskey),
    }).then(getWhiskeys);
  };



  return (
    <WhiskeyContext.Provider
      value={{
        whiskeys,
        addUserWhiskey,
        getWhiskeys,
        searchTerms,
        setSearchTerms
      }}
    >
      {props.children}
    </WhiskeyContext.Provider>
  );
};
