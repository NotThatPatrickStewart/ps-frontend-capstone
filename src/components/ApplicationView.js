import React from "react";
import { Route } from "react-router-dom";
import { WhiskeyProvider } from "./whiskey/WhiskeyProvider";
import { WhiskeySearchList } from "./whiskey/WhiskeySearchList";
import { WhiskeySearch } from "./whiskey/WhiskeySearch";
import { ToTryList } from "./whiskey/ToTryList";
import { HaveTriedList } from "./whiskey/HaveTriedList";
import { HaveTriedUserWhiskeyDetail } from "./whiskey/HaveTriedUserWhiskeyDetail";
import { HaveTriedUserWhiskeyForm } from "./whiskey/HaveTriedUserWhiskeyForm";
import { ToTryUserWhiskeyDetail } from "./whiskey/ToTryUserWhiskeyDetail";
import { ToTryUserWhiskeyForm } from "./whiskey/ToTryUserWhiskeyForm";

export const ApplicationViews = (props) => {
  return (
    <>
      <WhiskeyProvider>
        <Route
          exact
          path="/search"
          render={(props) => (
            <>
              <WhiskeySearch />
              <WhiskeySearchList {...props} />
            </>
          )}
        />
        <Route
          exact
          path="/to-try"
          render={(props) => (
            <>
              <ToTryList {...props} />
            </>
          )}
        />

        <Route
          exact
          path="/have-tried"
          render={(props) => (
            <>
              <HaveTriedList {...props} />
            </>
          )}
        />

        <Route
          exact
          path="/have-tried-userWhiskeys/:userWhiskeyId(\d+)"
          render={(props) => (
            <>
              <HaveTriedUserWhiskeyDetail {...props} />
            </>
          )}
        />

        <Route
          exact
          path="/have-tried-userWhiskeys/edit/:userWhiskeyId(\d+)"
          render={(props) => (
            <>
              <HaveTriedUserWhiskeyForm {...props} />
            </>
          )}
        />

        <Route
          exact
          path="/to-try-userWhiskeys/:userWhiskeyId(\d+)"
          render={(props) => (
            <>
              <ToTryUserWhiskeyDetail {...props} />
            </>
          )}
        />

        <Route
          exact
          path="/to-try-userWhiskeys/edit/:userWhiskeyId(\d+)"
          render={(props) => (
            <>
              <ToTryUserWhiskeyForm {...props} />
            </>
          )}
        />
      </WhiskeyProvider>
    </>
  );
};
