import React, { useState } from "react";

export const WhiskeyContext = React.createContext();

export const WhiskeyProvider = (props) => {
  const [whiskeys, setWhiskeys] = useState([]);
  const [searchTerms, setSearchTerms] = useState("")
  const [userWhiskeys, setUserWhiskeys] = useState([])

  const getWhiskeys = () => {
    return fetch("http://localhost:8000/whiskeys", {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("app_user")}`
    },
    })
      .then((response) => response.json())
      .then(setWhiskeys);
  };
  
  const getWhiskeyById = (id) => {
    return fetch(`http://localhost:8000/whiskeys/${id}`, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("app_user")}`
    },
    })
    .then((response) => response.json())
  }
  
  const getWhiskeyBySearch = (title) => {
    return fetch(`http://localhost:8000/whiskeys?searchterm=${title}`, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("app_user")}`
    },
    })
    .then((response) => response.json())
    .then(setWhiskeys);
  }

  const getUserWhiskeyById = (id) => {
    return fetch(`http://localhost:8000/userwhiskeys/${id}`, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("app_user")}`
    },
    })
    .then((response) => response.json())
  }

  const addUserWhiskey = (whiskey) => {
    return fetch("http://localhost:8000/userwhiskeys", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("app_user")}`
    },
      body: JSON.stringify(whiskey),
    }).then(getWhiskeys);
  };

  const getUserWhiskeys = () => {
    return fetch("http://localhost:8000/userwhiskeys", {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("app_user")}`
    },
    })
    .then((response) => response.json())
      .then(setUserWhiskeys);
  }
  const updateUserWhiskey = (whiskeyId, updateWhiskey) => {
    return fetch (`http://localhost:8000/userwhiskeys/${whiskeyId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("app_user")}`
      },
      body: JSON.stringify(updateWhiskey)
    })
      .then(getUserWhiskeys)
  }

  const deleteWhiskey = whiskeyId => {
    return fetch(`http://localhost:8000/userwhiskeys/${whiskeyId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("app_user")}`
      }
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
        getWhiskeyById,
        getWhiskeyBySearch
      }}
    >
      {props.children}
    </WhiskeyContext.Provider>
  );
};
