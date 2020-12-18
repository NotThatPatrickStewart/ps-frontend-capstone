import React, { useContext, useRef } from "react";
import { WhiskeyContext } from "./WhiskeyProvider";
import "./Whiskey.css";
import { useHistory } from "react-router-dom";

export const ToTryUserWhiskeyForm = (props) => {
  const { updateUserWhiskey } = useContext(WhiskeyContext);

  const notes = useRef(null);
  const rating = useRef(null);

  let history = useHistory()

  const addWhiskeyNote = () => {
      const userWhiskeyId = parseInt(props.match.params.userWhiskeyId)
    updateUserWhiskey(userWhiskeyId, {
      notes: notes.current.value,
      rating: parseInt(rating.current.value),
    }).then(() => props.history.push("/to-try"));
  };
  return (
    <form className="addNote">
      <fieldset>
        <div className="form-notes">
          <label htmlFor="whiskeyNote">ADD NOTE</label>
          <input
            type="text"
            id="whiskeyNote"
            ref={notes}
            required
            autoFocus
            className="form-control notes"
            placeholder="optional"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-rating">
          <label htmlFor="whiskeyRating">ADD RATING 1-100</label>
          <input
            type="text"
            id="whiskeyRating"
            ref={rating}
            required
            autoFocus
            className="form-control"
            placeholder="add rating "
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
