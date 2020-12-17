import React, { useContext, useRef } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import "./Whiskey.css";
import { useHistory } from "react-router-dom";


export const HaveTriedUserWhiskeyForm = (props) => {
  const { updateUserWhiskey } = useContext(WhiskeyContext);

  const notes = useRef(null);

  let history = useHistory()

  const addWhiskeyNote = () => {
    const userWhiskeyId = parseInt(props.match.params.userWhiskeyId)
    updateUserWhiskey(userWhiskeyId, {
      notes: notes.current.value,
    }).then(() => props.history.push("/have-tried"));
  };

  return (
    <form className="addNote">
      <fieldset>
        <div className="form-note">
          <label htmlFor="whiskeyNote">ADD NOTE</label>
          <input
            type="text"
            id="whiskeyNote"
            ref={notes}
            required
            autoFocus
            className="form-control"
            placeholder="whiskey notes"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          addWhiskeyNote();
        }}
        className="btn btn-primary"
      >
        SAVE
      </button>
      <button onClick={() => history.goBack()}>BACK</button>
    </form>
  );
};
