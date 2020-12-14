import React from "react";
import { Route } from "react-router-dom";
import { WhiskeyProvider } from "./whiskey/WhiskeyProvider";
import { WhiskeySearchList } from "./whiskey/WhiskeySearchList";
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
                <WhiskeySearchList {...props} />
            </>
          )}

        />
        <Route
          exact
          path="/to-try"
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
