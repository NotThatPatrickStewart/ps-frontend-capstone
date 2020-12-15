import React, { useState } from "react";

export const WhiskeyContext = React.createContext();

export const WhiskeyProvider = (props) => {
  const [whiskeys, setWhiskeys] = useState([]);
  const [searchTerms, setSearchTerms] = useState("")
  const [userWhiskeys, setUserWhiskeys] = useState([])

  const getWhiskeys = () => {
    return fetch("http://localhost:8089/whiskeys")
      .then((response) => response.json())
      .then(setWhiskeys);
  };

  const getUserWhiskeyById = (id) => {
    return fetch(`http://localhost:8088/userWhiskeys/${id}`)
    .then((response) => response.json())
  }

  const addUserWhiskey = (whiskey) => {
    return fetch("http://localhost:8088/userWhiskeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(whiskey),
    }).then(getWhiskeys);
  };

  const getUserWhiskeys = () => {
    return fetch("http://localhost:8088/userWhiskeys")
    .then((response) => response.json())
      .then(setUserWhiskeys);
  }

  const updateUserWhiskey = userWhiskey => {
    return fetch (`http://localhost:8088/userWhiskeys/${userWhiskey.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userWhiskey)
    })
      .then(getUserWhiskeys)
  }

  return (
    <WhiskeyContext.Provider
      value={{
        whiskeys,
        addUserWhiskey,
        getWhiskeys,
        searchTerms,
        setSearchTerms,
        userWhiskeys,
        getUserWhiskeys,
        getUserWhiskeyById,
        updateUserWhiskey
      }}
    >
      {props.children}
    </WhiskeyContext.Provider>
  );
};
