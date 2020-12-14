import React from "react";
import { Route } from "react-router-dom";
import { WhiskeyProvider } from "./whiskey/WhiskeyProvider";
import { WhiskeyList } from "./whiskey/WhiskeySearchList";
import { WhiskeySearch } from "./whiskey/WhiskeySearch";
import { Comparable } from "./whiskey/Comparable";

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
                <WhiskeyList {...props} />
            </>
          )}

        />
        <Route
          exact
          path="/to-try/:comparableId(\d+)"
          render={(props) => (
            <>
                <Comparable {...props} />
            </>
          )}

        />
      </WhiskeyProvider>
    </>
  );
};
