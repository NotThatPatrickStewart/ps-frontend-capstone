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
  
  const getWhiskeyById = (id) => {
    return fetch(`http://localhost:8089/whiskeys/${id}`)
    .then((response) => response.json())
  }

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

  const updateUserWhiskey = (whiskeyId, updateWhiskey) => {
    return fetch (`http://localhost:8088/userWhiskeys/${whiskeyId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(updateWhiskey)
    })
      .then(getUserWhiskeys)
  }

  const deleteWhiskey = whiskeyId => {
    return fetch(`http://localhost:8088/userWhiskeys/${whiskeyId}`, {
        method: "DELETE"
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
        updateUserWhiskey,
        deleteWhiskey,
        getWhiskeyById
      }}
    >
      {props.children}
    </WhiskeyContext.Provider>
  );
};
