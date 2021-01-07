import React, { useContext, useRef } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Whiskey.css";

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
            className="form-control notes"
            placeholder="whiskey notes"
          />
        </div>
      </fieldset>
      <div className="buttonDiv">
      <Button variant="dark" className="button"
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          addWhiskeyNote();
        }}
        className="btn btn-primary"
      >
        SAVE
      </Button>
      <Button variant="dark" className="button" onClick={() => history.goBack()}>BACK</Button>
      </div>
    </form>
  );
};
